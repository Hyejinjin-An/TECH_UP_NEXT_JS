"use client"

import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/counterStore";

import Link from "next/link";

export default function AboutPage()
{
    // 2026.04.14 zustand add
    const { count, inc, dec, reset } = useCountStore();

    return (
        <div className="container mx-10 p-4">
            <Link href="/about/details">
                <h1 className="text-4xl font-bold">About</h1>
            </Link>
            <p>React + Shadcn UI + PokeAPI</p>

            {/* 2026.04.14 zustand add */}
            <div className="flex flex-col items-center w-3xs mb-10">
                <div className="text-3xl">{count}</div>
                <div className="flex gap-2">
                    <Button onClick={inc}>+</Button>
                    <Button onClick={dec}>-</Button>
                    <Button onClick={reset}>초기화</Button>
                </div>
            </div>

        </div>
    )
}