import axios from "axios";

const BASE_URL = "https://netmirror-2.onrender.com/api/auth";

export const registerUser = (data) =>
  axios.post(`${BASE_URL}/register`, data);

export const loginUser = (data) =>
  axios.post(`${BASE_URL}/login`, data);
