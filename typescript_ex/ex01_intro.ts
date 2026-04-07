// 2026.04.07
// :타입형 을 생략해도 ok, TypeScript쪽에서 타입 추론하여 지정
const age: number = 25;
// let age: number = 25;
const userName:string = 'Tom';
const isAdmin:boolean = true;

// 1. 배열
const arr:number[] = [1, 2, 3];
const db:[string, number] = ['a', 10];
// const anything:any = 'free';    // esLint에서 못 쓰게 막음 (:any)
const unknownVal:unknown = 10;

// any와 unknown의 차이
// age = anything;
// age = unknownVal;

// 2. 함수
function add(a: number, b: number): number
{
    return 10;
}
const greet = (name: string): void => 
{
  console.log("Hello " + name);
  // return 10; // 에러
};

// 3. Object
type User = 
{
  name: string;
  age?: number; // ? 선택적 속성
};
const u1: User = { name: "Tom" };

// 4. interface
interface User2 
{
  name: string;
  age?: number; // 선택적 속성
}
const u2: User2 = { name: "John" };
// void : 반환하는 값이 없다, return 값이 없다와 같다.
interface Person 
{
  name: string;
  speak(msg: string): void;
}
// 객체 안에 함수가 들어갈 수도 있다.
const p1: Person = 
{
  name: "Jane",
  speak(msg) {
    console.log(msg);
  },
};

// 5. 타입 별칭(alias)
type ID = string | number;
let userId: ID = 123;
userId = "abc";

// 6. 유니언&인터섹션
const val: string | number = "Hi"; // 유니언
type A = { a: string };
type B = { b: number };
type C = A & B; // 인터섹션

const obj: C = { a: "x", b: 1 };
