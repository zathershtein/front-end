// 3*)(со звездочкой) Шоколадка имеет вид прямоугольника, разделенного на n×m долек.
// Шоколадку можно один раз разломить по прямой на две части. Определите, можно ли таким образом
// отломить от шоколадки часть, состоящую ровно из k долек. Программа получает на вход три числа:
// n, m, k и должна вывести YES или NO.

var k, m, n;

if (k < m * n) {
  !(k % n) || !(k % m) ? console.log("YES") : console.log("NO");
} else {
  console.log("NO");
};
