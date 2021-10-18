import React, { Component } from 'react'

function userCreator(name, score) { // class의 생성자 함수
  const newUser = Object.create(functionStore); // creating empty object with prototype chain(일종의 상속이라고 생각하자.)

  // 실제로 Object.create를 통해 생긴 attribute
  // newUser.__proto__ : functionStore => 자바스크립트 엔진이 해당 객체에 속성이 없을 때 참조하는 다음 객체.
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

// new 연산자의 기능
// 호출된 함수의 실행 컨텍스트를 조작한다.
// local memory에 빈 객체를 만들고 그 주소를 this에 할당한다.
// 그 빈 객체에는 원래 함수의 prototype을 __proto__ 속성에 할당한다.
// 여기서는 this.__proto__ =  User.prototype와 같은 명령어
// 그리고 함수가 끝나기 직전에 return this를 암묵적으로 실행
// constructor로 사용하는 함수에 return이 없는 이유
// constructor 함수가 대문자를 사용하는 이유 : 반드시 new 연산자랑 사용하세요!!!
function User(name, score) {
  // new 연산자의 암묵적 코드 실행 this = Object.create(User.prototype);
  // new가 없거나 호출한 객체가 명시되지 않으면 this는 random global object
  this.name = name;
  this.score = score;
  // new 연산자의 암묵적 코드 실행 return this
}
const functionStore = { // constructor 외부 영역에서 선언되는 메소드와 정적 데이터
  increment: function () { this.score++ },
  login: function () { console.log("You're Logged In") },
  staticVar: 'staticVar like Class.static',
  __proto__: { nestedProto: "true" } // 이중 상속이라 보면 될 듯.
}

// constructor 함수에서 this.__proto__ 보다 깔끔한 방법?
User.prototype = functionStore; // new를 통해 User 함수를 호출했을 때 암묵적으로
// this.__proto__ = functionStore 코드를 실행해준다.


// class = function  + prototype
class ClassedUser {
  name: string;
  score: number;
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  };
  login() {
    console.log("You're Logged In")
  }
}


const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
const user3 = new User('Kim', 15); // 한 번 생성자로 생성되면 (Object.create(prototype))__proto__가 그 생성되는 순간에 고정되며, 이후에 생성자의 prototype주소를 바꾼다고 해도 이미 생성된 인스턴스에는 영향을 주지 않는다.
const user4 = new ClassedUser("James", 5);
console.log(ClassedUser.prototype);
// user4.__proto__ = functionStore;
// user4.nestedProto; 컴파일러 상 오류는 있으나 제대로 작동한다. 클래스라도 원리는 같다
user3.increment();
user3.login();
console.log(user3.staticVar, user3.score);
console.log(user3.nestedProto)
console.log(user3.__proto__);

console.log(user1.kms);
user1.increment();
user1.login();
console.log(user1.score);
console.log(user1.staticVar);

user1.__proto__ = { kms: "its new defined prototype sad" };
console.log(user1.staticVar);


const resolveElement = (value) => <h1>{value}</h1>


const a = new Promise((resolve, reject) => {
  setTimeout(() => resolve('success'), 5000);
})


// resolve 함수의 기능 -> 만들어진 promise 객체의 status를 fulfilled로 바꾸고 value를 넣은 인자값으로 바꿔준다. 실제 콜백은 여기에서 만드는 것이 아니다.
// reject 함수의 기능 -> 만들어진 promise 객체의 status를 rejected로 바꾸고 value를 (보통 에러 객체) 선택적으로 전달한다.

// DOM Object의 구성 내용
const html = {
  startTag: 'html',
  contents: [
    {
      startTag: 'head',
      contents: []
    }
    , {
      startTag: 'body',
      contents: []
    }
  ]
}

// 자바스크립트 엔진의 토큰, 어휘 분석
// const foo = 10; 을 토큰화
const Tokenized = [
  {
    type: 'keyword',
    value: 'const'
  },
  {
    type: 'name',
    value: 'foo'
  },
  {
    type: '=',
    value: '='
  },
  {
    type: 'num',
    value: 10
  },
  {
    type: ';',
    value: ';'
  }
]

const AST = {
  "type": "Program",
  "body": [{
    "type": "VaraibleDeclaration",
    "declarations": [{
      "type": "VariableDeclarator",
      "id": {
        "type": "Identifier",
        "name": "foo"
      },
      "init": {
        "type": "Literal",
        "value": 10
      }
    }],
    "kind": "const"
  }],
  "sourceType": "script"
}



export class OOP extends Component {
  render() {
    return (
      <>
        booiew
      </>
    )
  }
}

export default OOP
