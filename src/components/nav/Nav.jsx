import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Time } from "../time/Time";
import { withTranslator } from "../../hoc/withTranslator";

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

function Nav({ translate, setLanguage}) {

    const [showTime, setShowTime] = useState(true);
    
    return (    
        <div className="container-nav">
            <nav className="nav">
                <ul className="nav">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.url} className="link">{translate(link.textId)} </Link>
                        </li>
                    ))}
                </ul>
            </nav>

           <div className="languages">
               <button onClick={() => setLanguage("ru")}>RU</button>
               <button onClick={() => setLanguage("en")}>EN</button>
           </div>

            <div className="time">
                {showTime && <Time/>}
            </div>
        </div>   
    )
}

export default withTranslator(Nav);