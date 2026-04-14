"use client"

import { useCountStore } from "@/store/counterStore"

export default function DetailsPage()
{
    // use client 를 사용할 경우 await, async을 사용할 수 없음.
    // await new Promise( r => setTimeout(r, 2000) );

    // 2026.04.14 zustand add
    const count = useCountStore( (state) => state.count );
    return (
        <div className="container mx-10 p-4">
            <h1 className="text-4xl font-bold">About Details</h1>
            <p>React + Shadcn UI + PokeAPI</p>
            {/* 2026.04.14 zustand add */}
            <p className="text-3xl">count : {count}</p>
        </div>
    )
}