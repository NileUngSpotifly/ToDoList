document.getElementById("new-task-form").addEventListenet("submit", function(e) {
    e.preventionDefault();

    const taskText = document.getelementById("new-task").value;

    if (taskText.trim()) {
        addTask(taskText);
        document.getelementById("new-task").value = "";
    }
}) 

function addTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-button");

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById("task-list").appendChild(li);
}