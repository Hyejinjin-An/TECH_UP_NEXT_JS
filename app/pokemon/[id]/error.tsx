'use client'; // Error 컴포넌트는 클라이언트 컴포넌트여야 함

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error( {error, reset}: {
  error: Error;
  reset: () => void;
}) {

  return (
    <div >
      <div className="flex flex-col items-center justify-center gap-4 m-10">
        <h1 className="text-4xl font-bold">문제가 발생하였습니다.</h1>
        <p className="text-xl text-muted-foreground">포켓몬 데이터를 불러오지 못했어요.</p>
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <div className="flex gap-2">
          <Button onClick={reset}>다시 시도</Button>
          <Button render={<Link href="/" />} nativeButton={false}>
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
}