// const checkbox = document.getElementById("checkbox-1");
//    const checkboxImage = document.querySelector(".checkbox-image");

//    checkbox.addEventListener("change", () => {
//      if (checkbox.checked) {
//        checkboxImage.src = "img/Radio_button_checked"; // Устанавливаем изображение "Отмечено"
//      } else {
//        checkboxImage.src = "img/Radio_button_unchecked.png"; // Устанавливаем изображение "Не отмечено"
//      }
//    });

const checkboxes = document.querySelectorAll(".checkbox");
console.log(checkboxes);

for (const checkbox of checkboxes) {
    const text = checkbox.parentElement.parentElement.querySelector(".task-frame");

    if (checkbox.checked) {
        text.classList.add("checked")
    }

    checkbox.addEventListener("change", () => {
        text.classList.toggle("checked")

    })
}

// let salary = 1000;
// console.log(salary);

// if (salary <= 1000) {
//     console.log("It's unacceptable");
// }

// if (!salary <= 1000) {
//     console.log("When shall I start")
// }


// let userInput = prompt("Hi! How old are you? ");
// console.log(userInput);

// let number = parseFloat(userInput);
// // Проверяем, является ли результат числом
// if (!isNaN(number)) {
//     console.log("Вы ввели число:", number);
// } else {
//     console.log("Это не число!");
// }


// let activity = "Drive to work";

// switch (activity) {
//     case "Get up":
//         console.log("It's 6:30 AM");
//         break;
//     case "Breakfast":
//         console.log("It's 7:00 AM");
//         break;
//     case "Drive to work":
//         console.log("It's 8:00 AM");
//         break;
// }

// первый вариант 

// document.getElementById("addTaskButton").addEventListener("click", function () {
//     const taskInput = document.getElementById("taskInput");
//     const taskText = taskInput.value.trim();

//     if (taskText) {
//         const todoList = document.getElementById("todoList");

//         // Создаем новый элемент списка
//         const newTask = document.createElement("todoItem");
//         newTask.textContent = taskText;

//         // Добавляем элемент в список
//         todoList.appendChild(newTask);

//         // Очищаем поле ввода
//         taskInput.value = '';
//     } else {
//         alert("Пожалуйста, введите задачу.");
//     }
// });

//  второй вариант

// document.getElementById("addTaskButton").addEventListener("click", function () {
//     const taskInput = document.getElementById("taskInput");
//     const taskText = taskInput.value.trim(); // Получаем текст задачи и обрезаем пробелы

//     if (taskText === "") {
//         alert("Please add the task."); // Проверка на пустой ввод
//         return;
//     }

//     const todoItems = document.querySelectorAll(".todo-item");

//     // Ищем первое пустое место в списке задач
//     for (let i = 0; i < todoItems.length; i++) {
//         if (todoItems[i].innerText === "") {
//             todoItems[i].innerText = taskText; // Добавляем текст задачи
//             taskInput.value = ""; // Очистка поля ввода
//             return; // Выход из функции, так как задача добавлена
//         }
//     }

//     alert("Complete existing tasks!"); // Если нет пустых мест //Нет доступных мест для добавления задачи
// });

// третрий вариант

document.getElementById("addTaskButton").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim(); // Получаем текст задачи и обрезаем пробелы

    if (taskText === "") {
        alert("Please add the task!"); // Проверка на пустой ввод
        return;
    }

    const todoItems = document.querySelectorAll(".todo-item");

    // Ищем первое пустое место в списке задач
    for (let i = 0; i < todoItems.length; i++) {
        const taskFrame = todoItems[i].querySelector(".task-frame");

        // Проверяем, если элемент пустой (содержит текст по умолчанию)
        if (taskFrame.innerText.startsWith("Personal Work No.")) {
            taskFrame.innerText = taskText; // Добавляем текст задачи
            taskInput.value = ""; // Очистка поля ввода
            return; // Выход из функции, так как задача добавлена
        }
    }

    alert("Нет доступных мест для добавления задачи!"); // Если нет пустых мест
});


