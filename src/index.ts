console.log("Hello,TypeScript");
let age: number = 0;
const pai: number = 3.14;
const x: number = 3;
console.log(x);
const $tax: number = 3;
const _msg: string = "Hello";
const message: String = "Hello";
const Message: String = "Hello";
const MESSAGE: String = "Hello";
const binX: number = 0b1010;
const octX: number = 0o012;
const decX: number = 10;
const hexX: number = 0x0a;
console.log(binX);
console.log(octX);
console.log(decX);
console.log(hexX);
const bignum1: bigint = 10n;
const bignum2: bigint = 9098989879879n;
console.log(bignum1);
console.log(bignum2);
const msg: string = "Hello 'HIRO'님";
console.log(msg);
const msg1: string = 'Hello "HIRO" 님';
const msg2: string = "Hello 'HIRO' 님";
console.log(msg1);
console.log(msg2);
const calc = `1+2=${1 + 2}`;
console.log(calc);
const user: string = "HIRO";
const msg3: string = `Hello ${user} 님`;
console.log(msg3);
const isYes: boolean = true;
const isNo: boolean = false;
console.log(isYes);
console.log(isNo);
const xy: null = null;
console.log(xy);
let z: number = 1;
let xx;
let y: undefined = undefined;
let zz: number = 2;
console.log(z);
console.log(xx);
console.log(y);
console.log(zz);
const a: symbol = Symbol("data");
const b: symbol = Symbol("data");
console.log(a === b);
console.log(a === a);

const num = 7;
const msg4 = "Hello";
enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}
const wd: Weekday = Weekday.Thursday;
console.log(wd);
const userdata: [string, number, number, number] = ["HIRO", 35, 175.2, 65.3];
console.log(userdata[0]);
console.log(userdata[1]);
console.log(userdata[2]);
console.log(userdata[3]);
const korean: number[] = [75, 90, 80, 100, 65, 30, 78, 98, 35, 54];
const userName: string[] = ["이름없음", "이름없음", "이름없음"];
userName[0] = "빌";
userName[1] = "스티브";
userName[2] = "일론";
console.log(userName);
const myArray: number[] = [1, 2, 3];
myArray[0] = 5;
console.log(myArray);
let myArray1: number[] = [1, 2, 3];
myArray1 = [4, 5, 6];
console.log(myArray1);
userName.push("히로");
console.log(userName);
userName.push("리사", "윌");
userName.unshift("키키");
console.log(userName);
console.log(userName.slice(1));
console.log(userName.slice(1, 3));
const shoesBox2D: string[][][] = [
    [
        ["A", "B", "C"],
        ["D", "E", "F"],
    ],
    [
        ["G", "H", "I"],
        ["J", "K", "L"],
    ],
];
shoesBox2D[1][0] = ["S", "T", "U"];
console.log(shoesBox2D);
const myArray2: number[][] = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
];
console.log(myArray2[1]);
console.log(myArray2[2][3]);
myArray2[1] = [10, 11];
myArray2[2][3] = 12;
console.log(myArray2[1]);
console.log(myArray2[2][3]);
const fruits: { [key: string]: string } = {
    Apple: "사과",
    Banana: "바나나",
    Orange: "오렌지",
};
fruits["오렌지"] = "귤";
console.log(fruits["Orange"]);
const numberArray: number[] = [0, 1, 2, 3, 4];
const lastElement = numberArray.pop();
console.log(`pop으로 꺼낸 값은 ${lastElement}`);
console.log(numberArray);
const firstElement = numberArray.shift();
console.log(`shift로 꺼낸 값은 ${firstElement}`);
console.log(numberArray);
const deletedElements = numberArray.splice(2, 3);
console.log(deletedElements);
console.log(numberArray);
numberArray.splice(2, 0, 6);
console.log(numberArray);
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const array3: number[] = [7, 8, 9];
const newArray = array1.concat(array2, array3);
console.log(newArray);
const array4: string[] = ["H", "E", "L", "L", "O"];
const newArray2 = array4.join("-");
console.log(newArray2);
const array5: number[] = [4, 3, 1, 2, 5];
array5.sort();
console.log(array5);
const array6: string[] = ["A", "B", "C"];
array6.reverse();
console.log(array6);
array6.reverse();
console.log(array6);
let x1: number = 0;
x1 = 5 + 3;
console.log(x1);
x1 = 5 - 3;
console.log(x1);
x1 = 6 / 2;
console.log(x1);
x1 = 5 % 2;
console.log(x1);
x1 = 2 ** 3;
console.log(x1);
x1 = 5 * 3;
console.log(x1);
const x2 = 3;
console.log(`x가 ${x}일 때`);
console.log(`x===3은 ${x === 3}`);
console.log(`x!==3은 ${x !== 3}`);
console.log(`x>3은 ${x > 3}`);
console.log(`x<3은 ${x < 3}`);
console.log(`x>=3은 ${x >= 3}`);
console.log(`x<=3은 ${x <= 3}`);
const x3: number = 1;
const y1: string = "1";

let age2 = 25;
let gender = "male";
let flag = true;

console.log(age2 >= 25 && gender === "male");
gender = "female";
console.log(age2 >= 25 && gender === "male");
const d = false;
const e = false;
const f = false;
console.log((!d && e) || f);
console.log((d && e) || f);
const msg5: string = "hello";
const msg6: string = "world";
const greeting: string = msg5 + "" + msg6;
console.log(greeting);
const mon: number = 11;
let days: number = 0;
switch (mon) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 2:
        days = 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    default:
        days = 0;
        break;
}
console.log(`${mon}월은 ${days}일까지입니다.`);
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
let currentPage = 1;
const totalPages = 10;
while (currentPage <= totalPages) {
    console.log(`현재 ${currentPage} 페이지를 읽고 있습니다.`);
    currentPage++;
}
console.log("모든 페이지를 다 읽었습니다.");
do {
    console.log(`${currentPage}/${totalPages} 페이지가 읽혔습니다.`);
    currentPage++;
} while (currentPage <= totalPages);
console.log("완료");
const english = [80, 65, 90, 75, 85];
let sum = 0;
for (let i = 0; i < 5; i++) {
    sum += english[i];
}
const average = sum / 5;
console.log(`5명의 영어 총점은 ${sum}점, 평균 점수는 ${average}점입니다`);
const math = [80, 65, 90, 75, 85];
let sum1 = 0;
for (const num of math) {
    sum1 += num;
}
const average1 = sum1 / 5;
console.log(`5명의 수학 총점은 ${sum1}점, 평균 점수는 ${average1}점입니다.`);
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        break;
    }
}
function getTriArea(): void {
    let area: number = 0;
    let base: number = 4;
    let height: number = 3;
    area = (base * height) / 2;
    console.log(`넓이는 ${area}입니다.`);
}
getTriArea();
function getTriArea1(base: number, height: number): void {
    let area: number = 0;
    area = (base * height) / 2;
    console.log(`넓이:${area}임`);
}
let baseSize: number = 4;
let heightSize: number = 3;
getTriArea1(baseSize, heightSize);
function greet(name: string, greeting: string = "Hello"): void {
    console.log(`${greeting},${name}`);
}
greet("HIRO");
greet("HIRO", "안녕하세요");
function s(...nums: number[]): void {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    console.log(`합계는 ${total}입니다.`);
}
s(1, 2, 3, 4);
s(5, 10);
function getTriArea2(base: number, height: number): number {
    let area: number = 0;
    area = (base * height) / 2;
    return area;
}
let areaSize = getTriArea2(4, 3);
console.log(`넓이는 ${areaSize}임메`);
const increment = function (n: number) {
    return n + 1;
};
console.log(increment(2));
function applyOperation(n: number, action: Function): void {
    console.log(action(n));
}
const decrement = function (n: number) {
    return n - 1;
};
applyOperation(5, decrement);
applyOperation(5, increment);
const increment1 = (n: number): number => {
    return n + 1;
};
const decrement1 = (n: number): number => {
    return n - 1;
};
console.log(increment1(2));
console.log(decrement1(2));
// getFirstElement 함수 정의
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
// number 타입의 배열
const numbers: number[] = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);
console.log(firstNumber);

// string 타입의 배열
const strings: string[] = ["사과", "귤", "바나나"];
const firstString = getFirstElement(strings);
console.log(firstString);
// if문 내의 변수 스코프
if (true) {
    let sum: number = 0;
    sum = 3 + 5;
    console.log(sum);
}
console.log(sum);
// for 문 내의 변수 스코프
for (let i = 0; i < 10; i++) {
    let sum: number = 0;
    sum = i + 10;
    console.log(`${i}:${sum}`);
}
console.log(sum);
// console.log(i);
// 함수 스코프 예1
function sampleFunction(): void {
    const x = 1;
    console.log(x);
}
sampleFunction();
console.log(x);
// 함수 스코프 예2
function sampleFunction2(): void {
    const x = 1;
    if (x == 1) {
        const y = 2;
        console.log(x);
        console.log(y);
    }
    for (let i = 0; i < 1; i++) {
        const x = 4;
        const z = 3;
        console.log(x);
        console.log(z);
    }
}
sampleFunction2();
console.log("===============글로벌 스코프============================");
// 글로벌 스코프 예
function sampleFunction3(): void {
    const x = 1;
    if (x == 1) {
        const y = 2;
        console.log(y);
        console.log(`if문 내:${globalVariable}`);
    }
    for (let i = 0; i < 1; i++) {
        const z = 3;
        console.log(z);
        console.log(`for문 내: ${globalVariable}`);
    }
    console.log(`함수 내: ${globalVariable}`);
}
const globalVariable: number = 10;
console.log(`글로벌 스코프:${globalVariable}`);
sampleFunction3();

class House {
    public color: string = "흰색";
    public rooms: number = 1;

    // 오버로드 시그니처
    activateSecurity(isOn: boolean): void;
    activateSecurity(isOn: boolean, hasGarage: boolean): void;

    // 실제 구현 (모든 오버로드를 처리)
    activateSecurity(isOn: boolean, hasGarage?: boolean): void {
        if (isOn) {
            console.log("보안 활성");
            if (hasGarage) {
                console.log("차고 보안도 활성화");
            }
        } else {
            console.log("보안 해제");
            if (hasGarage) {
                console.log("차고 보안도 해제");
            }
        }
    }
}

class GarageHouse extends House {
    // 차고 유무를 나타내는프로퍼티(true:차고있음/false:차고없음)
    public hasGarage: boolean = false;
    // 차고를 열고 닫는 메서드 정의(true:차고열기/false:차고닫기)
    public openGarage(isOpen: boolean): void {
        if (this.hasGarage) {
            // 차고가 있니?
            if (isOpen) {
                // 차고를 여는 경우
                console.log("차고를 열었습니다.");
            } else {
                // 차고를 닫는 경우
                console.log("차고를 닫았습니다.");
            }
        } else {
            // 차고가 없는 경우
            console.log("차고가 없습니다.");
        }
    }

    // 메서드 오버라이드
    activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("보안활성화하였다.");
            console.log("차고보안도활성화하였다");
        } else {
            console.log("보안해제하였다.");
            console.log("차고보안도해제하였다.");
        }
    }
}
const gt = new GarageHouse();
gt.activateSecurity(true);
gt.activateSecurity(false);
const gh = new GarageHouse(); // 인스턴스를 생성
gh.hasGarage = true; // 차고 있음
gh.openGarage(true); // 차고 열기
gh.openGarage(false); // 차고 닫기
gh.activateSecurity(true); //보안 활성화

const redHouse = new House();
redHouse.color = "red";
redHouse.rooms = 3;
const blueHouse = new House();
const greenHouse = new House();

// setter는 값을 저장, getter는 값을 가져온다
class Home {
    private _rooms: number = 0;
    // 세터 정의
    set rooms(count: number) {
        if (count < 0) {
            this._rooms = 0;
        } else {
            this._rooms = count;
        }
    }

    // 게터 정의
    get rooms(): number {
        return this._rooms;
    }
}
const redHome = new Home();
redHome.rooms = -3;
console.log(`방의 개수는 ${redHome.rooms}`);
class myHouse {
    activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("보안 시스템을 활성화했습니다.");
        } else {
            console.log("보안 시스템을 중지했습니다.");
        }
    }
}
const redMyHouse = new myHouse();
// 활성화
redMyHouse.activateSecurity(true);
// 중지
redMyHouse.activateSecurity(false);
class BigHouse {
    color: string;
    private _rooms: number;

    constructor() {
        this.color = "하얀색";
        this._rooms = 1;
    }
    // 게터 선언
    get rooms(): number {
        return this._rooms;
    }
    // 세터 선언
    set rooms(count: number) {
        if (count < 0) {
            this._rooms = 0;
        } else {
            this._rooms = count;
        }
    }
    activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("보안 시스템 활성화");
        } else {
            console.log("보안 시스템 중지");
        }
    }
}

const redBigHouse = new BigHouse();
console.log(`큰집 색은 ${redBigHouse.color}`);
console.log(`큰집 방수는 ${redBigHouse.rooms}`);
// 접근 제어자
class School {
    public color: string;
    private rooms: number;
    protected address: string;
    constructor(color: string, rooms: number, address: string) {
        this.color = color;
        this.rooms = rooms;
        this.address = address;
    }
    public displayColor(): void {
        console.log(`이 학교 색은 ${this.color}입니다.`);
    }
    private countRooms(): number {
        return this.rooms;
    }
    protected getAddress(): string {
        return this.address;
    }
}
const redSchool = new School("하얀색", 1, "서울시");
redSchool.color = "빨간색";
redSchool.displayColor();
// 아래는 접근 불가
// redSchool.rooms = 2;
// redSchool.countRooms();
// redSchool.address = "부산시";
// redSchool.getAddress();

class CatHouse {
    private rooms: number;
    constructor(rooms: number) {
        this.rooms = rooms;
    }
    protected getRooms(): number {
        return this.rooms;
    }
}
class DogHouse extends CatHouse {
    private hasDog: boolean;
    constructor(rooms: number, hasDog: boolean) {
        super(rooms);
        this.hasDog = hasDog;
    }
    public getHasDog(): boolean {
        return this.hasDog;
    }
    public getHouseDetails(): void {
        console.log(`방 수는 ${this.getRooms()}입니다.`);
        if (this.hasDog) {
            console.log("개가 있습니다.");
        }
    }
}
const catdogHouse = new DogHouse(3, true);
catdogHouse.getHouseDetails();
