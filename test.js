let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

//




if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
}




//



getdatafromL();

//
submit.onclick = function() {
    if (input.value !== "") {
        addTaskToarray(input.value);
        input.value = "";

    }
}

//
tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        deleteTaskFromL(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains("task")) {
        toggleStatus(e.target.getAttribute("data-id"));
        e.target.classList.toggle("done");
    }
})


// 

function addTaskToarray(taskel) {
    const task = {
        id: Date.now(),
        title: taskel,
        completed: false,

    };
    arrayOfTasks.push(task);
    console.log(arrayOfTasks);

    addEltoP(arrayOfTasks);
    adddatatolocal(arrayOfTasks);

}

//


function addEltoP(array) {
    tasksDiv.innerHTML = "";
    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task"
        if (task.completed) {
            div.className = "task done"
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title))
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("delete"));
        div.appendChild(span);
        tasksDiv.appendChild(div);
        console.log(div);
    })
}


//


function adddatatolocal(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks))
}



//



function getdatafromL() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addEltoP(tasks);
    }
}


function deleteTaskFromL(taskid) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskid);
    adddatatolocal(arrayOfTasks);
}


function toggleStatus(taskid) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == taskid) {
            arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : arrayOfTasks[i].completed == false;
        }
    }
    adddatatolocal(arrayOfTasks);
}