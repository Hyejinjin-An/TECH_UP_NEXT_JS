// literal type : 값 그 자체를 타입으로 쓰는 것
let firstName: "kim";

type Direction = 'left' | 'right' | 'up' | 'down';

function action(dir:Direction)
{
    console.log(`moving${dir}`);
}

action('left')


// as const : 그대로 고정(상수느낌) -> 값 전체를 리터럴로 고정
// readonly properties
const colors =
{
    fire: 'red',
    water: 'blue',
    grass: 'green'
} as const;


// Record<>
// → key는 K 타입, value는 T 타입인 객체를 의미
// 구조가 미리 정해지지 않은 Object를 표현할 때 자주 사용
type UserInfo = Record<string, string>
type UserInfo1 = { [key:string]: string }
const user01:UserInfo = 
{
    name: "kim",
    city: "seoul",
    age: "20"
}
const user001:UserInfo1 = 
{
    tuki: "singer",
    kokuseki: "japan"
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