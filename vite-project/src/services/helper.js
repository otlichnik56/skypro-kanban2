export function saveUserToLocalStorage(user) {
    window.localStorage.setItem("user", JSON.stringify(user));
}
  
export function getUserFromLocalStorage() {
    try {
      return JSON.parse(window.localStorage.getItem("user"));
    } catch (error) {
      return null;
    }
}
  
export function removeUserFromLocalStorage() {
    window.localStorage.removeItem("user");
}

export const appRoutes = {
  LOGIN: "/login",
  REG: "/reg",
  MAIN: "/",
  CARD: "/card/:id",
  NEWCARD: "/newcard",
  EXIT: "/exit",
  NOTFOUND: "*"
};

export function getClassForTheme(theme) {
  switch (theme) {
    case 'Web Design':
      return '_orange';
    case 'Research':
      return '_green';
    case 'Copywriting':
      return '_purple';
    default:
      return '_default'; 
  }
}