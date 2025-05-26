const taskInput = document.getElementById("taskInput");
const taskBlock = document.querySelector(".task-block");
const personal = document.querySelector(".task-type__personal");
const professional = document.querySelector(".task-type__professional");
const toDo = document.querySelector(".logo");
const addButton = document.getElementById("addTaskButton");

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
  console.log(Object.keys(taskInput));

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

const myHeading = document.querySelector(".task-type__personal");
myHeading.classList.add("blue-text");
console.log(myHeading.classList);

// document.getElementById("taskPersonal").addEventListener("click", function () {
//   const myHeading = document.querySelector(".task-type__professional");
//   myHeading.classList.toggle("blue-text");
//   // console.log(myHeading.classList);
// });

personal.addEventListener("click", function () {
  professional.classList.toggle("blue-text");
});

professional.addEventListener("dblclick", function () {
  if (professional.style.textTransform === "uppercase") {
    professional.style.textTransform = "none";
    personal.style.backgroundColor = "inherit";
  } else {
    professional.style.textTransform = "uppercase";
    personal.style.backgroundColor = "green";
  }
});

toDo.addEventListener("click", function () {
  professional.style.backgroundColor = "white";
  professional.style.textTransform = "none";
  personal.style.backgroundColor = "white";
  personal.style.textTransform = "none";
  addButton.style.backgroundColor = "yellow";
  addButton.style.color = "black";
  addButton.disabled = true;
  setTimeout(function () {
    addButton.style.backgroundColor = "blue";
    addButton.style.color = "white";
  }, 2000);
});

// toDo.addEventListener("click", function () {
//   setTimeout(function () {
//     addButton.style.backgroundColor = "yellow";
//     addButton.style.color = "black";
//   }, 2000);
// });
