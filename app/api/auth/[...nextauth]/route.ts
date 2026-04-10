import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

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
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET
}


const handler = NextAuth(authOption);
export { handler as GET, handler as POST };