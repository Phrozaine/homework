var firstName = "Роман";
var lastName = "Фёдоров";
var isStudent = true;
var age = 17;
var currentYear = 2026;
var birthYear = currentYear - age;

var text = `Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent}. Я ${birthYear} года рождения`;

document.getElementById("result").textContent = text;

// Значение result 123456789falsetrue
