// 함수 type alias
// 함수 타입은 항상 화살표(`=>`) 로 반환 타입을 표시, 반환 값이 없는 경우는 `void`
type Add = (a: number, b:number) => number;

// addd 라는 변수는 반드시 Add 타입의 함수만 담을 수 있음
const addd:Add = (x, y) => x + y
// (x, y) => x + y  ----->  function (x,y) { return x+y }

function run(fn:Add)
{
    console.log( fn(3,5) )
}

// 실행
run(addd);

// 실행 순서
// 1. addd 함수가 run에 전달됨
// 2. fn 자리에 들어감
// 3. 실행됨

// 함수의 반환 타입이 객체일 때
// 화살표 함수에서 **객체를 바로 반환**하려면 `()`로 감싸야 함 
type CreateUser = (name: string, age: number) => 
{
    name: string;
    age: number;
    active: boolean;
};

const createUser: CreateUser = (name, age) => 
(
    {
        name,
        age,
        active: true
    }
);
