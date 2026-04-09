import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// npx shadcn@latest add skeleton 
export function PokemonSkeleton() 
{
  return (
    <Card className="w-full rounded-md ring-2 ring-gray-200">
      <CardHeader className="flex justify-center">
        {/* 포켓몬 이름 스켈레톤 */}
        <Skeleton className="h-7 w-32" />
      </CardHeader>
      <CardContent>
        {/* 타입 배지 스켈레톤 */}
        <div className="flex justify-center gap-2 mb-4">
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        {/* 이미지 스켈레톤 */}
        <Skeleton className="w-full h-40 rounded-lg" />
      </CardContent>
    </Card>
  )
}