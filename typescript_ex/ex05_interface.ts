interface User02
{
    name: string;
    age?: number;
}

const user2: User02 = {name: 'lee'}

interface Animal01
{
    name: string;
}

// 상속가능 (가져와서 추가 사용)
interface Dog extends Animal01
{
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

// 중복선언 가능
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

// 동적으로 받아서 처리 가능
interface Config 
{
    [key: string]: string | number;
}

interface ExtendedConfig extends Config
{
    // port가 반드시 들어와야 한다?
    port: number
}

const conf:ExtendedConfig = 
{
    a: 10,
    port: 100
}