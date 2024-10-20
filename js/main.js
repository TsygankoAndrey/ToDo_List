const taskInput = document.getElementById("taskInput");
const taskBlock = document.querySelector('.task-block');



const initialCheck = () => {
    const checkboxes = document.querySelectorAll(".checkbox");
    for (const checkbox of checkboxes) {
        const text = checkbox.parentElement.parentElement.querySelector(".task-title");

        if (checkbox.checked) {
            text.classList.add("checked")
        }

        checkbox.addEventListener("change", () => {
            console.log(checkbox);
            text.classList.toggle("checked")

        })
    }
}


document.getElementById("addTaskButton").addEventListener("click", function () {

    const taskText = taskInput.value.trim(); // Получаем текст задачи и обрезаем пробелы в taskText
    const template = document.getElementById('todo-item');
    console.log(template);
    const content = template.content.cloneNode(true);

    const taskTitle = content.querySelector('.task-title');
    taskTitle.innerText = taskText;
    const checkbox = content.querySelector('.checkbox');


    checkbox.addEventListener('change', () => {
        taskTitle.classList.toggle("checked")
    })

    const deleteIcon = content.querySelector('.delete-outline');
    deleteIcon.addEventListener('click', () => {
        if (!checkbox.checked) {
            alert("Complete the task!");
        }
        else {
            console.log(taskTitle.parentElement);
            taskBlock.removeChild(taskTitle.parentElement);
        }

    })


    taskBlock.insertBefore(content, taskBlock.firstChild);
    taskInput.value = '';
});

