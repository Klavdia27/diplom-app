
import React  from "react";
import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react/cjs/react.development";
import { getFilms } from "../../api/filmsApi";
import "./FilmPage.scss";
const FilmPage = () => {
    const [film, setFilm] = useState({});
    const params = useParams();

    useEffect ( () => {
        getFilms(params.id)
        .then((response) => setFilm(response.data));
    }, [])

    useEffect ( ()=> {
        console.log(film)
    },)

    return (
        <div>
            Film Page
        </div>
    )
}

export default FilmPage;
