// 2026.04.07
// :타입형 을 생략해도 ok, TypeScript쪽에서 타입 추론하여 지정
const age = 25;
// let age: number = 25;
const userName = 'Tom';
const isAdmin = true;
// 1. 배열
const arr = [1, 2, 3];
const db = ['a', 10];
// const anything:any = 'free';    // esLint에서 못 쓰게 막음 (:any)
const unknownVal = 10;
// any와 unknown의 차이
// age = anything;
// age = unknownVal;
// 2. 함수
function add(a, b) {
    return 10;
}
const greet = (name) => {
    console.log("Hello " + name);
    // return 10; // 에러
};
const u1 = { name: "Tom" };
const u2 = { name: "John" };
// 객체 안에 함수가 들어갈 수도 있다.
const p1 = {
    name: "Jane",
    speak(msg) {
        console.log(msg);
    },
};
let userId = 123;
userId = "abc";
// 6. 유니언&인터섹션
const val = "Hi"; // 유니언
const obj = { a: "x", b: 1 };
