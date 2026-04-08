// 1. 객체의 타입을 지정할 때 사용
interface User02
{
    name: string;
    age?: number;
}

const user2: User02 = {name: 'lee'}

// 2. 상속가능 (가져와서 추가 사용)
interface Animal01 { name: string; }
interface Dog extends Animal01
{
    // name: string,
    bark(): void;
}

const dog:Dog = 
{
    name: "choco",
    bark()
    {
        console.log("멍멍")
    }
}

// 3. 중복선언 가능 (type 은 중복선언 불가)
// 👉 interface
// → 객체 구조 정의 + 확장 + 병합
// 👉 type
// → 유니온, 함수, 튜플 등 더 강력한 타입 표현
interface User03 {name: string}
interface User03 {age: number}
const u3: User03 = {name: 'kim', age: 20}

interface User04 
{
    readonly id: string;
    name: string;
}
const u4: User04 =
{
    id: '10',
    name: 'Jane'
}

// 4. 동적으로 받아서 처리 가능
interface Config 
{
    [key: string]: string | number;
}

interface ExtendedConfig extends Config
{
    port: number
}

const conf:ExtendedConfig = 
{
    a: 10,
    port: 100
}