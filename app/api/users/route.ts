import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route";
import { supabase } from "@/lib/supabase";

export async function GET()
{
    // next-auth에 등록된 로그인 세션정보 가져오기
    // authOption -> /api/auth/[...nextauth]/authOption(NextAuthOptions)
    const session = await getServerSession(authOption);

    // 세션에 저장된 유저 정보가 없을 경우
    if(!session?.user)
    {
        return Response.json( {error: 'Unauthorized'}, {status: 401} )
    }

    const {data: user} = await supabase
    .from('users')
    .select('*')
    .eq('oauth_id', session.user.id) // 조건 oauth_id == session.user.id
    .single();

    return Response.json(user);
}