import React, { useEffect, useState } from "react";

import Loader from "../loader/Loader.jsx";
import { getFilms } from "../../api/filmsApi";
import { FilmsPageCard } from "./card/FilmsPageCard";
import "./FilmsPage.scss";
import MultipleSlides from "../multipleSlides/MultipleSlides.jsx";

export function FilmsPage () {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await getFilms();
                setFilms(response.data);
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <div>
            <MultipleSlides/>
        </div> 
        <div className="films-page">
            <span className="text">
                {isLoading && <Loader/> }
                {isError && " Error..." }
            </span>
            {!isLoading && !isError && 
                films.map(film => 
                    <FilmsPageCard key={film.id} film={film}/>
                )
            }
        </div>
        </>

    )
}