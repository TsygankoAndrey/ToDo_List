const taskInput = document.getElementById("taskInput");
const taskBlock = document.querySelector(".task-block");

const initialCheck = () => {
  const checkboxes = document.querySelectorAll(".checkbox");
  for (const checkbox of checkboxes) {
    const text =
      checkbox.parentElement.parentElement.querySelector(".task-title");

    if (checkbox.checked) {
      text.classList.add("checked");
    }

    checkbox.addEventListener("change", () => {
      console.log(checkbox);
      text.classList.toggle("checked");
    });
  }
};
initialCheck();

document.getElementById("addTaskButton").addEventListener("click", function () {
  const taskText = taskInput.value.trim(); // Получаем текст задачи и обрезаем пробелы в taskText
  const template = document.getElementById("todo-item");
  console.log(template);
  const content = template.content.cloneNode(true);

  const taskTitle = content.querySelector(".task-title");
  taskTitle.innerText = taskText;
  const checkbox = content.querySelector(".checkbox");

  checkbox.addEventListener("change", () => {
    taskTitle.classList.toggle("checked");
  });

  const deleteIcon = content.querySelector(".delete-outline");
  deleteIcon.addEventListener("click", () => {
    if (!checkbox.checked) {
      alert("Complete the task!");
    } else {
      console.log(taskTitle.parentElement);
      taskBlock.removeChild(taskTitle.parentElement);
    }
  });

  taskBlock.insertBefore(content, taskBlock.firstChild);
  taskInput.value = "";
});

/* ===== Tasks from Andrew =======

// const newEmployee = {
//     name: 'John',
//     age: 35,
//     job: {
//         position: 'IT Developer',
//         salary: 12312
//     },
// };
// // console.log(newEmployee);

// newEmployee.name = 'Tim';
// // console.log(newEmployee.name);
// console.log(newEmployee.age);

// newEmployee.age = 42;
// console.log(newEmployee.age);

// // console.log(newEmployee.job.position);

// newEmployee.job = {
//     position: 'Tutor',
//     salary: 800,
// }

// // console.log(newEmployee);

// const newEmployee2 = JSON.parse(JSON.stringify(newEmployee));

// newEmployee2.job.salary = 900;
// newEmployee2.age = 35;
// console.log('newEmployee', newEmployee, 'newEmployee2', newEmployee2);

// ===== the next day =======

// let newEmployee = {
//     name: 'John Doe',
//     age: 30,
//     city: 'New York',
//   };

//   let newName = newEmployee;
//   console.log(newEmployee);

//   newEmployee.name = 'Joan Doe';
//   console.log(newName);

//   let city = newEmployee.city;
//   newEmployee.city = 'Boston';
//   console.log(city);

//   let ageValue = newEmployee['age'];
//   ageValue = 28;
//   console.log(ageValue);

//   newEmployee.age = 31;
//   console.log(newEmployee);

// ====== далее - из GPT ========

//   let anotherObject = newEmployee; // Что происходит в этой строке?

//   anotherObject.name = "Jane Doe";
//   console.log(newEmployee.name); // Что выведет эта строка?

//   let newName = "city";
//   let cityValue = newEmployee[newName];
//   console.log(cityValue);
*/

/* ==== попробуем снова ==========

let newEmployee = {
  name: "John Doe",
  age: 31,
  city: "New York",
  job: {
    position: "IT Developer",
    salary: 10000,
  },
};
console.log(newEmployee); // изменилось значение position & salary

// newEmployee.name = 'Joan Doe';
// console.log(newEmployee);

// newEmployee.age = 33;
// console.log(newEmployee);

// newEmployee.job.position = 'Sales Manager';
// console.log(newEmployee);

let newCandidate = newEmployee;
newCandidate.job.position = "Full-Stack-Developer";
// console.log(newEmployee.job);
// console.log(newCandidate.job); //значения одинаковые

// newCandidate.job.salary = 13000;
// console.log(newEmployee);
// console.log(newCandidate); // значения одинаковые

console.log(newCandidate); // ссылаясь на объект newEmployee делает там изменения и выодит в консоль

let newCandidateClone = { ...newCandidate };
newCandidateClone.job.salary = 13500;

console.log(newCandidateClone); // поверхностная копия (вложенные объекты по-прежнему ссылаются на те же объекты памяти => изменяют и исходный объект/ оригинал)

let newCandidateAnotherClone = JSON.parse(JSON.stringify(newCandidate));
newCandidateAnotherClone.job.salary = 15000;

console.log(newCandidateAnotherClone); // глубокая копия (копирует и вложенные объекты и массивы => изменения происходят в копии, а не в исходнике)

newCandidateAnotherClone.name = "Joan Doe";
console.log(newCandidateAnotherClone); // старый объект остался неизменным
*/

// Задачи от Андрюшки//

/* задание 2.1 === присвоить в переменную массив из 4х чисел
let myArray1 = [4, 6, 2, 12];
console.log(myArray1);

//задание 2.2 === заменить первый элемент массива на новое число и вывести в консоль
myArray1[0] = 5;
console.log(myArray1);

//задание 2.3 === заменить последний элемент массива на любое другое число и вывести массив в консоль
myArray1[3] = 13;
console.log(myArray1);

//задание 2.4 === заменить последний элемент массива, присвоив ему значение первого элемента, и вывести массив в консоль
let lastElement = myArray1[0];
myArray1[myArray1.length - 1] = lastElement;
console.log(myArray1);

//задание 2.5 === заменить последний элемент массива, присвоив ему значение первого элемента
myArray1[myArray1.length - 1] = myArray1[2];
console.log(myArray1);

//задание 2.6 === создать новый массив, чтобы три элемента были больше 10
let myArray2 = [4, 12, 7, 19, 21, 8, 1];
console.log(myArray2);

//задание 2.7 === поменять местами первый и последний элемент нового массива и вывести массив в консоль
[myArray2[0], myArray2[myArray2.length - 1]] = [
  myArray2[myArray2.length - 1],
  myArray2[0],
];
console.log(myArray2);
// решено с использованием деструктурирующего присваивания

// задание 2.8 === добавить в конец массива любое новое число и вывести массив в консоль
myArray2.push(25);
console.log(myArray2);

// задание 2.9 === добавить в начало массива любое новое число и вывести массив в консоль
myArray2.splice(0, 0, 3);
console.log(myArray2);

myArray2.sort((a, b) => a - b); // по умолчанию sort() сравнивает строки, а не числа, поэтому добавляем функцию сравнения '(a,b) => a -b'
console.log(myArray2);

// задание 2.10 === не используя Math.max вывести в консоль самое большое число в массиве
let biggestNumber = myArray2[myArray2.length - 1];
console.log(biggestNumber);

// задание 2.11 === не используя Math.min вывести в консоль самое маленькое число в массиве
let smallestNumber = myArray2[0];
console.log(smallestNumber);

// задание 2.12 === используя Math.max и Math.min вывести в консоль самое большое и самое маленькое число в массиве
let maxNumber = Math.max(...myArray2);
console.log(maxNumber);
let minNumber = Math.min(...myArray2);
console.log(minNumber);
console.log(maxNumber + "," + minNumber);

console.log(`${maxNumber},${minNumber}`); // то же с использованием template literals

// задание 2.13 === создать второй массив из 3х чисел, два числа в котором пусть будут равны любым 2м числам из первого массива и вывести новый массив в консоль
let myArray3 = [4, 7, 16];
console.log(myArray3);

// задание 2.14 === вставить второй массив в начало первого так, чтобы в новом массиве стало на эти три числа больше и вывести массив в консоль
let myArray4 = myArray3.concat(myArray2);
console.log(myArray4);
// === вставить второй массив в конец первого так, чтобы в новом массиве стало на эти три числа больше и вывести массив в консоль
let myArray5 = myArray2.concat(myArray3);
console.log(myArray5);
*/

/* задание 2.15 === используя 5 итераторов по очереди вывести в консоль каждый элемент массива (for, for of, for each, while, map)

// возьмем while
let i = 0; // Индекс для итерации по массиву
while (myArray2.length > 0) {
  console.log(myArray2[i]);
  myArray2.shift();
} // выведены 9 чисел по-одному

// возьмем for
for (let i = 0; i < myArray3.length; i++) {
  console.log(myArray3[i]);
} // выведены 3 числа по-одному

// возьмем for of
for (let name of myArray3) {
  console.log(name);
} // мы не можем изменять массив, однако не застрянем в бесконечном цикле и не пропустим значения

// возьмем forEach
myArray3.forEach(function (element) {
  console.log(element);
}); // есть вопросы: можно ли в равной степени использовать здесь item и element и какова функция "function" ??

myArray3.forEach((element) => {
  console.log(element);
}); // анонимная функция

//далее - тот же пример с именованной функцией (определяем отдельную функцию и передаем ее в 'forEach()'). Вариант более читаемый, если функция сложнее, чем просто вывод в консоль
function printElement(element) {
  console.log(element);
}
myArray3.forEach(printElement);

// возьмем map
const newArray = myArray3.map((element) => element);
newArray.forEach((element) => console.log(element));
*/

// Далее каждый раз используя по очереди 1 из конструкций выше (кроме map) п2.15)

// задание 2.16 === Вывести в консоль все цифры больше или равные 10

/* возьмем while

let i = 0; // создаем индекс для итерации по массиву
let result = []; // создаем переменную/массив для хранения найденных элементов

while (i < myArray4.length) {
  if (myArray4[i] >= 10) {
    result.push(myArray4[i]);
  }
  i++;
}
result.sort((a, b) => a - b); // можно добавить сортировку значений при помощи сравнивающей функции
console.log(result.join(","));

// вариант 2 - через метод 'filter'

let newResult = myArray4.filter((element) => element >= 10);
console.log(newResult.join(","));
*/

/* Fibonacci Series

let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];

while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}
console.log(fibonacciArray);
*/

/* возьмем forEach

let myArray1 = [4, 6, 2, 12];

myArray1.forEach((element) => {
  if (element >= 10) {
    console.log(element);
  }
});
*/

/* возьмем for of

let myArray1 = [4, 6, 2, 12];

for (let element of myArray1) {
  if (element >= 10) {
    console.log(element);
  }
}
  */

/* возьмем for

let myArray1 = [4, 6, 2, 12];

for (let i = 0; i < myArray1.length; i++) {
  if (myArray1[i] >= 10) {
    console.log(myArray1[i]);
  }
}
*/

// задание 2.17 === Вывести в консоль все цифры меньше 10

/* возьмем while

let myArray1 = [4, 6, 2, 12];
let i = 0;
let result = [];

while (i < myArray1.length) {
  if (myArray1[i] < 10) {
    result.push(myArray1[i]);
  }
  i++;
}
result.sort((a, b) => a - b);
console.log(result.join(","));
*/

/* возьмем forEach

let myArray1 = [4, 6, 2, 12];
let result = [];

myArray1.forEach((element) => {
  if (element < 10) {
    result.push(element);
  }
});
console.log(result.join(","));
*/

/* возьмем for of

let myArray1 = [4, 6, 2, 12];
let result = [];

for (let element of myArray1) {
  if (element < 10) {
    result.push(element);
  }
}
console.log(result.join(","));
*/

/* возьмем for

let myArray1 = [4, 6, 2, 12];
let result = [];

for (let i = 0; i < myArray1.length; i++) {
  if (myArray1[i] < 10) {
    result.push(myArray1[i]);
  }
}
console.log(result.join(","));
*/

// задание 2.18 === Вывести в консоль все четные числа

/* возьмем while

let myNewArray = [4, 12, 7, 19, 21, 8, 1, 6, 2, 15];
let i = 0;
let evenNumbers = [];

while (i < myNewArray.length) {
  if (myNewArray[i] % 2 === 0) {
    evenNumbers.push(myNewArray[i]);
  }
  i++;
}
evenNumbers.sort((a, b) => a - b);
console.log(evenNumbers.join(","));
*/

/* let myNewArray = [4, 12, 7, 19, 21, 8, 1, 6, 2, 15];
let i = 0;
let oddNumbers = [];

while (i < myNewArray.length) {
  if (myNewArray[i] % 2 !== 0) {
    oddNumbers.push(myNewArray[i]);
  }
  i++;
}
oddNumbers.sort((a, b) => a - b); //сортирует значения
console.log(oddNumbers.join(","));
*/

/* возьмем forEach

let myNewArray = [4, 12, 7, 19, 21, 8, 1, 6, 2, 15];
let i = 0;
let evenNumbers = [];

myNewArray.forEach((element) => {
  if (element % 2 === 0) {
    evenNumbers.push(element);
  }
  i++;
});
evenNumbers.sort((a, b) => a - b);
console.log(evenNumbers.join(","));
*/

/* возьмем for of

const myNewArray = [4, 12, 7, 19, 21, 8, 1, 6, 2, 15];
let evenNumbers = [];

for (const number of myNewArray) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
evenNumbers.sort((a, b) => a - b);
console.log(evenNumbers.join(", "));
*/

/* возьмем for

const myNewArray = [4, 12, 7, 19, 21, 8, 1, 6, 2, 15];
let evenNumbers = [];

for (let i = 0; i < myNewArray.length; i++) {
  if (myNewArray[i] % 2 === 0) {
    evenNumbers.push(myNewArray[i]);
  }
}
console.log(evenNumbers.join(", "));
*/

// задание 2.19 === Вывести в консоль все нечетные числа

/* возьмем while

let myNewArray = [14, 2, 17, 9, 1, 18, 11, 16, 22, 15];
let i = 0;
let oddNumbers = [];

while (i < myNewArray.length) {
  if (myNewArray[i] % 2 !== 0) {
    oddNumbers.push(myNewArray[i]);
  }
  i++;
}
oddNumbers.sort((a, b) => a - b);
console.log(oddNumbers.join(" ,"));
*/

/* возьмем forEach

let myNewArray = [14, 2, 17, 9, 1, 18, 11, 16, 22, 15];
let oddNumbers = [];

myNewArray.forEach((element) => {
  if (element % 2 !== 0) {
    oddNumbers.push(element);
  }
});
oddNumbers.sort((a, b) => a - b);
console.log(oddNumbers.join(", "));
*/

/* возьмем for of

const myNewArray2 = [14, 2, 17, 9, 1, 18, 11, 16, 22, 15];
let oddNumbers2 = [];

for (const element of myNewArray2) {
  if (element % 2 !== 0) {
    oddNumbers2.push(element);
  }
}

console.log(oddNumbers2.join(", "));
*/

/* возьмем for

const myNewArray3 = [14, 2, 17, 9, 1, 18, 11, 16, 22, 15];
let oddNumbers3 = [];

for (let i = 0; i < myNewArray3.length; i++) {
  if (myNewArray3[i] % 2 !== 0) {
    oddNumbers3.push(myNewArray3[i]);
  }
}
console.log(oddNumbers3.join(", "));
*/

/* то же самое в повторе (while, forEach, forOf, for)

let myNewArray = [2, 7, 3, 9, 12, 32, 41, 16, 4, 15, 19, 20];
let i = 0;
let result = [];

while (i < myNewArray.length) {
  if (myNewArray[i] % 2 !== 0) {
    result.push(myNewArray[i]);
  }
  i++;
}
result.sort((a, b) => a - b);
console.log(result.join(", "));
// =========

let myNewArray2 = [2, 7, 3, 9, 12, 32, 41, 16, 4, 15, 19, 20];
let newResult2 = [];

myNewArray2.forEach((element) => {
  if (element % 2 !== 0) {
    newResult2.push(element);
  }
});
console.log(newResult2.join(", "));
// ===========

const myNewArray3 = [2, 7, 3, 9, 12, 32, 41, 16, 4, 15, 19, 20];
let oddNumbers3 = [];

for (const element of myNewArray3) {
  if (element % 2 !== 0) {
    oddNumbers3.push(element);
  }
}
console.log(oddNumbers3.join(", "));
// =============

const myNewArray4 = [2, 7, 3, 9, 12, 32, 41, 16, 4, 15, 19, 20];
let i = 0;
let oddNumbers4 = [];

for (let i = 0; i < myNewArray4.length; i++) {
  if (myNewArray4[i] % 2 !== 0) {
    oddNumbers4.push(myNewArray4[i]);
  }
}
console.log(oddNumbers4.join(", "));
*/

/* задание 2.20 === Используя map присвоить в новую перменную все нечетные элементы массива которые больше или равны 10 и вывести в консоль старый и новый массив

let array = [2, 7, 3, 9, 12, 32, 41, 16, 4, 15, 19, 20];

let mappedArray = array
  .filter((element) => element % 2 !== 0)
  .filter((element) => element >= 10)
  .map((element) => element);

console.log(array);
console.log(mappedArray);

// задание 2.20 === Используя метод filter присвоить в новую перменную все четные элементы массива которые меньше 10 и вывести в консоль старый и новый массив (добейтесь того, чтобы старый массив не изменился)

let array2 = [2, 7, 3, 9, 12, 32, 41, 16, 4, 15, 19, 20];

let filteredArray = array2
  .filter((element) => element % 2 === 0)
  .filter((element) => element < 10)
  .map((element) => element);

console.log(array2);
console.log(filteredArray);

// === вариант 2 ===
let myArray = [2, 7, 3, 9, 12, 32, 41, 16, 4, 15, 19, 20];

let mappedArray = myArray.map((element) => {
  if (element % 2 !== 0 && element >= 10) {
    return element;
  }
});

let oddGreaterThanTen = mappedArray.filter((element) => element !== undefined);
console.log(oddGreaterThanTen);
*/

/* 2.21 === Добавить новый массив в конец старого

let array2 = [2, 7, 3, 9, 12, 32, 41, 16, 4, 15, 19, 20];
let filteredArray = array2.filter(
  (element) => element % 2 === 0 && element < 10
);
console.log(array2);
console.log(filteredArray);

let combinedArray = array2.concat(filteredArray);
console.log(combinedArray);
*/

// 2.22 === используя каждый из 5 итераторов, создайте новый массив в котором удалены все повторяющиеся массива из п2.21 (к прримеру [1,3,2,2,4,3] -> [1,3,2,4]), и вывести в консоль новый массив (по разу для каждого итертора (for со счетчиком, for in, while, map, forEach))

/* с сайта https://ru.hexlet.io/blog/posts/js-prosto-o-slozhnom-filter-map-reduce?ysclid=m4lpwk3kew875093648

const comments = [
  {
    id: 1,
    authorName: "Глеб Фильтеровский",
    authorRating: 5404,
    text: "Присоединяюсь, из трех функций понял только filter!",
  },
  {
    id: 2,
    authorName: "Иван Редьюсов",
    authorRating: 348,
    text: "Используйте console.log для отладки и сами все поймете!",
  },
  {
    id: 3,
    authorName: "Анна Мэп",
    authorRating: 1892,
    text: "Посмотрите гайды на YouTube, там все объясняется.",
  },
  {
    id: 4,
    authorName: "Анна Мэп",
    authorRating: 1892,
    text: "Кстати, использовать console.log — отличная идея!",
  },
  {
    id: 5,
    authorName: "Иван Редьюсов",
    authorRating: 348,
    text: "Если вы приложите ревью, нам будет проще вам помочь.",
  },
];

let commentsFiltered = [];
commentsFiltered = comments.filter((comment) =>
  comment.text.match(/console.log/)
);
console.log(commentsFiltered);

let mappedComments = comments.map((comment) => comment.authorName);
console.log(mappedComments);
*/

/* let array2 = [2, 7, 3, 9, 12, 32, 41, 16, 4, 15, 19, 20];

// Функция для обработки массивов
function processArrays(inputArray) {
  // Фильтрация массива
  let filteredArray = inputArray.filter(
    (element) => element % 2 === 0 && element < 10
  );

  // Объединение массивов
  let combinedArray = inputArray.concat(filteredArray);
  // Создание нового массива с данными из отфильтрованного и объединенного массивов
  let newArray = [...filteredArray, ...combinedArray];

  // Логирование данных
  console.log("Исходный массив:", inputArray);
  console.log(
    "Отфильтрованный массив (четные числа меньше 10):",
    filteredArray
  );
  console.log("Объединенный массив:", combinedArray);
  console.log("Новый массив:", newArray);

  return newArray; // Возвращаем новый массив
}

// Вызов функции для обработки массивов и сохранение результата
let resultArray = processArrays(array2);

// Теперь вы можете использовать resultArray независимо от исходного массива
console.log("Результирующий массив:", resultArray);
*/

// let array = [2, 4, 2, 7, 3, 9, 12, 32, 7, 15, 4, 15, 9, 12, 2, 4];

/*  // при помощи 'for'

const uniqueArray = [];
const seen = {};

for (let i = 0; i < array.length; i++) {
  if (!seen[array[i]]) {
    seen[array[i]] = true;
    uniqueArray.push(array[i]);
  }
}

uniqueArray.sort((a, b) => b - a);
console.log(uniqueArray);
*/

/*  // при помощи 'for...of'

const uniqueArray2 = [];
const seen2 = {};

for (const element of array) {
  if (!seen2[array[element]]) {
    seen2[array[element]] = true;
    uniqueArray2.push(element);
  }
}

uniqueArray2.sort((a, b) => a - b);
console.log(uniqueArray2);
*/

/*  // при помощи 'while'

const uniqueArray3 = [];
const seen3 = {};
let i = 0;

while (i < array.length) {
  if (!seen3[array[i]]) {
    seen3[array[i]] = true;
    uniqueArray3.push(array[i]);
  }
  i++;
}

console.log(uniqueArray3);
*/

// повторим все ранее указанные методы

/* const uniqueArray = [];
let seen = {};

for (let i = 0; i < array.length; i++) {
  if (!seen[array[i]]) {
    seen[array[i]] = true;
    uniqueArray.push(array[i]);
  }
}

console.log(uniqueArray);

const uniqueArray2 = [];
let seen2 = {};

for (const element of array) {
  if (!seen2[array[element]]) {
    seen2[array[element]] = true;
    uniqueArray2.push(element);
  }
}

console.log(uniqueArray2);

const uniqueArray3 = [];
let seen3 = {};
let i = 0;

while (i < array.length) {
  if (!seen3[array[i]]) {
    seen3[array[i]] = true;
    uniqueArray3.push(array[i]);
  }
  i++;
}

console.log(uniqueArray3);

// при помощи 'forEach'

// первый вариант - по старинке

const uniqueArray4 = [];
let seen4 = {};

array.forEach((element) => {
  if (!seen4[array[element]]) {
    seen4[array[element]] = true;
    uniqueArray4.push(element);
  }
});

uniqueArray4.sort((a, b) => a - b);
console.log(uniqueArray4);

// второй вариант - с методом 'includes'

const uniqueArray5 = [];

array.forEach((element) => {
  if (!uniqueArray5.includes(element)) {
    uniqueArray5.push(element);
  }
});

uniqueArray5.sort((a, b) => a - b);
console.log(uniqueArray5);

// при помощи 'for in'==== Метод `for...in` в JavaScript (и подобные конструкции в других языках) не предназначен для изменения массива во время итерации. Удаление элементов внутри цикла `for...in` может привести к пропуску элементов или к неожиданному поведению.

let car = {
  make: "Mercedes",
  model: "G-klass",
  class: "AMG",
  year: 2025,
  color: "black",
};

for (let prop in car) {
  console.log(car[prop]);
}
  */

// 2.23 ===== Замените последний массив на новый и используя любой итератор, замените все повторяющиеся цифры старого (большого) массива на нули (к прримеру [1,2,3,2,4,3] -> [1,2,3,0,4,0]) и вывести в консоль новый массив

/* let anotherArray = [2, 4, 2, 7, 3, 9, 12, 32, 7, 15, 4, 15, 9, 12, 2, 4];

// при помощи 'for'

const processedArray = [];
const seen9 = {};

for (let i = 0; i < array.length; i++) {
  if (!seen9[anotherArray[i]]) {
    seen9[anotherArray[i]] = true;
    processedArray.push(anotherArray[i]);
  } else {
    anotherArray[i] = 0;
    processedArray.push(anotherArray[i]);
  }
}

console.log(processedArray);

// при помощи 'for of'

const processedArray1 = [];
const seen10 = {};

for (const element of anotherArray) {
  if (!seen10[element]) {
    seen10[element] = true;
    processedArray1.push(element);
  } else {
    processedArray1.push(0);
  }
}

console.log(processedArray1);

// при помощи 'for each'

const processedArray2 = [];
const seen11 = {};

anotherArray.forEach((element) => {
  if (!seen11[element]) {
    seen11[element] = true;
    processedArray2.push(element);
  } else {
    processedArray2.push(0);
  }
});

console.log(processedArray2);

// при помощи 'while'

const processedArray3 = [];
const seen12 = {};
let i = 0;

while (i < anotherArray.length) {
  if (!seen12[anotherArray[i]]) {
    seen12[anotherArray[i]] = true;
    processedArray3.push(anotherArray[i]);
  } else {
    anotherArray[i] = 0;
    processedArray3.push(anotherArray[i]);
  }
  i++;
}

console.log(processedArray3);
*/

//2.24 === Замените последний массив на новый и используя метод Set удалите все повторяющиеся цифры старого массива и вывести в консоль новый массив (далее Не используя метод sort)

/*let anotherArray1 = [2, 4, 2, 7, 3, 9, 12, 32, 7, 15, 4, 15, 9, 12, 2, 4];

let uniqueSet = new Set(anotherArray1);
let uniqueArray1 = Array.from(uniqueSet);
console.log(uniqueArray1);
*/

// 2.25 === Отсортируйте массив из п 2.24 по возрастанию используя все 5 итераторов из п 2.15, выведите новый массив в консоль

let array = [2, 4, 7, 3, 9, 12, 32, 15];
let sortedArray = [];

// for (let i = 0; i < array.length; i++) {
//   sortedArray[i] = array[i];
// }

let n = sortedArray.length;

/* for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (sortedArray[j] > sortedArray[j + 1]) {
      let temp = sortedArray[j];
      sortedArray[j] = sortedArray[j + 1];
      sortedArray[j + 1] = temp;
    }
  }
}
  console.log(sortedArray);
*/

/* for (const element of array) {
  for (const j of array) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(sortedArray);
*/

/*let sortedArray1 = array.slice().sort((a, b) => a - b);
console.log(sortedArray1);

const val = "thIs will be capiTalized for each word";
function wordsCaps(str) {
  str = str.toLowerCase();
  const tempArr = [];
  let words = str.split(" ");

  words.forEach((word) => {
    let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
    tempArr.push(temp);
  });
  return tempArr.join(" ");
}
console.log(wordsCaps(val));*/

// const entry = "inFormation given by uSer";
//========================//

/*Создайте массив из 5и объектов с полями 'name', 'age', 'job'
name - строка,
age - число (пусть будет от 15 до 80),
job - другой объект, содержащий должность и зарплату 'position' - строка,
'salary' - число (пусть она варьируется в пределах 8000 - 12000)
и выведите его в консоль*/

const arrayOfStaff = [
  {
    name: "John",
    age: 23,
    job: {
      position: "IT Developer",
      salary: 8000,
    },
  },
  {
    name: "Alex",
    age: 19,
    job: {
      position: "Layout Designer",
      salary: 9000,
    },
  },
  {
    name: "Andrew",
    age: 33,
    job: {
      position: "Senior Programmer",
      salary: 12000,
    },
  },
  {
    name: "Jane",
    age: 20,
    job: {
      position: "IT Developer",
      salary: 9000,
    },
  },
  {
    name: "Orlando",
    age: 45,
    job: {
      position: "supervisor",
      salary: 11000,
    },
  },
];

console.log(arrayOfStaff);

/*3.2
Сохраните копию этого массива в новую переменную и поменяйте 2му или 3му элементу age на 16 (тому у кого он больше 18) и вывести в консоль старый и новый массив (добейтесь того, чтобы старый массив не изменился)*/

const deepCopyOfArray = JSON.parse(JSON.stringify(arrayOfStaff));
deepCopyOfArray[1].age = 16;

console.log(deepCopyOfArray);

/*3.3
В новом массиве с помощью итератора (старайтесь по очереди
использовать все из п2.15) выведите в консоль имена (name) всех несовершеннолетних (у которых age меньше 18)*/

deepCopyOfArray.forEach((person) => {
  if (person.age < 18) {
    console.log(person.name);
  }
});

for (let i = 0; i < deepCopyOfArray.length; i++) {
  if (deepCopyOfArray[i].age < 18) {
    console.log(deepCopyOfArray[i].name);
  }
}

for (const person of deepCopyOfArray) {
  if (person.age < 18) {
    console.log(person.name);
  }
}

// let underAgeStaff = [];
let index = 0;
while (index < deepCopyOfArray.length) {
  if (deepCopyOfArray[index].age < 18) {
    // underAgeStaff.push(deepCopyOfArray[index].name);
    console.log(deepCopyOfArray[index].name);
  }
  index++;
}

// console.log(underAgeStaff);

/*3.4
В новом массиве с помощью итератора (старайтесь по очереди
использовать все из п2.15) выведите в консоль название работы (position) всех совершеннолетних */

for (const person of deepCopyOfArray) {
  // if (person.age >= 18) {
  //   console.log(
  //     `${person.name} - ${
  //       person.job.position ? person.job.position : "supervisor"
  //     } - ${person.job.salary}`
  //   );
  //   console.log(person.name + " - " + person.job.position);
  // }

  console.log(
    person.age >= 18
      ? `${person.name} - ${person.job.position}`
      : `${person.name} - underaged`
  );

  person.age >= 18
    ? console.log(`${person.name} - ${person.job.position}`)
    : console.log(`${person.name} - underaged`);
}

/*3.5
В новом массиве с помощью итератора (старайтесь по очереди
использовать все из п2.15) выведите имя и возраст в консоль всех у кого зп 'salary' больше 10к (10000),*/

for (const person of deepCopyOfArray) {
  if (person.job.salary > 10000) {
    console.log(`${person.name}, ${person.age}`);
  }
}
