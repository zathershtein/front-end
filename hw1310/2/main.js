// 2) Создайте массив d3 с числовыми величинами 45,78,10,3. Добавьте в массив d3 еще одно число (например, d[7] = 100) Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.

let d3 = [45, 78, 10, 3];

d3[7] = 100;

let sum3 = 0;

for (const key in d3) {
  sum3 += d3[key];
}

console.log(sum3);
