import axios from "axios";

export const getFilms = () => axios.get("/api/films", {
    headers: {
        Authentication: `Basic ${JSON.parse(localStorage.getItem("me"))?.token}`
    }
});
