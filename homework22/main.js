var task = Number(prompt("Номер задания:"));

switch (task) {
  case 1:
    for (i = 1; i <= 20; i++) {
      if (i % 4 == 0) {
        continue
      }
      console.log(i);
    }
    break;
  case 2:
    let number = Number(prompt("Введите число:"));
    let factorial = 1;

    for (j = 1; j <= number; j++) {
      factorial *= j;
    }
    console.log(`Факториал числа равен ${factorial}`);
    break;
  case 3:
    let board = "";
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 === 0) {
          board += "#";
        } else {
          board += " ";
        }
      }
      board += "\n";
    }
    console.log(board);
    break;
}
