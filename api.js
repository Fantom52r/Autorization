const host = 'https://wedev-api.sky.pro/api/v2/todos/'
const passwarod = '123456'

export function getTodos() {
    return fetch(host, {
      method: "GET",
      headers: {
        autorization: passwarod,
      },
    }).then((response) => {
      return response.json();
    });
  }
  
  export function deleteTodo({ id }) {
    return fetch(host + id, {
      method: "DELETE",
      headers: {
        autorization: passwarod,
      },
    }).then((response) => {
      return response.json();
    });
  }
  
  export function postTodo({ text }) {
    return fetch(host, {
      method: "POST",
      headers: {
        autorization: passwarod,
      },
      body: JSON.stringify({
        text,
      }),
    }).then((response) => {
      return response.json();
    });
  }