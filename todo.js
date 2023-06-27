// Function to add a task to the list
function addTask(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = taskText;
      
      // Add a click event listener to mark a task as completed
      listItem.addEventListener("click", function() {
        listItem.classList.toggle("completed");
      });
      
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  }
  
  // Add a submit event listener to the task form
  document.getElementById("task-form").addEventListener("submit", addTask);
  