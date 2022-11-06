// 자료형

// 1. 문자형 String
const nickname1 = "Mike";
const nickname2 = "Mike"; // 'Mike'
const nickname3 = `Mike`;

const message1 = "I'm a girl.";
const message2 = "I'm a girl."; // 'I\'m a girl.'

// `(백틱)은 문자열 내부에 변수가 있을 때 활용
const message3 = `My name is ${nickname1}.`;
console.log(message3); // "My name is Mike."

// 표현식도 활용 가능
const message4 = `나는 ${10 + 7}살 입니다.`;
console.log(message4); // "나는 17살 입니다."

// 2. 숫자형 Number
const age = 30;
const PI = 3.14; // 소수점 표현도 가능

// 사칙연산
console.log(1 + 2); // + 더하기 // 3
console.log(10 - 3); // - 빼기 // 7
console.log(3 * 2); // * 곱하기 // 6
console.log(6 / 3); // / 나누기 // 2
console.log(6 % 4); // % 나머지 // 2

// 그 외.
// 1. 숫자를 0으로 나누면
const x = 1 / 0;
console.log(x); // Infinity(무한대)

// 2. 문자열을 숫자로 나누면
const nickname4 = "Jane";
const y = nickname4 / 2;
console.log(y); // NaN(Not a number)

// 3. 불린형 Boolean
const a = true; // 참
const b = false; // 거짓

// 예)
const nickname5 = "YuJeong";
const age1 = 17;

console.log(nickname5 == "YuJeong"); // true
console.log(age1 > 20); // false

// 4. null & undefined
// null : 존재하지 않는 값
// undefined : 값이 할당되지 않음.

let grade;
console.log(grade); // undefined

let user = null; // user는 존재하지 않음.

// 5. typeof 연산자 : 변수의 자료형을 알아낼 수 있음.
const weather = "cloud";

console.log(typeof 3); // "number"
console.log(typeof weather); // "string"
console.log(typeof true); // "boolean"
console.log(typeof "xxx"); // "string"
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof Infinity); // "number"
console.log(typeof NaN); // "number"

// Tip!!
// 1. ` 이 외에 방법으로 변수를 사용하면 그대로 노출됨.
const nickname6 = "GyeoUl";
const message5 = "My name is ${nickname6}.";
console.log(message5); // "My name is ${nickname6}."

// 2. 문자형 + 문자형 = 하나의 문자형
const c = "나는 ";
const d = " 입니다.";

console.log(c + nickname6 + d); // "나는 GyeoUl 입니다."

// 3. 숫자형 + 문자형 = 문자형
const age2 = 20; // number
console.log(c + age2 + "살" + d); // "나는 20살 입니다."
