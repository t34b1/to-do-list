/*
Build a dynamic list where users can add/remove items
*/


let addTask = document.getElementById("add-task");
let taskList = document.getElementById("task-list");




function completedTaskHandler() {
    this.parentElement.remove();
}

function createElement(tag, className = "", text = "") {
    let element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (text) element.textContent = text;
    if(tag == "input" && text) element.placeholder = text;
    return element;
}

function editTaskDescription() {
    let descriptionEditor = createElement("input", "taskDescription", "Edit");
    descriptionEditor.addEventListener("focus", () => console.log("clicked"));
    descriptionEditor.addEventListener("blur", () => {
        this.style.display = "block";
        descriptionEditor.style.display = "none";
    });
    descriptionEditor.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            this.textContent = descriptionEditor.value;
            this.style.display = "block";
            descriptionEditor.remove();
        }   
    });
    this.style.display = "none";
    this.insertAdjacentElement("afterend", descriptionEditor);
    descriptionEditor.focus();
}

function newTask(){
    let newTask = createElement("div", "task");
    let newTaskDescription = createElement("div", "taskDescription", "New task");
    let newCompleteButton = createElement("button", "complete", "Mark complete");

    newCompleteButton.addEventListener("click", completedTaskHandler);
    newTaskDescription.addEventListener("click", editTaskDescription);
    
    newTask.appendChild(newTaskDescription);
    newTask.appendChild(newCompleteButton);
    console.log(newTask);
    return newTask;
}

function addTaskHandler() {
    taskList.prepend(newTask());
}

addTask.addEventListener("click", addTaskHandler);




