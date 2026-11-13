let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskCounter = document.querySelector("#taskCounter");
let taskList = document.querySelector("#taskList");
let tasksCounter = 0;

function updateCounter() {
    tasksCounter = document.querySelectorAll(".task-item");
    taskCounter.textContent = tasksCounter.length;
}

function addTask() {
    taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Введіть завдання!");
        return;
    }
    else {
        let listElement = document.createElement("li")
        listElement.classList.add("task-item");
        let span = document.createElement("span");
        
        span.classList.add("task-text");
        span.textContent = taskText;

        let doneBtn = document.createElement("button");
        doneBtn.classList.add("done-btn");
        doneBtn.textContent = "Done";

        doneBtn.addEventListener("click", function () {
            span.classList.add("task-done");
        });

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", function () {
            let newText = prompt("Замінити завдання", span.textContent);
            if (newText === null) {
                alert("Завдання не може бути порожнє")
                return;
            }
            if (newText.trim() === "") {
                alert("Завдання не може бути порожнє")
                return;
            }
            span.textContent = newText;
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function () {
            let answer = confirm("Видалити це завдання?");
            if (answer) {
                listElement.remove();
            }
            updateCounter();
        });

        let btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");
        btnContainer.append(doneBtn, editBtn, deleteBtn);

        listElement.append(span, btnContainer);
        taskList.append(listElement);
        taskInput.value = "";
    }
    updateCounter();
}

addBtn.addEventListener("click", addTask);