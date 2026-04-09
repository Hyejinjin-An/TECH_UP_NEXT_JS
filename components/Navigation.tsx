"use client" // client side 랜더링 (useState, useEffect 사용하므로?)

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FaMoon, FaSun } from "react-icons/fa6";
import Link from "next/link";

export function Navigation() 
{
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, []);
  
  return (
    <nav className="border-b mx-3">
      <div className="container flex h-20 max-w-screen-2xl justify-between items-center">
        
        <div className="flex gap-4 text-2xl">
          <Link href="/">
            <h2>포켓몬 도감</h2>
          </Link>
          <Link href="/about">
            <h2>About</h2>
          </Link>
          <Link href="/about/details">
            <h2>Details</h2>
          </Link>
        </div>
        
        <div className="flex gap-4">
          {mounted &&
            <Button
              variant="ghost"
              size="icon"
              onClick={ () => setTheme(theme==="dark"? "light":"dark") }
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-500"/>
              ):(
                <FaMoon className="text-yellow-500"/>
              )}
            </Button>
          }
        </div>

      </div>
    </nav>
  )
}