import React, { useEffect, useState } from "react";
import { TextField, Autocomplete } from '@mui/material';

import { getFilms } from "../../api/filmsApi";
import { FilmsPageCard } from "./card/FilmsPageCard";
import MultipleSlides from "../multipleSlides/MultipleSlides.jsx";

import { withTranslator } from "../../hoc/withTranslator";
import { withMe } from "../../hoc/withMe";

import Loader from "../loader/Loader.jsx";

import "./FilmsPage.scss";

function FilmsPage ({ translate, me, setMe, ...props  }) {
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

    const filmsOptions = films.map(({ Name }) => ({ label: Name }));

    return (
        <>
        <div>
            <MultipleSlides/>
        </div> 
        <div className="film-search">
            <Autocomplete
                        className="inputmovie"
                        disablePortal
                        id="combo-box-demo"
                        options={filmsOptions}
                        sx={{ width: 500 }}
                        renderInput={(params) => <TextField {...params} label={translate("header.search")} />}
            />
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
export default withMe(withTranslator(FilmsPage));