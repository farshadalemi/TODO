const todoList = [];

function addTodo() {
  const inputElem = document.querySelector(".ts-name-input");
  const name = inputElem.value;
  //   console.log(name);
  todoList.push(name);
  console.log(todoList);
}
