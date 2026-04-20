import PokemonCard from "@/components/PokemonCard";
import { getPokemon } from "@/lib/poketAPI";
import type { Metadata } from "next";

export async function generateMetadata( {params}: { params: Promise<{ id: string }>}): Promise<Metadata> 
{
  const { id } = await params;
  const pokemon = await getPokemon(id);

  if (!pokemon) {
    return { title: "포켓몬을 찾을 수 없습니다" };
  }

  return {
    title: `${pokemon.koName}`,
    description: `${pokemon.koName}의 상세 정보`,
    openGraph: {
      title: pokemon.koName,
      description: `${pokemon.koName}(${pokemon.koName})의 상세 정보`,
      images: [
        {
          url: pokemon.image,  // 포켓몬 이미지 URL
          width: 475,
          height: 475,
          alt: pokemon.koName,
        }
      ],
    },
  };
}

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

