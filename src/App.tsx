import React from 'react'

// 선언을 전처리라고 생각하면 되나?
let glo = 50;

console.log(global(5)(5)); // 함수 선언문은 전처리기에서 이미 변수와 주소가 등록된다.undefined가 아니다!

function global(input): (arg0: number) => number {


  function globalFunc(y) {
    return x + y + glo;
  }

  const glo = 70;
  const x: number = input;
  return globalFunc
}
let arrow;

arrow = (input) => {
  console.log(y);
  y = 99;
  // const glo = 99;
  let x: number;
  function globalFunc(y) {
    x++;
    return x + y + glo;
  }
  x = input;
  return globalFunc
}

function testingThis() {
  console.log(this);
}

let y;

const Person = function () {
  this.name = 'hello';
  this.people = 'muyaho';
  this.age = 30;
  this.kick = function () {
    console.log("i kicked!", this);
  }
  Person.prototype.play = function () {
    console.log("prototype play", this);
  }
}



const KMS = new Person() // new 연산자 : 실행 컨텍스트(this)가 바뀌게 하는 역할.
console.log(KMS);

KMS.play(); // function의 형태로 정해져 있으므로 this가 유동적 따라서 실행 주체인 KMS가 this가 된다.
KMS.kick();

const KMG = {
  kick: KMS.kick,
  play: KMS.play
}

KMG.play();  // arrow function -> 함수가 선언될 때의 context this
//function -> 함수를 실행시키는 주체 'this' 여기서는 KMG
//global scope에서 this는 undefined




// 객체의 curly brace를 보고 마치 함수 컨텍스트에 있다고 착각하게 된다.
// 반면 생성자 함수와 class 선언의 코드 블록은 다른 컨텍스트에 있는 것이 맞다!
// 다만 new 연산자를 통해 호출하기 떄문에 (사실상 그 함수들은 메소드로 수행되며, 이에 따라 this의 값이 new로 반한된 객체의 주소로 정해지는 것!)


const obj2 = {
  testingThis: () => { console.log(this) }, // 이 선언문(const obj2)을 수행하는 context는 global context이므로 this가 undefined상태이다. 즉 호출 멤버와 상관없이 this는 undefined로 고정되어 있어서 사용할 수 없다. 사용하고 싶으면 이 선언문을 this가 다르게 정의되어 있는 context에 작성해야 한다.
  name: "obj2"
}

const obj3 = {
  name: "obj3",
  testingThis: obj2.testingThis  // 메소드로 뽑아오면 this가 다르다.
}


obj2.testingThis();
obj3.testingThis();



const hoistedVariable = { name: 'kms' }


const arrowglobalFunc = arrow(5);
console.log(arrowglobalFunc(5));
console.log(arrowglobalFunc(5));
console.log(arrowglobalFunc(5));
console.log(arrowglobalFunc(5));
console.log(arrowglobalFunc(5));

// class => this가 바뀐 거대한 컨텍스트

const KimClass = class {

  // this -> new 연산자로 선언된 새로운 객체 주소.
  name: string = 'Default';
  age: number = 0;
  protoCheck: boolean = false;
  constructor(name, age) {
    console.log(name, 'constructor activated');
    this.name = name;
    this.age = age;
    // this.showInfo = () => {
    //   console.log(this.name);
    // }
  }

  showInfo = function () {
    console.log(this.name, this.age);
  }
  // prototype이 아닌 각 인스턴스 멤버



  showInfoArrow() { console.log(this.name, this.age) }
  // prototype에 등록
}
const MS = new KimClass('KMS', 30);
console.log(KimClass);

console.log(MS);
console.log(MS.constructor.prototype);

function thisText() {
  console.log(this);
}

const obj = {
  name: 'obj',
  age: 99,
  showInfo: MS.showInfo,
  makeClass: new KimClass('babo', 123), // 선언되는 순간 만들어진다. 주체 : global context
  fixedArrowThis: function () {
    console.log(this); // 실행 컨텍스트가 전역 컨텍스트이기 떄문에 this 안됨. constructor함수를 통해서 객체를 만드는 이유?
  },
  thisText
}



console.log(obj.makeClass.showInfo());

obj.fixedArrowThis();
obj.fixedArrowThis = () => {
  console.log(obj);
}

obj.fixedArrowThis();
obj.thisText();


({ name: "muyaho", age: 69, thisText: KimClass.prototype.showInfoArrow }).thisText();



const callBackObj = {
  testCallBack,
  callBack
} // global context

function testCallBack(callback: Function) {
  console.log(this); // functional context
  const a = 10;
  callback(a)
}



function callBack(arg0) {
  console.log(this);
  console.log(arg0);
  console.log(globalVar);
}
const globalVar = 20;
callBackObj.callBack(2);


class KClass {
  name: string
  constructor() {
    this.name = 'baka'
  }
  callBack = () => {
    console.log(this);
    console.log(this.name);
  }
}



callBackObj.testCallBack(new KClass().callBack);//globalVar가 선언만 되어 있다. 초기화 X
// CallBack 함수(Function)에는 멤버가 없다.

changeGlobal();

// globalVal = 50;


function changeGlobal(): void {
  globalVal = { muyaho: 'baka' };
}
let globalVal: { muyaho: string }; // hoisted
console.log(globalVal);



function nestedFunc() { // global scoped funciton
  const a = 55;
  console.log(a);
  console.log(this);
}

function addOne() {
  let a = 40;
  console.log(a)
  nestedFunc(); // 여전히 global scoped function 이 함수의 값들을 바로 참조할 수 없다. arguments로 pass해야 함.

}


addOne();

const obj5 = { nestedFunc, name: 'kms' };
obj5.nestedFunc();

const value = 'value1';

function printValue() {
  return value;
}

function printFunc(func) {


  function printValue() {

    // printFunc의 scope를 이어받았기 때문에 value를 참조할 때 printFunc의 것을 먼저 참조한다.
    console.log(obj5);
    return value;
  }

  console.log(printValue()); // value가 선언되어서 printFunc의 것을 참조하나 아직 undefined. 실행코드가 아직 값을 할당하지 않았다.
  const value = 'value2'
}

printFunc(printValue);


const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
    console.log(counter);
  }

  incrementCounter();
}


outer();
outer();
outer();
outer();


function mapArray(array: Array<any>, instruction: Function): Array<any> {
  const copiedArray: Array<any> = [];
  for (let i = 0; i < array.length; i++) {
    copiedArray.push(instruction(array[i]))
  }

  return copiedArray;
}

const multipliedArray = mapArray([1, 2, 3], input => { return { input: input * 10 } })

function filterArray(array: Array<any>, predicate: Function): Array<any> {
  const copiedArray: Array<any> = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      copiedArray.push(array[i]);
    }
  }
  return copiedArray;
}

const filteredArray = filterArray([1, 2, 3, 4, 5, 6, 7, 8], value => value % 2 === 0)
console.log(filteredArray);
console.log(multipliedArray);



class CustomClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  name: string;
  age: number;
  play() {

  }
  static staticData: string = 'muyaho'

}
console.log(CustomClass.prototype);
console.log(JSON.stringify(new CustomClass('kms', 20)));


function App() {
  return (
    <div>

    </div>
  )
}


export default App
