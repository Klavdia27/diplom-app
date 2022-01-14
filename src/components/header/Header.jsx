import React from "react";
import "./Header.scss";
import cinemaTicket from "./img/cinema-ticket.png";
import searchFilm from "./img/search.png";
import { withTranslator } from "../../hoc/withTranslator";


function _Header({ translate }) {
    return (
        <header className="header">
            <div className="container">
                <pre className="header__title">CINEMA   ZONE</pre>
                <img src={cinemaTicket} alt="icon: cinema-ticket" className="header__cinema-icon"/>
                <div className="header-search"> 
                    <input type="text" placeholder={translate("header.search")} className="header__input"></input>
                    <img src={searchFilm} alt="icon: search" className="header__search-icon"/>
                </div>
                <div className="header__profil">
                    <span>{translate("header.profil")} </span>
                </div>
            </div>
        </header>
    )    
}
export const Header = withTranslator(_Header);