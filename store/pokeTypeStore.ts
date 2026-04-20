import { PokemonTypeKey } from "@/config/pokemonTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PokeTypeState
{
    selectedTypes: PokemonTypeKey[];
    toggleType: (type: PokemonTypeKey) => void;
    resetTypes: () => void;
}

export const usePokeTypeStore = create<PokeTypeState>()
( 
  // localStorage에 저장하기 위해 zustand persist 사용
  persist(
    (set) => {
      return {
                selectedTypes: [],
                toggleType: (type) => {
                    set((state) => 
                    {
                        const newSelectedTypes = state.selectedTypes.includes(type) 
                        ? state.selectedTypes.filter(t=>t!==type) 
                        : [...state.selectedTypes, type]
                        return {selectedTypes:newSelectedTypes}
                    })
                },
                resetTypes: () => set({selectedTypes:[]})
            }
    }, {name:"pokeTypeStorage"}
  )
)