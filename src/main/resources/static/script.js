const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
function addTask(e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;
        const taskDate = document.createElement("span");
        taskDate.innerText = new Date().toLocaleString();
        taskDate.classList.add("task-date");
        taskItem.appendChild(taskDate);
        taskItem.classList.add("task-item");
        taskItem.addEventListener("dblclick", toggleTaskDone);
        taskItem.addEventListener("click", updateTaskCount);
        taskList.appendChild(taskItem);
        taskInput.value = "";
        taskInput.focus();
    }
    updateTaskCount();
}

function toggleTaskDone(e) {
    const taskItem = e.target;
    taskItem.classList.toggle("task-done");
    updateTaskCount();
}

function updateTaskCount() {
    const count = taskList.querySelectorAll("li.task-item:not(.task-done)").length;
    taskCount.innerText = count ? `Задач: ${count}` : "Нет задач";
}

document.querySelector("form").addEventListener("submit", addTask);
