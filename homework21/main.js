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
    break;
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
    break;
  case 3:
    var login = prompt("Логин");
    var password = prompt("Пароль");

    if (
      (login == "admin" && password == 123456) ||
      (login == "user" && password == 123456)
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
      cost = 5;
    } else if (weight <= 5 && weight < 10) {
      cost = 10;
    } else {
      cost = 15;
    }

    switch (type) {
      case "Standart":
        cost = cost * 1;
        break;
      case "Express":
        cost = cost * 1.5;
        break;
      case "Premium":
        cost = cost * 1.5;
        break;
      default:
        type = 0;
        break;
    }

    if (cost <= 0) {
      alert("Некорректный вес посылки!");
    } else if (type <= 0) {
      alert("Некорректный тип доставки!");
    } else {
      alert(`Итоговая стоимость доставки ${cost}$`);
    }
}
