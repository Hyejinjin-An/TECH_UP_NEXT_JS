"use client"

import { useSession } from "next-auth/react";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"

// 2026.04.13
// user 정보 전역적으로 관리하기 위한 tsx 작성

interface UserInfoContextType
{
    favorites: number[],
    setFavorites: Dispatch<SetStateAction<number[]>>;
}

// 초기값 설정
const UserInfoContext = createContext<UserInfoContextType>(
    {
        favorites: [],
        setFavorites: () => {}
    }
);

export function UserInfoProvider( {children}: {children:ReactNode} )
{
    // 사용자 정보 확인 가능
    const {data: session} = useSession();
    const [favorites, setFavorites] = useState<number[]>([]);

    // 사용자 정보가 바뀔 때마다 좋아요 누른 정보 조회
    useEffect( () => {
        const getUserFavorites = async () => 
        {
            if (session)
            {
                const res = await fetch('/api/favorites');
                const data = await res.json();
                setFavorites(data);
            }
            else
            {
                setFavorites([]);
            }
        }
        getUserFavorites();
    }, [session])

    return (
        <UserInfoContext.Provider value={ {favorites, setFavorites} }>
            {children}
        </UserInfoContext.Provider>
    )
}

// ??? 
export const useUserInfo = () => useContext(UserInfoContext);