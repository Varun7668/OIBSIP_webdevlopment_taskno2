function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task === ""){
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    let now = new Date();

    li.innerHTML = `
        <div class="task-text">${task}</div>
        <div class="time">Added: ${now.toLocaleString()}</div>

        <div class="actions">
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("pendingList").appendChild(li);

    input.value="";
}

function completeTask(button){

    let li = button.parentElement.parentElement;

    let completeTime = document.createElement("div");
    completeTime.className="time";
    completeTime.innerHTML="Completed: " + new Date().toLocaleString();

    button.remove();

    li.appendChild(completeTime);

    document.getElementById("completedList").appendChild(li);
}

function editTask(button){

    let li = button.parentElement.parentElement;

    let text = li.querySelector(".task-text");

    let newTask = prompt("Edit Task", text.innerText);

    if(newTask && newTask.trim()!=""){
        text.innerText = newTask;
    }
}

function deleteTask(button){

    let li = button.parentElement.parentElement;

    li.remove();
}