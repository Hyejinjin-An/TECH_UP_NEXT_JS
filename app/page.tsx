import PokemonCard from "@/components/PokemonCard";
import { PokemonSkeleton } from "@/components/PokemonCardSkeleton";
import { Button } from "@/components/ui/button";
import { getPokemon } from "@/lib/poketAPI";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

async function PokemonItem( {id}:{id: string} ) 
{
  await new Promise( r => setTimeout(r, 2000));
  const pokemon = await getPokemon(String(id))
  return (
    <PokemonCard id={String(id)} pokemon={pokemon} />
  )  
}

export default async function Home() 
{
  // const [activate, setActivate] = useState(false)
  // const radiusLevels = ["rounded-sm", "rounded-md", "rounded-lg", "rounded-full"];
  // const [roundLevel, setRoundLevel] = useState(0); // 클릭 할 때마다 0, 1, 2, 3 순으로 변경될 수 있도록
  
  // const pokemons = await Promise.all(
  //   Array.from({length:30}, (_,i) => { return getPokemon(String(i+1)) })
  // )

  return (
    <main className="w-full mx-auto px-20 py-8">
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
          Array.from( {length: 30}, (_, i) => {
            return (
              <Suspense key={i+1} fallback={<PokemonSkeleton />}>
                <PokemonItem id={String(i + 1)} />
              </Suspense>
            )
          })
        }
      </div>
    </main>
  );
}
