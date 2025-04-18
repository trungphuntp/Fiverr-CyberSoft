import Cookies from "js-cookie";
import { STORAGE } from "../constants/storage";

const localStorageToken = {
  get() {
    return JSON.parse(
      localStorage.getItem(STORAGE.token) === undefined
        ? null
        : localStorage.getItem(STORAGE.token)
    );
  },
  set(token) {
    return localStorage.setItem(STORAGE.token, JSON.stringify(token));
  },
  remove() {
    return localStorage.removeItem(STORAGE.token);
  },
};

export const cookiesStorageToken = {
  get(key) {
    return Cookies.get(key) === undefined ? null : Cookies.get(key);
  },
  set(key, token) {
    return Cookies.set(key, token);
  },
  remove(key) {
    return Cookies.remove(key);
  },
};

export const methodToken = {
  get(key) {
    return cookiesStorageToken.get(key);
  },
  set(key, token) {
    return cookiesStorageToken.set(key, token);
  },
  remove(key) {
    return cookiesStorageToken.remove(key);
  },
};
