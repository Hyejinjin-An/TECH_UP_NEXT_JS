import { Session } from "next-auth";
import { create } from "zustand";

interface UserState
{
    favorites: number[],
    setFavorite: (favorites: number[]) => void;
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
    loadFavorites: (session: Session | null) => Promise<void>
}

export const useUserStore = create<UserState>( (set) => { return {
    favorites: [],
    setFavorite: (favorites) => set( {favorites} ),
    addFavorite: (id) => set( state => ( {favorites: [...state.favorites, id]} )),
    removeFavorite: (id) => set( state => ( {favorites: state.favorites.filter(f => f !== id)} )),
    loadFavorites: async (session: Session | null) => { 
        if(!session) 
        { 
            set( {favorites: []} ) 
            return;
        } 
        
        try 
        {
            // session 정보가 바뀔 때 마다 api호출 한 결과 출력 및 state update
            const data = await fetch('/api/favorites').then( res => res.json() );
            set( {favorites : data} )
        } 
        catch (error) 
        {
            console.error('loadFavorites Error: ', error)
            set( {favorites: []} )
        }      
    }
    }
} )