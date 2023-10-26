import { getTodos, postTodo } from "./api.js";
import { renderTasks } from "./renderTasks.js";

const buttonElement = document.getElementById("add-button");
const textInputElement = document.getElementById("text-input");

export let tasks = [];
export function setTasks(newTodos) {
  tasks = newTodos
}

 export const fetchAndRenderTasks = () => {
  getTodos()
};

fetchAndRenderTasks();

buttonElement.addEventListener("click", () => {
  if (textInputElement.value === "") {
    return;
  }

  buttonElement.disabled = true;
  buttonElement.textContent = "Элемент добавлятся...";

  postTodo({
    text: textInputElement.value,
  })
    .then(() => {
      return fetchAndRenderTasks();
    })
    .then(() => {
      buttonElement.disabled = false;
      buttonElement.textContent = "Добавить";
      textInputElement.value = "";
    });

  renderTasks({ tasks, fetchAndRenderTasks });
});