export function getUserFromStorage() {
  const defaultUser = {
    email: "",
    token: "",
    username : '',
    isLoginIn: false,
    accessToken : '',
    profilePicUrl : ''
  };

  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return {};
  }
}
