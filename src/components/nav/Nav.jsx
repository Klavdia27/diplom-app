import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Time } from "../time/Time";
import { withTranslator } from "../../hoc/withTranslator.jsx";
import { withTheme } from "../../hoc/withTheme.jsx";

import { ReactComponent as ThemeIcon } from "../../icons/theme.svg";
import "./Nav.scss";

const links = [
    {
        textId: "nav.links.home",
        url: "/",
    },
    {
        textId: "nav.links.cinemas",
        url: "/cinemas",
    },
    {
        textId: "nav.links.buyticket",
        url: "/buyticket",
    },
]

function Nav({ translate, setLanguage, toggleTheme}) {

    const [showTime, setShowTime] = useState(true);
    
    return (    
        <div className="container-nav container">
            <nav className="nav">
                <ul className="nav">
                    {links.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.url} className="link" activeClassName="active">{translate(link.textId)} </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

           <div className="languages">
               <button onClick={() => setLanguage("ru")}>RU</button>
               <button onClick={() => setLanguage("en")}>EN</button>
           </div>
            <ThemeIcon 
                className="theme-icon"
                onClick={() => toggleTheme()}
            />
            <div className="time">
                {showTime && <Time/>}
            </div>
        </div>   
    )
}

export default withTheme(withTranslator(Nav));