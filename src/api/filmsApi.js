import axios from "axios";

export const getFilms = () => axios.get("/api/films");
//export const getFilm = (id) => axios.get(`https://api-film-all.herokuapp.com/api/get_all_film/${id}`);


//export const getFilms = () => axios.get("https://api-film-all.herokuapp.com/api/get_all_films");
//export const getFilm = (id) => axios.get(`https://api-film-all.herokuapp.com/api/get_all_film/${id}`);