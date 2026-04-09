import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() 
{
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">

      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl text-muted-foreground">포켓몬을 찾을 수 없어요</p>
      <p className="text-sm text-muted-foreground">1-151번 포켓몬만 조회 가능</p>
      <Button render={<Link href="/" />} nativeButton={false}>
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </div>
  );
}