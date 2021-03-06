import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { getFilms } from "../../api/filmsApi";
import { withTranslator } from "../../hoc/withTranslator";
import { withMe } from "../../hoc/withMe";


import cinemaTicket from "./img/cinema-ticket.png";

import "./Header.scss";

function Header({ translate, me, setMe, ...props  }) {
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
        <header className="header">
            <div className="container">
                <pre className="header__title">CINEMA   ZONE</pre>
                <img src={cinemaTicket} alt="icon: cinema-ticket" className="header__cinema-icon"/>
               
                <div className="header__profil">
                    <div className="header__profil-login">
                        <span >{translate("header.profil")}  </span>
                        {
                            me && <span>{me.login}  </span>
                        }  
                    </div>
                    <div>
                        { me
                        ? 
                            <Button className="header__login-btn" onClick={() => setMe(null)}> Выход</Button>
                        :
                            <Link className="header__login-btn" to="/login"> ВОЙТИ </Link> 
                        }
                    </div>
                   
                   
                </div>

            </div>
        </header>
    )    
}

export default withMe(withTranslator(Header));