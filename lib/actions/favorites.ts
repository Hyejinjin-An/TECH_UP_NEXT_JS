'use server'

import { authOption } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { supabase } from "../supabase";

export async function addFavoriteAction(pokemonId: number)
{
    const session = await getServerSession(authOption);
    if(!session?.user)
    {
        throw new Error("Unauthorized")
    }

    const {error} = await supabase
        .from('favorites')
        .insert( {oauth_id: session.user.id, pokemon_id: pokemonId} )
    
    if (error)
    {
        throw new Error(error.message)
    }
}

export async function removeFavoriteAction(pokemonId: number)
{
    const session = await getServerSession(authOption);
    if(!session?.user)
    {
        throw new Error("Unauthorized")
    }

    const {error} = await supabase
        .from('favorites')
        .delete()
        .eq('oauth_id', session.user.id)
        .eq('pokemon_id', pokemonId)

    if (error)
    {
        throw new Error(error.message)
    }
}