// Show current date and time
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.getElementById("date-time").textContent = formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call

// Add Task
function addTask() {
  const taskInput = document.getElementById("task-input");
  const durationValue = document.getElementById("duration-value");
  const durationUnit = document.getElementById("duration-unit");

  const taskText = taskInput.value.trim();
  const duration = durationValue.value.trim();
  const unit = durationUnit.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  let durationDisplay = "";
  if (duration) {
    durationDisplay = ` <small>(${duration} ${unit})</small>`;
  }

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}${durationDisplay}</span>
    <div class="task-buttons">
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  // Clear input fields
  taskInput.value = "";
  durationValue.value = "";
  durationUnit.selectedIndex = 0;
}

// Complete task
function completeTask(button) {
  const li = button.closest("li");
  li.classList.toggle("completed");
}

// Delete task
function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
}
