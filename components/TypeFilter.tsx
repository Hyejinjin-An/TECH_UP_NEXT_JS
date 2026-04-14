"use client"

import { getAllTypeNames, PokemonTypeKey } from "@/config/pokemonTypes";
import { useState } from "react";
import TypeBadge from "./TypeBadge";
import { useRouter, useSearchParams } from "next/navigation";

export default function TypeFilter()
{
    // const [selectedTypes, setSelectedTypes] = useState<PokemonTypeKey[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();

    const typeParams = searchParams.get('type');
    const selectedTypes = typeParams ? typeParams.split(',') : [];

    const handleClick = (type: PokemonTypeKey) =>
    {
        const params = new URLSearchParams(searchParams.toString());

        let newSelectedTypes: string[];
        if(selectedTypes.includes(type))
        {
            // 선택된 값에서 취소
            newSelectedTypes = selectedTypes.filter( t => t !== type );
            // setSelectedTypes( (prev) => prev.filter( t => t !== type ) )
        }
        else
        {
            // 선택
            newSelectedTypes = [...selectedTypes, type];
            //  setSelectedTypes( prev => [...prev, type] )
        }

        if(newSelectedTypes.length === 0)
        {
            params.delete('type');
        }
        else
        {
            params.set('type', newSelectedTypes.join(','));
        }

        params.set('page', '1');
        router.push(`/?${params.toString()}`)   // redirect == push
    }

    return (
        <div className="m-4 p-4 border-2 rounded-2xl">
            <div className="flex items-start gap-3">

                <h3 className="font-semibold">타입</h3>
                <div className="flex flex-wrap gap-2.5">
                    {
                        getAllTypeNames().map( (type:PokemonTypeKey) => {
                            return <TypeBadge
                                key={type}
                                typeName={type}
                                isSelected={selectedTypes.includes(type)}
                                onClick={ () => handleClick(type) }
                            />
                        })
                    }
                </div>

            </div>
        </div>
    )
}