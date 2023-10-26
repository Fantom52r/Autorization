import { tasks, setTasks } from "./main.js";
import { renderTasks } from "./renderTasks.js";

const host = 'https://wedev-api.sky.pro/api/v2/todos/'
const userURL ='https://wedev-api.sky.pro/api/user/login'
let token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k"

export function getTodos() {
    return fetch(host, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    }).then((response) => {
        if (response.status === 401) {
        token = prompt("Введите верный пароль");
        getTodos()
        throw new Error("Нет авторизации")
      }
      return response.json();
    })
    .then((responseData) => {
     setTasks(responseData.todos)
      renderTasks();
    })
  }
  
  export function deleteTodo({ id }) {
    return fetch(host + id, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      return response.json();
    })
  }
  
  export function postTodo({ text }) {
    return fetch(host, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        text,
      }),
    }).then((response) => {
      return response.json();
    });
  }


  export function login({login, password}) {
    return fetch(userURL, {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    }).then((response) => {
      return response.json();
    });
  }