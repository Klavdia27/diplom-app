import React from "react";
import "./Header.scss";
import cinemaTicket from "./img/cinema-ticket.png";
import searchFilm from "./img/search.png"

class Header extends React.Component { 
    render() {
        return (
            <header className="header">
                <div className="container">
                    <pre className="header__title">CINEMA   ZONE</pre>
                    <img src={cinemaTicket} alt="icon: cinema-ticket" className="header__cinema-icon"/>

                    <div className="header-search"> 
                        <input type="text" placeholder="поиск" className="header__input"></input>
                        <img src={searchFilm} alt="icon: search" className="header__search-icon"/>
    
                    </div>
                    <div className="header__profil">
                        <span>Профиль</span>
                    </div>
                </div>

            </header>
        )
    }
}

export default Header;