function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between align-items-center";
  listItem.innerHTML = `
    ${taskText}
    <button class="btn btn-sm btn-danger" onclick="removeTask(this)">Eliminar</button>
  `;

  document.getElementById("taskList").appendChild(listItem);
  input.value = "";
}

function removeTask(button) {
  const item = button.parentElement;
  item.remove();
}
