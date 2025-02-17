const todoList = document.querySelector(".todo-list");
const nameElement = document.querySelector("#name");
const contentElement = document.querySelector("#content");
const addTodoBtn = document.querySelector("#add-todo-btn");

function createTodoItem() {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item", "list-group-item", "d-flex", "align-items-center", "justify-content-between");

    const itemContent = document.createElement("div");
    itemContent.classList.add("itemContent");

    const name = document.createElement("p");
    name.classList.add("fw-bold", "mb-1");
    name.innerText = nameElement.value;

    const content = document.createElement("p");
    content.classList.add("text-muted", "mb-0");
    content.innerText = contentElement.value;

    const itemControls = document.createElement("div");
    itemControls.classList.add("item-controls", "d-flex", "gap-2");

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("todo-item-button", "btn");
    doneBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff00"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("todo-item-button", "btn");
    removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF0000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;

    itemControls.appendChild(doneBtn);
    itemControls.appendChild(removeBtn);

    itemContent.appendChild(name);
    itemContent.appendChild(content);
    todoItem.appendChild(itemContent);
    todoItem.appendChild(itemControls);

    doneBtn.addEventListener("click", () => todoItem.remove());
    removeBtn.addEventListener("click", () => todoItem.remove());

    return todoItem;
}

function addTodoItem() {
    if (nameElement.value.trim() === '' || contentElement.value.trim() === '') return;
    todoList.appendChild(createTodoItem());
    nameElement.value = '';
    contentElement.value = '';
}

addTodoBtn.addEventListener("click", addTodoItem);
