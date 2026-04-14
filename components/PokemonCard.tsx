"use client"
// npx shadcn@latest add card

import { getTypeConfig } from "@/config/pokemonTypes";
import { getPokemon, PokemonProps } from "@/lib/poketAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import TypeBadge from "./TypeBadge";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useUserInfo } from "@/contexts/UserInfoContext";
import { useSession } from "next-auth/react";
import { FaStar } from "react-icons/fa6";
import FavoriteDialog from "./FavoriteDialog";
import { Button } from "@base-ui/react";

// 포켓몬 카드 1장에 대한 tsx 파일
export default function PokemonCard( {id, pokemon}: {id: string, pokemon: PokemonProps} )
{
    // 2026.04.13 add (좋아요 버튼 추가 관련+세션정보)
    // start
    const {favorites, setFavorites} = useUserInfo();
    const [showDialog, setShowDialog] = useState(false);
    const isFavorited = favorites.includes(pokemon.id);
    const {data: session} = useSession();
    // end

    if (!pokemon) return <div>Loading...</div>

    const typeConfig = getTypeConfig(pokemon?.types[0])

    // 좋아요 버튼 클릭 시 핸들러
    // 로그인 정보가 없으면 alert로 끝
    // 로그인 정보가 있으면 찜목록 추가 관련 모달 호출
    function handleStarClick(e: React.MouseEvent)
    {
        e.preventDefault();     // 브라우저 기본 동작 막기 1. <a> → 링크 이동 2. <form> → 제출 + 새로고침 3. <input type="checkbox"> → 체크됨
        e.stopPropagation();    // 이벤트 버블링(전파)을 막는 함수, 이벤트가 부모로 올라가는 것 막음

        if(!session)
        {
            alert('로그인이 필요합니다.');
            return ;
        }
        setShowDialog(true);
    }

    return (
        <>
        <Link href={`/pokemon/${id}`}> 
            <Card
                className={cn(
                    "w-full relative",  // 2026.04.13 relative 추가
                    "border border-black",
                    "rounded-md",
                    "hover:opacity-80",
                    "hover:scale-102",
                    "transition-all",
                    "duration-200",
                    "hover:cursor-pointer",
                    "ring-3!",
                    typeConfig.ringClass
                )}
            >
                <CardHeader className="flex justify-center">
                    {/* 좋아요 버튼 추가 start */}
                    <Button 
                        onClick={handleStarClick} 
                        className={
                            cn
                            (
                                "absolute",
                                "top-2 right-2 z-10 p-1 rounded-full hover:bg-white/20"
                            )
                        }
                    >
                        {isFavorited ? (
                            <FaStar className="text-yellow-400" size={20} />
                            ) : (
                            <FaStar className="text-gray-400" size={20} />
                            )
                        }
                    </Button>
                    {/* 좋아요 버튼 추가 end */}
                    <CardTitle>
                        {`${pokemon?.koName} (${pokemon?.name})`}
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="flex justify-center gap-2">
                        {pokemon?.types.map( (t, i) => <TypeBadge key={i} typeName={t} /> )}
                    </div>
                    <Image 
                        src={pokemon?.image} 
                        alt={pokemon?.name} 
                        width={100} 
                        height={100}
                        className="w-full h-full"
                        priority
                    />
                </CardContent>
            </Card>
        </Link>

        {/* 좋아요 모달 추가 */}
        <FavoriteDialog
            open={showDialog}
            onOpenChange={setShowDialog}
            pokemonId={pokemon.id}
            pokemonName={pokemon.koName}
         />
        </>
    )
}