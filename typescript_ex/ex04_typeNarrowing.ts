// typeNarrowing
// Union 타입(두 개의 type을 | 로 연결 → 둘 중 하나의 타입이 와야 함)에서 실제 실행 시점 값을 기준으로 범위를 좁혀 컴파일러가 안전하게 추론하도록 만드는 기법
function lengthOrAdd(x: number | string)
{
    // typeof 로 분기처리 : 타입 두 개를 연결했기 때문에 둘 중 하나인 경우로 안전하게 추론 유도 가능
    if(typeof x === 'string')
    {
        return x.length
    }
    else
    {
        return x + 1
    }
}

// in
// 객체 안에 특정 프로퍼티가 존재하는지 확인하는 문법
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

// 챗지피티 실무 연습문제
// API 응답, 상태 객체, 다양한 타입 처리할 때 자주 사용
type Success = { data: string };
type Err = { error: string };

function handle(res: Success | Err) 
{
    if ("data" in res) 
    {
        console.log(res.data);
    } 
    else 
    {
        console.log(res.error);
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
