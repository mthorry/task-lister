document.addEventListener("DOMContentLoaded", function(){

  const tasks = []

  const addListButton = document.querySelector("#add-list-button")
  const listsSection = document.getElementById("lists")
  const userInput = document.getElementById("list-title")

  const addTaskButton = document.querySelector("#task-button")
  const taskDesc = document.getElementById("task-description")
  const taskPriority = document.getElementById("task-priority")


  addListButton.addEventListener("click", () => {
    tasks.push(userInput.value)
    createNewListDiv(userInput, tasks)
  })

  addTaskButton.addEventListener("click", () => {
    createNewTask(taskDesc, taskPriority)
  })

  listsSection.addEventListener("click", (event)=> {
    if(event.target.className === "destroy-list"){
      event.target.parentElement.parentElement.remove()
    }
  })

listsSection.addEventListener("click", (event)=> {
    if(event.target.className === "destroy-task"){
      event.target.parentElement.remove()
    }
  })

})


// ***** CREATE NEW LIST ***** //

function createNewListDiv(userInput, tasks) {
  event.preventDefault()

  const template = `<div class="list"><h3><button class="destroy-list">x</button>${userInput.value}</h3><ul id="list-${tasks.length-1}"></ul></div>`
  document.getElementById("lists").innerHTML += template;

  const selector = `<option value=${tasks.length-1} id=selector-${tasks.length-1}>${userInput.value}</option>`
  document.getElementById("select-list").innerHTML += selector;
}


// ***** CREATE NEW TASK ***** //

function createNewTask(taskDesc, taskPriority) {
  event.preventDefault()

  const listVal = document.getElementById("select-list").value

  document.getElementById(`list-${listVal}`).innerHTML += `<li><button class="destroy-task">x</button>${taskPriority.value}, ${taskDesc.value}</li>`
}


// MATT THORRY & ROMAN M.
