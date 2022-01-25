import axios from "axios";

export const getFilms = () => axios.get("/api/films");

window.login = (login, password) => axios.post("/api/login", { login, password });