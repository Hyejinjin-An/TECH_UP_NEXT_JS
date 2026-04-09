import PokemonCard from "@/components/PokemonCard";
import { getPokemon } from "@/lib/poketAPI";

export default async function PokemonDetails( {params} : {params: Promise<{id: string}>} )
{
    const {id} = await params;
    const pokemon = await getPokemon(id)
    return (
        <div className="flex justify-center m-4">
            <PokemonCard id={id} pokemon={pokemon} />
        </div>
    )
}