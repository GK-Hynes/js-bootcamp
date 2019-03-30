// A closure is the combination of a function with the lexical scope in which it was defined
// Currying is the process of transforming a single function that takes a lot of arguments into multiple functions that take a subset of those arguments

const myFunction = () => {
  const message = "This is my message";
  const printMessage = () => {
    console.log(message);
  };

  return printMessage;
};

const myPrintMessage = myFunction();
myPrintMessage();

// Counter
const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  };
};

const counter = createCounter();

counter.increment();
counter.decrement();
counter.decrement();
counter.count = 0; // Won't work because of closures
console.log(counter.get());

// Adder
const createAdder = a => {
  return b => {
    return a + b;
  };
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));
const add100 = createAdder(100);
console.log(add100(20));

// Tipper
const createTipper = tip => {
  return amount => amount * tip;
};

const tip20 = createTipper(0.2);
console.log(tip20(100));
