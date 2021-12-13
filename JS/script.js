"use script";

let num = 50;

/*while (num <= 55) {
  console.log(num);
  num++;
}*/

/*do {
  console.log(num);
  num++;
}
while (num < 55);*/

for (let i = 1; i < 10; i++) { //ЦИКЛИ
  if (i === 6) {
      //break; // цикл іде до 5
      continue; //цикл пропускає 6 
  }
  console.log(i);

 
}