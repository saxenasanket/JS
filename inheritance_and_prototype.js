// add new value to prototype

function A() {
  this.a = 1;
}

function B() {
  this.b = 2;
}

A.prototype.d = 3;

const objA = new A();
const objB = new B();

console.log("d" in objA);

console.log("**************************");

// set prototype function

function C() {
  this.a = 1;
}

function D() {
  this.b = 2;
}

Object.setPrototypeOf(C.prototype, { b: "test" });

const objC = new C();

console.log("b" in objC);

const A1 = { name: "sanket" };
const B1 = { age: "20" };

Object.setPrototypeOf(A1, B1);

console.log("age" in A1);

//Object holds reference to previous prototype
// how instanceof works
// A instanceof B will be true when B's prototype is in prototype chain of A

function D1() {
  this.a = 1;
}

const objD1 = new D1();

D1.prototype = {
  fnc: function () {
    return true;
  },
};

const objD2 = new D1();

console.log(objD1);
console.log(objD1 instanceof D1);
console.log("fnc" in objD1);

console.log(objD2);
console.log(objD2 instanceof D1);
console.log("fnc" in objD2);

// inheritance using prototypes

// problem with this approach

function E() {
  this.a = 1;
}

function F() {
  this.b = 1;
}

E.prototype = new F();

const objE = new E();
const objF = new F();

console.log(objE instanceof F);
console.log(objE);
console.log(objF);

// IMPORTANT -->msolution

function E1() {
  this.a = 1;
}

function F1() {
  this.b = 1;
}

E1.prototype = new F1();

Object.defineProperty(E1.prototype, "constructor", {
  enumerable: false,
  configurable: "false",
  value: E1,
  writable: true,
});

const objE1 = new E1();
const objF1 = new F1();

console.log(objE1 instanceof F1);
console.log(objE1);
console.log(objF1);

// How to write classes in ES6 js

// extends takes care of setting new prototyping still retaining the constructor

class E2 {
  constructor(name) {
    this.name = name;
  }
}

class F2 extends E2 {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const objE2 = new E2("sanket");
const objF2 = new F2("john", "23");

console.log(objF2 instanceof E2);
console.log(objF2 instanceof F2);

console.log(objE2);
console.log(objF2);
