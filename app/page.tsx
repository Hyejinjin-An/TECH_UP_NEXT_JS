import PokemonCard from "@/components/PokemonCard";
import { PokemonSkeleton } from "@/components/PokemonCardSkeleton";
import { PokemonPagination } from "@/components/PokemonPagination";
import { Button } from "@/components/ui/button";
import { getPokemon } from "@/lib/poketAPI";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function PokemonItem( {id}:{id: string} ) 
{
  // await new Promise( r => setTimeout(r, 2000));
  const pokemon = await getPokemon(String(id))
  return (
    <PokemonCard id={String(id)} pokemon={pokemon} />
  )  
}

// 2026.04.13 add
// 페이징처리를 위한 데이터 설정
const ITEMS_PER_PAGE = 12;
// const TOTAL_POKEMON = 151;
const TOTAL_POKEMON = 1025;

// export default async function Home() 
export default async function Home( {searchParams}: {searchParams:Promise<{page?: string}>}) 
{
  // const [activate, setActivate] = useState(false)
  // const radiusLevels = ["rounded-sm", "rounded-md", "rounded-lg", "rounded-full"];
  // const [roundLevel, setRoundLevel] = useState(0); // 클릭 할 때마다 0, 1, 2, 3 순으로 변경될 수 있도록
  
  // const pokemons = await Promise.all(
  //   Array.from({length:30}, (_,i) => { return getPokemon(String(i+1)) })
  // )

  // 2026.04.13 add start
  const params = await searchParams;
  const currentPage = Number(params.page);
  const totalPages = Math.ceil(TOTAL_POKEMON / ITEMS_PER_PAGE)  // ceil : 올림
  console.log(`현재 페이지: ${currentPage}`)

  // 페이징 처리 중 에러발생 시 1페이지로 돌려보냄
  if (isNaN(currentPage) || currentPage < 1)
  {
    // next/navigation 에서 import하기
    redirect('/?page=1')
  }

  // 제일 끝 페이지보다 큰 숫자가 들어온 경우 
  if (currentPage > totalPages)
  {
    // 제일 끝 페이지로 이동
    redirect(`/?page=${totalPages}`)
  }

  // pokemonId (포켓몬 카드 index)
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  // 페이지 이동 시 보여줄 포켓몬 카드 index ? Math.min()?ってなに？
  const NumOfPokemon = Math.min(ITEMS_PER_PAGE, TOTAL_POKEMON - startIdx);
  // 2026.04.13 add end

  return (
    <main className="w-full h-full mx-auto px-20 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 m-4">
        {/* <Button
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
        </Button> */}
        {/* {Array.from( {length:30}, (_, i) => {
          return <PokemonCard key={i} id={String(i+1)} />
        })} */}
        {/* {
          pokemons.map((pokemon, i) => {
            return <PokemonCard key={i} id={String(i+1)} pokemon={pokemon} />
          })
        } */}
        {
          Array.from( {length: NumOfPokemon}, (_, i) => {
            return (
              <Suspense key={i + 1 + startIdx} fallback={<PokemonSkeleton />}>
                <PokemonItem id={String(i + 1 + startIdx)} />
              </Suspense>
            )
          })
        }
      </div>

      {/* pagination 추가 */}
      <div className="flex justify-center py-6">
        <PokemonPagination 
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>

    </main>
  );
}
