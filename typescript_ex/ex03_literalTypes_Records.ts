let firstName: "kim";

type Direction = 'left' | 'right' | 'up' | 'down';

function action(dir:Direction)
{
    console.log(`moving${dir}`);
}

action('left')


// as const : 그대로 고정(상수느낌)
// readonly properties
const colors =
{
    fire: 'red',
    water: 'blue',
    grass: 'green'
} as const;


// Record
type UserInfo = Record<string, string>
type UserInfo1 = { (key:string):string }
const user01:UserInfo = 
{
    name: "kim",
    city: "seoul",
    age: "20"
}

type PokemonTypes = "fire" | "water" | "grass"
type TypeColor = Record<PokemonTypes, string>
const color: TypeColor =
{
    fire: "red",
    water: "blue",
    grass: "green"
}


// 연습문제
type PokemonType = "fire" | "water" | "grass";
type PokemonColor = "red" | "blue" | "green";
type TypeColorMap = Record<PokemonType, PokemonColor>;

const pokeColors: TypeColorMap = 
{
  fire: "red",
  water: "blue",
  grass: "green"
} 