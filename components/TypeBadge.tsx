// npx shadcn@latest add badge
// shadcn 의 뱃지 라이브러리 사용

import { getTypeConfig, PokemonTypeKey } from "@/config/pokemonTypes"
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react";


// 2026.04.14 add
interface TypeBadgeProps
{
    typeName: PokemonTypeKey;
    onClick?: () => void;   // ?: -> 있을수도 있고 없을수도 있음
    isSelected?: boolean;   // ?: -> 있을수도 있고 없을수도 있음
}

export default function TypeBadge( {typeName, onClick, isSelected}: TypeBadgeProps )
{
    const typeConfig = getTypeConfig(typeName);
    const IconEl = typeConfig.icon;

    // add
    const isFilterMode = !!onClick  // onclick 값이 있으면 true

    const BadgeContent = (
        <Badge
            className={cn(
                typeConfig.bgClass,
                typeConfig.textClass,
                "ring-2",
                typeConfig.ringClass, // 주변에 테두리 설정(radius랑 다름)
                "font-semibold",
                "flex items-center gap-1.5",
                // add
                isFilterMode && !isSelected && "bg-gray-100! text-gray-400! ring-gray-300! opacity-50",
                isFilterMode && "cursor-pointer hover:scale-105 hover:opacity-85"
            )}
        >
            <IconEl />
            <span>{typeConfig.displayName}</span>
        </Badge>
    )

    if(isFilterMode)
    {
        return <Button onClick={onClick}>{BadgeContent}</Button>
    }
    return BadgeContent;
} 