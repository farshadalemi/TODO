const todoList = [
  { title: [], dueDate: "" },
  { title: [], dueDate: "" },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let index = 0; index < todoList.length; index++) {
    const valueObject = todoList[index];
    // const title = valueObject.title;
    // const dueDate = valueObject.dueDate;
    const { title, dueDate } = valueObject;
    console.log(title, dueDate);
    const htmlCode = `
    <div> ${title} </div>
    <div> ${dueDate} </div>
    <button onclick="
    todoList.splice(${index}, 1); 
    renderTodoList()"
    class="done-button"> Done </button>`;
    todoListHTML += htmlCode;
  }
  console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputTitleElem = document.querySelector(".js-title-input");
  const title = inputTitleElem.value;

  const inputDateElement = document.querySelector(".js-dueDate-input");
  const dueDate = inputDateElement.value;

  todoList.push({ title: title, dueDate: dueDate });
  console.log(todoList);

  inputTitleElem.value = "";
  inputDateElement.value = "";
  renderTodoList();
}
