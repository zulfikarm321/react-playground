export function getItem(key) {
  const item = window.localStorage.getItem(key);
  return JSON.parse(item);
}

export function setItem(key, value) {
  const item = JSON.stringify(value);
  window.localStorage.setItem(key, item);
}

export function removeItem(key) {
  window.localStorage.removeItem(key);
}
