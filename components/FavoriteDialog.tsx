// shadcn alert 라이브러리 설치
// npx shadcn@latest add alert-dialog
import { useUserInfo } from "@/contexts/UserInfoContext";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";

interface favoritesProps
{
    open: boolean,
    onOpenChange: (open:boolean) => void;
    pokemonId: number;
    pokemonName: string;
}

export default function FavoriteDialog(
    // param 타입 설정
    { open, onOpenChange, pokemonId, pokemonName }: favoritesProps )
{
    const { favorites, setFavorites } = useUserInfo();
    // 이미 좋아요 클릭해서 db에 저장되어있는지 확인?
    const isFavorited = favorites.includes(pokemonId); 

    async function handleConfirm()
    {
        if(isFavorited)
        {
            // db에서 좋아요 삭제
            // method를 설정해주지 않으면 제일 위에 있는 것으로 실행됨
            await fetch(`/api/favorites?pokemon_id=${pokemonId}`, {method: "DELETE"})
            // 해당 param과 다른 리스트를 보여주기 위해 재설정 setFavorites()
            setFavorites( (prev) => prev.filter( id => id !== pokemonId ) )
        }
        else
        {
            // db에서 좋아요 추가
            await fetch(`/api/favorites`, 
                {
                    method: "POST", 
                    headers: {'Content-Type': 'application/json'}, 
                    body: JSON.stringify( {pokemon_id: pokemonId} )
                });
            setFavorites( [...favorites, pokemonId] )
        }

        onOpenChange(false); // 창닫기
    }

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="max-w-xs!">

                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {/* 이미 좋아요 표시가 된 포켓몬이라면 취소*/}
                        {/* 좋아요 표시 안 된 포켓몬이라면 추가 */}
                        {isFavorited ? `${pokemonName} 찜하기 취소` : `${pokemonName} 찜하기`}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {isFavorited ? '찜 목록에서 제거하시겠습니까?' : '찜 목록에 추가하시겠습니까?'}
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>취소</AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>확인</AlertDialogAction>
                </AlertDialogFooter>

            </AlertDialogContent>
        </AlertDialog>
    )
}