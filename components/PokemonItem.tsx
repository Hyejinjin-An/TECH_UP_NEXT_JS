import { getPokemon, PokemonProps } from "@/lib/poketAPI";
import { useEffect, useState } from "react";
import { PokemonSkeleton } from "./PokemonCardSkeleton";
import PokemonCard from "./PokemonCard";

export default function PokemonItem( {id}: {id: number} )
{
    const [pokemon, setPokemon] = useState<PokemonProps | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchPokemmon = async () => {
            try 
            {
                const data = await getPokemon( String(id) )
                setPokemon(data)    
            } 
            catch (error) 
            {
                console.error(`Failed to fetch pokemon ${id}: ${error}`)
            }
        }
        fetchPokemmon();
    }, [])

    if (loading || !pokemon)
    {
        return <PokemonSkeleton />
    }
    
    return <PokemonCard id={ String(id) } pokemon={pokemon} />
}