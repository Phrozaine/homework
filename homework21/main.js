task = Number(prompt("Введите номер задания(1-4)"));

switch (task) {
  case 1:
    let number = Number(prompt("Введите число:"));

    if (number % 2 == 0) {
      number = "Число четное";
    } else {
      number = "Число не четное";
    }

    alert(number);
    brake;
  case 2:
    let age = prompt("Ваш возраст:");

    if (age < 18) {
      age = "Ваша скидка 10%";
    } else if (age >= 18 && age <= 65) {
      age = "Ваша скидка 20%";
    } else {
      age = "Ваша скидка 30%";
    }
    alert(age);
    brake;
  case 3:
    var login = prompt("Логин");
    var password = prompt("Пароль");

    if (
      (login = "admin" && password == 123456) ||
      (login = "user" && password == 123456)
    ) {
      alert("Доступ разрешен.");
    } else {
      alert("Доступ запрещен");
    }
    break;
  case 4:
    var weight = Number(prompt("Вес посылки"));
    var type = prompt("Тип доставки Standart/Express/Premium");
    var cost = 0;

    if (weight <= 0) {
      cost = 0;
    } else if (weight < 1) {
      cost = 1;
    } else if (weight <= 5 && weight < 10) {
      cost = 10;
    } else {
      cost = 15;
    }

    if (type == "Standart") {
      cost = cost * 1;
    } else if (type == "Express") {
      cost = cost * 1.5;
    } else if (type == "Premium") {
      cost = cost * 2;
    }

    if (cost <= 0) {
      alert("Некорректный вес посылки!");
    } else {
      alert(`Итоговая стоимость доставки ${cost}$`);
    }
}
