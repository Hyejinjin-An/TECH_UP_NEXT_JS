import { useState } from "react";

function identity<T>(value:T): T
{
    return value
}

// 실제 사용 시 타입 명시
identity<number>(10);
// 타입을 명시하지 않으면 typeScipt쪽에서 추론하기 때문에 사용해도 상관 X
identity("hi")

function getFirst<T>(arr:T[]): T
{
    return arr[0]
}

getFirst<number>([1, 3, 5])
getFirst(['a', 'b', 'c'])

// 상속 받는 것이어야만 할 때도 있다.
// 타입을 별도로 변경할 수 없다.
interface PokemonContainer<T extends string>
{
    pokemonName: T
}
const firePokemon: PokemonContainer<"파이리"> = 
{
    // pokemonName: "체리" // T가 같은 값이어야 한다.
    pokemonName: "파이리"
}
// const numberPokemon: PokemonContainer<number> = {
//     pokemonName: 10
// }

interface Pokemon<T, U>
{
    id: T,
    name: U
}
const poke1: Pokemon<number, string> = {id: 25, name: '피카츄'}
const poke2: Pokemon<string, string> = {id: '25', name: '피카츄'}


// useState
function Test()
{
    const [count, setCount] = useState<number>(0)
    const [user, setUser] = useState<{name:string; age:number}>({
        name: "Tome",
        age: 10
    })
    const [name, setName] = useState("피카츄")
    const [list, setList] = useState<string[]>([]) // any[]
}


// 연습문제
function TestEx()
{
    const [pokemonList, setPokemonList] = useState<string[]>(["피카츄", "라이츄", "파이리"])
    // TODO : 리터럴 타입으로도 가능한지?
    type pokemonList = "피카츄" | "라이츄" | "파이리";
    const [pokemonList1, setPokemonList1] = useState<pokemonList[]>(["피카츄", "라이츄", "파이리"]); 
}