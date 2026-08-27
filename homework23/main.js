function calculateFinalPrice(base_price, discount, nalog) {
  discount_price = base_price - (base_price / 100) * discount;
  nalog_price = discount_price * nalog;
  price = discount_price + nalog_price;
  return price;
}

console.log(calculateFinalPrice(100, 10, 0));

function checkAccess(login, password) {
  if (login == "admin" && password == 123456) {
    return "Доступ разрешен.";
  } else {
    return "Доступ запрещен.";
  }
}
console.log(checkAccess("admin", 123456));

function getTimeOfDay(time) {
  if (time <= 5 && time >= 0) {
    return "Ночь.";
  } else if (time >= 6 && time <= 11) {
    return "Утро.";
  } else if (time >= 12 && time <= 17) {
    return "День.";
  } else if (time >= 18 && time <= 23) {
    return "Вечер.";
  } else return "Некорректное время!";
}
console.log(getTimeOfDay(0));

function findFirstEven(start, end) {
  if (start > end) {
    return "Некорректный диапазон!";
  } else {
    for (start = start; start <= end; ) {
      if (start % 2 == 0) {
        return start;
      } else start += 1;
    }
    return "Чётных чисел нет";
  }
}
console.log(findFirstEven(9, 9));
