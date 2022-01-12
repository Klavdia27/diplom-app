import React, { useEffect, useState } from "react";
import { getFilms } from "../api/filmsApi";
import { FilmsPageCard } from "./card/FilmsPageCard";
import "./FilmsPage.scss";

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
        <div className="films-page">
            {isLoading && " Loading..." }
            {isError && " Error..." }
            {!isLoading && !isError && 
                films.map(film => 
                    <FilmsPageCard key={film.id} film={film}/>
                )
            }
        </div>
    )
}