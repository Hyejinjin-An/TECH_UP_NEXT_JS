type typeUser = 
{
  name: string;
  age: number;
};

const user1: typeUser = { name: "철수", age: 20 };
type Car = 
{
  readonly brand: string;
  year: number;
};

const myCar: Car = { brand: "Tesla", year: 2024 };
myCar.year = 2025;     // 가능
// myCar.brand = "Hyundai"; // 오류! readonly 속성은 수정 불가


// 연습문제
type UserProfile  = 
{
    readonly id: number;
    name: string;
    age: number;
    email: string;
}

const user: UserProfile = 
{
  id: 1001,
  name: "Kim",
  age: 22,
  email: "kim@example.com"
};

user.name = "Lee";    // OK
// user.id = 2000;       // 오류 발생 : id는 수정 불가
