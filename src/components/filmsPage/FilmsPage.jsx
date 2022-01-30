import React, { useEffect, useState } from "react";
import { TextField, Autocomplete } from '@mui/material';

import { getFilms } from "../../api/filmsApi";
import { FilmsPageCard } from "./card/FilmsPageCard";
import MultipleSlides from "../multipleSlides/MultipleSlides.jsx";
import { Review } from "../review/Review";
import { AboutFilm } from "../aboutFilm/AboutFilm";
import { withTranslator } from "../../hoc/withTranslator";
import { withMe } from "../../hoc/withMe";

import Loader from "../loader/Loader.jsx";

import "./FilmsPage.scss";



function FilmsPage ({ film, translate, me, setMe, ...props  }) {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [selectFilm, setSelectFilm] = useState(null);
    const filmsOptions = films.map(({ Name }) => ({ label: Name }));

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

    let findFilm = films.find(elem => selectFilm === elem.Name );

    function hendlefilm(event) {
        setSelectFilm(event.target.outerText);
    }

    return (
        <>
        <div>
            <MultipleSlides/>
        </div> 
        <div className="film-search">
            <Autocomplete
                        className="inputmovie"
                        disablePortal
                        onChange={hendlefilm}
                        id="combo-box-demo"
                        options={filmsOptions}
                        sx={{ width: 500 }}
                        renderInput={(params) => <TextField {...params} label={translate("header.search")} />}
            />
        </div>
        {
            !selectFilm && 
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
        }
        {
            selectFilm &&  
            <> 
            <AboutFilm film={findFilm} />
            <Review filmName={findFilm}/>
            </>  

        }
        </>

    )
}
export default withMe(withTranslator(FilmsPage));