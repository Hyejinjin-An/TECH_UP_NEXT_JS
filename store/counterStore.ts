import { create } from "zustand";

interface CounterStore
{
    count: number;
    inc: () => void;
    dec: () => void;
    reset: () => void;
}

// zustand 는 client 컴포넌트쪽에서만 사용할 수 있어서 불러서 사용할 경우, "use client" 필요
export const useCountStore = create<CounterStore>( (set) => { 
    return { 
        count: 0, 
        inc: () => set( (state) => ({count: state.count +1}) ),
        dec: () => set( (state) => ({count: state.count -1}) ),
        reset: () => set( (state) => ({count: 0}) ),
    }
});