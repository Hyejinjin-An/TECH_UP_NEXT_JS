"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Home() 
{
  const [activate, setActivate] = useState(false)
  const radiusLevels = ["rounded-sm", "rounded-md", "rounded-lg", "rounded-full"];
  const [roundLevel, setRoundLevel] = useState(0); // 클릭 할 때마다 0, 1, 2, 3 순으로 변경될 수 있도록

  return (
    <div>
      <Button
        onClick={ () => 
          {
            setActivate( (prev) => (!prev) ) 
            setRoundLevel( (prev) => (prev + 1) % 4 )
          }
        }
        className={cn(
          "cursor-pointer",
          "transition",
          "duration-3000",
          "rounded-md",
          activate && ( "bg-red-700 hover:bg-red-500/90 text-black" ),
          radiusLevels[roundLevel]
        )}
      >
        버튼
      </Button>
    </div>
  );
}
