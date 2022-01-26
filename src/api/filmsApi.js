import axios from "axios";

export const getFilms = () => axios.get("/api/films");
