function lengthOrAdd(x: number | string)
{
    // typeof 로 분기처리
    if(typeof x === 'string')
    {
        return x.length
    }
    else
    {
        return x + 1
    }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }
function move(animal: Fish | Bird)
{
    if("swim" in animal)
    {
        animal.swim()
    }
    else
    {
        animal.fly()
    }
}


// 연습문제
function Func(input: string | string[] | number[])
{
    if(typeof input === 'string')
    {
        return input.length
    }
    else
    {
        return input[0]
    }
}


// 함수 type alias
type Add = (a: number, b:number) => number;
const addd: Add = (x, y) => x + y

function run(fn:Add)
{
    console.log( fn(3,5) )
}