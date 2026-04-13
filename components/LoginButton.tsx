"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

// 2026.04.13 add
// db 조회한 값 받아올 인터페이스 추가
interface UserData
{
    id: number;
    oauth_id: string;
    name: string | null;
    email: string | null;
    data: {
        points: number;
    }
    created_at: string;
}

export default function LoginButton() 
{
    const { data: session, status } = useSession();
    const [userData, setUserData] = useState<UserData | null>(null);

    // 세션 정보가 바뀔 때마다 db에서 정보를 조회해 올 수 있도록 useEffect 추가
    useEffect( () => {
        const fetchUserData = async () => {
            if(session)
            {
                // db에서 users 정보 조회하는 api 파일 경로
                const res = await fetch('/api/users')
                const data = await res.json();
                console.log('DB 유저 정보: ', data);
                setUserData(data);
            }
        }
        fetchUserData();
    }, [session])

    if (status === "loading") 
    {
        return <Button disabled>로딩중...</Button>
    }
  
    if (session) 
    {
        return (
        <div className="flex items-center gap-2">
            <span className="text-sm">{session.user?.name}님</span>
            {/* userData가 있을 경우, 뒤 조건문으로 넘어감 */}
            {/* 조건문도 일치하는 경우 포인트 정보까지 출력 */}
            { userData && (
                <Badge variant="secondary">
                    {userData.data.points.toLocaleString()}
                </Badge>
            )}
            <Button onClick={() => signOut()}>로그아웃</Button>
        </div>
        )
    }
  
  return <Button onClick={() => signIn()}>로그인</Button>
}