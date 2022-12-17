export const saveToLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// get keys from local storage
export const getFromLS = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return false;
  }
};
