import { supabase } from "@/lib/supabase";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// Next.js 전용 인증 라이브러리 -> Next-auth
export const authOption: NextAuthOptions = 
{
    providers: [
        GithubProvider({
            // 필수값 ! 붙이기 
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
            // issuer
            issuer: "https://github.com/login/oauth",
        }),
        GoogleProvider({
            // 필수값 ! 붙이기 
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        })
    ],
    session: {
        // jwt 방식?
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    // secret : 서명이 유효한지 확인하는 키
    secret: process.env.NEXTAUTH_SECRET,
    
    // 2026.04.13 supabase callback add
    callbacks: {
        async signIn( {user} ) {
            // dbd에서 유저 정보 조회 select
            const {data:existingUser} = await supabase
            .from('users')
            .select('*')
            .eq('oauth_id', user.id)
            .single();

            // db에서 조회한 유저 정보가 없을 경우 insert
            if (!existingUser) 
            {
                await supabase.from('users').insert({
                    oauth_id: user.id,
                    name: user.name,
                    email: user.email,
                    data: { points:10900 }
                })
            }

            return true;
        },

        async jwt( {token, user} )
        {
            if(user)
            {
                token.id = user.id; // user.id → JWT에 저장
            }

            return token;
        },

        async session( {session, token} )
        {
            if (session.user)
            {
                session.user.id = token.id as string; // JWT → session으로 전달
            }

            return session;
        }
    }
}


const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
