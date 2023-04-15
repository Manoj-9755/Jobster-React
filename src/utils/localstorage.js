export const addusertolocal = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const removeuserfromlocal = () => {
  localStorage.removeItem("user");
};
export const getitemfromlocal = (user) => {
  const result = localStorage.getItem(user);
  const User = result ? JSON.parse(result) : null;
  return User;
};
