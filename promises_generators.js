// simple generator function and how to access this

function* genFunc() {
  yield "sanket";
  yield "yolo";
  yield "test";
}

for (let item of genFunc()) {
  console.log(item);
}

// states -> suspended start, suspended yield, executing, completed

// Excecution stack with generator function

// fnc is kept alive using itr and pushed back to stack when called again

function* fnc() {
  yield "sanket";
  return "something";
}

const itr = fnc();

const r1 = itr.next(); // holds two keys --> value, done
const r2 = itr.next();

console.log(r1);
console.log(r2);

// Promises

// problems with callbacks --> error handling, callback hell

// promise.all --> array of promises, resolves if all resolved

// promise.race  --> returns first promise that got resolved

// async await functionality using promises and generators

function* gen() {
  const a = yield new Promise((resolve, reject) =>
    setTimeout(() => resolve("hey"), 1000)
  );

  // IMPORTANT: above function is awaited here
  console.log("check this", a);
  const b = yield new Promise((resolve, reject) =>
    setTimeout(() => resolve("sanket"), 1000)
  );
}

const i = gen();

i.next().value.then((res) => i.next(res));
