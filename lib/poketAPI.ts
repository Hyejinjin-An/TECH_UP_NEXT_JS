import { PokemonTypeKey } from "@/config/pokemonTypes";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";
import { notFound } from "next/navigation";

// 포켓몬API를 fetch로 가져오기.
export interface PokemonProps
{
    id: number; // 2026.04.13 add
    name: string,
    koName: string,
    types: PokemonTypeKey[],
    image: string
}

export async function getPokemon(id:string): Promise<PokemonProps>
{
    try 
    {
        const pokemonId = Number(id)
        // param(포켓몬 번호) 검증
        if(!Number.isInteger(pokemonId) || pokemonId < 1 || pokemonId > 151)
        {
            notFound();
        }


        // console.log(`${id}번 포켓몬 API 호출`)
        const [res, speciesRes] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
                next:{revalidate:3600} 
                // cache: 'no-store'
            }),
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
                next:{revalidate:3600}
                // cache: 'no-store'
            })
        ])

        if(!res.ok || !speciesRes.ok)
        {
            throw new Error(`포켓몬 데이터를 불러올 수 없음: ${id}`)
        }
    
        // api 결과가 404인 경우(URL에러 등..)
        // if(res.status === 404 || speciesRes.status === 404)
        // {
        //     notFound();
        // }

        const data = await res.json();
        const speciesData = await speciesRes.json();

        const result = 
        {
            id: data.id,    // 2026.04.13 add
            name: data.name,
            koName: speciesData.names.find( (n:{language: {name: string}}) => n.language.name === 'ko' )?.name,
            types: data.types?.map( (t:{type: {name: string}}) => t.type.name ),
            image: data.sprites.other["official-artwork"].front_default
        }

        return result;
    } 
    catch (error)
    {
        console.error(error);
        throw error;
    }
}


// 2026.04.14 add 
export async function getPokemonByType(typeName: string): Promise<number[]>
{
    const res = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`, 
        {
            next: {revalidate: 86400}   // 24시간
        }
    )

    if(!res.ok) return []

    const data = await res.json();
    return data.pokemon.map( (p: {pokemon: {url:string}}) => {
        const id = parseInt(p.pokemon.url.split("/")[6])
        return id
    }).filter( (id: number) => id <= 1025)
}

// 2026.04.14 add 
export async function getPokemonByTypes( types: string[]): Promise<number[]>
{
    if( types.length === 0) return []
    const result = await Promise.all(
        types.map( type => getPokemonByType(type) )
    )

    // flat() : 배열 내 배열을 하나의 배열로 풀어서 만들어줌
    // const finalRes = result.flat();
    // return [...new Set(finalRes)]

    // 연습문제
    const set = new Set(result.flat());
    return [...set].sort( (a, b) => a-b )
}