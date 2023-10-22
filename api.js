const host = 'https://wedev-api.sky.pro/api/v2/todos/'
let passwarod = prompt("Введите пароль")

export function getTodos() {
    return fetch(host, {
      method: "GET",
      headers: {
        Authorization: passwarod,
      },
    }).then((response) => {

      if (response.status === 401) {
        passwarod = prompt("Введите верный пароль");
      }
      return response.json();
    });
  }
  
  export function deleteTodo({ id }) {
    return fetch(host + id, {
      method: "DELETE",
      headers: {
        Authorization: passwarod,
      },
    }).then((response) => {
      return response.json();
    });
  }
  
  export function postTodo({ text }) {
    return fetch(host, {
      method: "POST",
      headers: {
        Authorization: passwarod,
      },
      body: JSON.stringify({
        text,
      }),
    }).then((response) => {
      return response.json();
    });
  }