"use strict";
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

const getUserAverageAge = function (array) {
  let totalAge = 0;

  users.forEach(function (user) {
    totalAge += user.age;
  });

  return totalAge / array.length;
};

const averageAge = getUserAverageAge(users);

console.log(averageAge);

function getAllAdmins(array) {
  const admins = [];
  array.forEach(function (user) {
    if (user.isAdmin === true) {
      admins.push(user.name);
    }
  });
  return admins;
}

console.log(getAllAdmins(users));

function first(array, n) {
  const firstArray = [];
  if (n === undefined) {
    return array[0];
  }
  if (n > array.length) {
    return `Значение ${n} больше длинны массива`;
  } else if (n === 0) {
    return firstArray;
  }
  for (let i = 0; i < n && i < array.length; i++) {
    firstArray.push(array[i]);
  }
  return firstArray;
}

console.log(first(users, 10));
