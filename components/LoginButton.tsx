"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

export default function LoginButton() 
{
    const { data: session, status } = useSession();
  
    if (status === "loading") 
    {
        return <Button disabled>로딩중...</Button>
    }
  
    if (session) 
    {
        return (
        <div className="flex items-center gap-2">
            <span className="text-sm">{session.user?.name}님</span>
            <Button onClick={() => signOut()}>로그아웃</Button>
        </div>
        )
    }
  
  return <Button onClick={() => signIn()}>로그인</Button>
}