const mainContainer = document.querySelector(".add-to-do");
const addButton = mainContainer.querySelector("#addTaskButton");
const inputField = mainContainer.querySelector("#taskInput");
const template = document.querySelector("#todo-item");
const taskBlock = document.querySelector(".task-block");

// const taskTitle = document.querySelector(".task-title");

addButton.addEventListener("click", () => {
  const content = template.content.cloneNode(true);
  const item = content.querySelector(".todo-item");
  item.setAttribute("id", `${Date.now()}`); // то же самое что и toString()

  const checkbox = content.querySelector(".checkbox");
  const deleteIcon = content.querySelector(".delete-outline");
  const title = content.querySelector(".task-title");
  const image = deleteIcon.querySelector("img");

  title.innerHTML = inputField.value;
  checkbox.onchange = (event) => {
    console.log("change");
    if (!checkbox.checked) {
      event.stopPropagation();
      // alert("Complete the task before deleting!");
      // deleteIcon.style.display = "none";
      title.style.textDecoration = "none";
      image.style.width = "24px";
    } else {
      // deleteIcon.style.display = "block";
      image.style.width = "32px";
      title.style.textDecoration = "line-through";
    }
  };

  deleteIcon.onclick = (event) => {
    // console.log(item.getAttribute("id"));
    if (!checkbox.checked) {
      event.stopPropagation();
      alert("Complete the task before deleting!");
    } else {
      taskBlock.removeChild(item);
    }
  };

  image.style.width = "24px";
  taskBlock.prepend(content); //новые помещаются вверх;
});

watcher.addEventListener("close", () => {
  window.localStorage.setItem("toDoItems", JSON.stringify({ a: 1, b: 2 }));
  const response = window.localStorage.getItem("toDoItems");
  console.log(response);
  console.log(JSON.parse(response));
});

// checkbox.addEventListener

// deleteIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     if (!checkbox.checked) {
//       Event.stopPropagation();
//       alert("Complete the task before deleting!");
//       deleteIcons.style.width = "12 px";
//     } else {
//       taskTitle.taskBlock.removeChild(item);
//     }
//   });
// });
