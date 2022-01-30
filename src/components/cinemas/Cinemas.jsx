import React, { useState, useEffect } from "react";
import {Stack, Button} from '@mui/material';
import cinemaItems from "../../mocks/dataBrowser/cinemaItems";
import filmItems from "../../mocks/dataBrowser/films";
import { AboutFilm } from "../aboutFilm/AboutFilm";
import "./Cinemas.scss"


export function Cinemas ()  {
    const [cinemas, setCinemas] = useState(cinemaItems);  
    const [films, setFilms] = useState(null);
    const [currentCinema, setCurrentCinema] = useState("Все");
    const [CINEMAS, setCINEMAS] = useState(["Все"]);  

    useEffect(() => {
        let temp = [];
        for (let i = 0; i < cinemaItems.length; i++) {
            temp.push(cinemaItems[i].name)
        }
        setCINEMAS(p => [...p, ...temp])
    }, []);

    function setCinemasFunction(e) { 
        setCurrentCinema(e.target.dataset.cinema);

        if (e.target.dataset.cinema === 'Все') {
            setCinemas(cinemaItems);
            return
        }
        setCinemas(() => {
            for (let i = 0; i < cinemaItems.length; i++) {
                if (cinemaItems[i].name === e.target.dataset.cinema) {
                    return [cinemaItems[i]];
                }
            }
        })
    }
    function setFilmsFunction(e) { 
        setFilms([])

        if (e.target.dataset.cinema === 'Все') {
            setFilms(null);
            return
        }
        for (let i = 0; i < filmItems.length; i++) {
            if (filmItems[i].cinema.includes(e.target.dataset.cinema)) {
                setFilms(p => [...p, filmItems[i]]);
            }
        }
    }

    function chooseCinema(e) { 
        if (e.target.type === "button") {
            setCinemasFunction(e);
            setFilmsFunction(e);
        }
    }
    return (
        <>
        <div className="group-button__cinemas">
            <div id="myBtnContainer">
                <Stack spacing={2} direction="row" onClick={(e) => chooseCinema(e)}>
                    {CINEMAS.map(item => (
                        <Button variant="contained" 
                                data-cinema={item} 
                                className={currentCinema === item ? "btn active " : "btn"}>
                                    {item}
                        </Button>
                    ))}
                </Stack>            
            </div>
        </div>
        <div className="group-decsr__cinemas">
            {cinemas.map(cinemaItem => 
                    <div className="cinema-item-active">
                        <div className="cinema-item">
                            <h2>{cinemaItem.name} </h2>
                            <p> Адрес кинотеатра: {cinemaItem.adress} </p>
                            <div className="cinema-item-fotomap">
                                <img className="foto" src={cinemaItem.foto} alt="foto"/>
                                <iframe className="cinema-map" src={cinemaItem.map} title="cinema map" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="films-page">
                {films && films.map((item) => <AboutFilm key={item.id} film={item}/>)}
            </div>
            {(Array.isArray(films) && films.length === 0) && <p className="cinema-item-none">Фильмов нет!</p>}
        </div>
        </>
    )
}