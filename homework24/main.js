const person = {
  name: "Роман",
  age: 17,
  isProgrammer: false,
};

console.log(person);

const object = {};

function isEmpty(obj) {
  for (const key in obj) {
    return obj;
  }
  return "Объект пустой.";
}

console.log(isEmpty(object));

const TASK = {
  title: "task",
  description: "is my task",
  isCompleted: false,
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

const updatedTask = cloneAndModify(TASK, {
  isCompleted: true,
  description: "is still my task",
});

for (let key in updatedTask) {
  console.log(`${key}: ${updatedTask[key]}`);
}

function callAllMethods(obj) {
  for (const key in obj) {
    if (typeof obj[key] === `function`) {
      obj[key].call(obj);
    }
  }
}

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

callAllMethods(myObject);
