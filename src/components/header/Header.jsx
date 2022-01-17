import React, {useEffect, useState} from "react";
import { TextField, Autocomplete } from '@mui/material';

import { withTranslator } from "../../hoc/withTranslator";
import { FilmsPageModal } from "../../components/filmsPage/modal/FilmsPageModal";
import { getFilms } from "../../api/filmsApi";

import cinemaTicket from "./img/cinema-ticket.png";
import searchFilm from "./img/search.png";

import "./Header.scss";



function _Header({ translate }) {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

   

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await getFilms();
                //console.log(response);
                setFilms(response.data);
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);
    
    const spisokFilms = films.map(film => ({label: film.Name}));

    return (
        <header className="header">
            <div className="container">
                <pre className="header__title">CINEMA   ZONE</pre>
                <img src={cinemaTicket} alt="icon: cinema-ticket" className="header__cinema-icon"/>
                <div className="header-search"> 
                <Autocomplete
                    className="inputmovie"
                    disablePortal
                    id="combo-box-demo"
                    options={spisokFilms}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label={translate("header.search")} />}
                />
                    {/* <input type="text" placeholder={translate("header.search")} className="header__input"></input>
                    <img src={searchFilm} alt="icon: search" className="header__search-icon"/> */}
                </div>
                <div className="header__profil">
                    <span>{translate("header.profil")} </span>
                </div>
            </div>
        </header>
    )    
}
export const Header = withTranslator(_Header);