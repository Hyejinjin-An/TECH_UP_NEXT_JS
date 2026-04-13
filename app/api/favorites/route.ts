import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route";
import { supabase } from "@/lib/supabase";

// 좋아요 api 작성
export async function GET()
{
    const session = await getServerSession(authOption);
    if(!session?.user)
    {
        return Response.json( {error: 'Unauthorized'}, {status: 401} )
    }

    const {data: favorites} = await supabase
        .from('favorites')
        .select('pokemon_id')
        .eq('oauth_id', session.user.id)
    
    console.log('favorites db select: ', favorites);    // [{pokemon_id: 1}, {pokemon_id: 20}]
    const pokemonIds = favorites?.map( f => f.pokemon_id ) || [];
        
    // 좋아요 누른 포켓몬을 배열로 다 가져옴
    return Response.json(pokemonIds);
}

// 좋아요 버튼 눌렀을 때 db에 추가
export async function POST(request: Request)
{
    const session = await getServerSession(authOption);
    if(!session?.user)
    {
        return Response.json( {error: 'Unauthorized'}, {status: 401} )
    }

    // param
    const { pokemon_id } = await request.json();
    // insert error
    const { error } = await supabase
        .from('favorites')
        .insert( {oauth_id: session.user.id, pokemon_id} )
    
    if(error)
    {
        return Response.json( {error: error}, {status: 400} )
    }

    return Response.json( {success: true} )
}

// 좋아요 정보 삭제
export async function DELETE(request: Request)
{
    const session = await getServerSession(authOption);
    if(!session?.user)
    {
        return Response.json( {error: 'Unauthorized'}, {status: 401} )
    }

    const { searchParams } = new URL(request.url);
    const pokemon_id = searchParams.get('pokemon_id');

    const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('oauth_id', session.user.id)
        .eq('pokemon_id', Number(pokemon_id))
    
    if (error)
    {
        return Response.json( {error: error.message}, {status: 400} );
    }

    return Response.json( {success: true} )
}