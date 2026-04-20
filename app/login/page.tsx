import LoginButton from "@/components/LoginButton"

export default function LoginPage() 
{
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">로그인이 필요합니다</h1>
      <LoginButton />
    </div>
  )
}