// npx shadcn@latest add badge
// shadcn 의 뱃지 라이브러리 사용

import { getTypeConfig, PokemonTypeKey } from "@/config/pokemonTypes"
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export default function TypeBadge( {typeName}: {typeName: PokemonTypeKey} )
{
    const typeConfig = getTypeConfig(typeName);
    const IconEl = typeConfig.icon;

    return (
        <Badge
            className={cn(
                typeConfig.bgClass,
                typeConfig.textClass,
                "ring-2",
                typeConfig.ringClass, // 주변에 테두리 설정(radius랑 다름)
                "font-semibold",
                "flex items-center gap-1.5",
            )}
        >
            <IconEl />
            <span>{typeConfig.displayName}</span>
        </Badge>
    )
} 