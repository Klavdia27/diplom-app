import React, { useState, useEffect } from "react";

import "./AboutFilm.scss";
import { getFilms } from "../../api/filmsApi";

export function AboutFilm ({ film }) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getFilms(film.id);
                setData(response.data);
                setIsLoading(false);
            } catch {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [])

    const genre = film.genre;
    console.log(genre);

    return (
        <>
            <div className="about-film-group" >
                {isLoading && <span>Loading...</span>}
                    {isError && <span>Error...</span>}
                    {!isLoading &&  !isError &&
                        <>
                        <div>
                            <img className="about-film-avatar" src={film.avatar_url} alt="avatar"/>
                        </div>
                        <div className="about-film-summery"> 
                            <p> <span className="subtitle">Даты показа фильма:</span> {film.date.join(";  ")} </p> 
                            <p className="name text"> <span className="subtitle">Название фильма:</span> {film.Name} </p> 
                            <p><span className="subtitle">Год:</span> {film.year}</p>
                            <p><span className="subtitle">Страна:</span> {film.country}</p>
                            <p><span className="subtitle">Жанр:</span> {film.genre.join(", ")}</p>
                            <p><span className="subtitle">Описание:</span> {film.decsription}</p>   
                        </div>
                        </>
                    }
            </div>
        </>
    )
}