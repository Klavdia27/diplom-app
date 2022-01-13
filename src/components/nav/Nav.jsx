import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { Time } from "../time/Time";
import { withTranslator } from "../../hoc/withTranslator";

const links = [
    {
        textId: "nav.links.home",
        url: "/",
    },
    {
        textId: "nav.links.buyticket",
        url: "/",
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
                            <a href={link.url} className="link">{translate(link.textId)} </a>
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