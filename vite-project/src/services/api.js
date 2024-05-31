const baseHost = "https://wedev-api.sky.pro/api/";

export async function getDatas({ token }) {
  const response = await fetch(baseHost + "kanban", {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  if(!response.ok){
    throw Error("Ошибка сервера, он устал")
  }
  const cards = await response.json();
  return cards;
}


export async function registerUser({ login, name, password}) {
  const response = await fetch(baseHost + "user", {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password
    }),
  });
  if(!response.ok){
    const message = await response.json();
    throw Error(message.error);
  }
  const data = await response.json();
  return data;
}

export async function loginUser({ login, password }) {
  const response = await fetch(baseHost + "user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password
    }),
  });
  if(!response.ok){
    const message = await response.json();
    throw Error(message.error)
  }
  const data = await response.json();
  return data;
}