import React from "react";
import {Stack, Button} from '@mui/material';
import cinemaItems from "../../mocks/dataBrowser/cinemaItems";
import filmItems from "../../mocks/dataBrowser/films";
import { AboutFilm } from "../aboutFilm/AboutFilm";
import "./Cinemas.scss"


export function Cinemas ()  {
    let [cinemas, setCinemas] = React.useState(cinemaItems)  
    let [films, setFilms] = React.useState(null) 

    function changeActiveButton(e) { 
        for (let i = 0; i < e.target.closest('.css-e53awj-MuiStack-root').children.length; i++) {
            e.target.closest('.css-e53awj-MuiStack-root').children[i].classList.remove('active')
        }
        e.target.classList.add('active')
    }

    function setCinemasFunction(e) { 
        if (e.target.dataset.cinema === 'Все') {
            setCinemas(cinemaItems)
            return
        }

        setCinemas(() => {
            for (let i = 0; i < cinemaItems.length; i++) {
                if (cinemaItems[i].name === e.target.dataset.cinema) {
                    return [cinemaItems[i]]
                }
            }
        })
    }

    function setFilmsFunction(e) { 
        setFilms([])

        if (e.target.dataset.cinema === 'Все') {
            setFilms(null)
            return
        }

        for (let i = 0; i < filmItems.length; i++) {
            if (filmItems[i].cinema.includes(e.target.dataset.cinema)) {
                setFilms(p => [...p, filmItems[i]])
            }
        }
    }

    function chooseCinema(e) { 
        if (e.target.type === "button") {
            changeActiveButton(e)
            setCinemasFunction(e)
            setFilmsFunction(e)
        }
    }

    return (
        <>
        <div className="group-button__cinemas">
            <div id="myBtnContainer">
                <Stack spacing={2} direction="row" onClick={(e) => chooseCinema(e)}>
                    <Button variant="contained" data-cinema="Все" className="btn active" > Show all</Button>
                    <Button variant="contained" data-cinema="Центральный" className="btn" > Центральный</Button>
                    <Button variant="contained" data-cinema="Октябрь" className="btn" > Октябрь</Button>
                    <Button variant="contained" data-cinema="Москва" className="btn" > Москва</Button>
                    <Button variant="contained" data-cinema="Берестье" className="btn" > Берестье</Button>
                    <Button variant="contained" data-cinema="Беларусь" className="btn" > Беларусь</Button>
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
                                <iframe className="cinema-map" src={cinemaItem.map} title="cinema map" width="500" height="300" allowfullscreen="" loading="lazy"></iframe>
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