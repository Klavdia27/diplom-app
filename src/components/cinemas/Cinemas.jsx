import React from "react";
import {Stack, Button} from '@mui/material';
import  cinemaItems  from "../../mocks/dataBrowser/cinemaItems";

import "./Cinemas.scss"

export function Cinemas ()  {

    return (
        <>
        <div className="group-button__cinemas">
        
            <div id="myBtnContainer">
                <Stack spacing={2} direction="row">
                    <Button variant="contained" className="btn active" > Show all</Button>
                    <Button variant="contained" className="btn" > Центральный</Button>
                    <Button variant="contained" className="btn" > Октябрь</Button>
                    <Button variant="contained" className="btn" > Москва</Button>
                    <Button variant="contained" className="btn" > Берестье</Button>
                    <Button variant="contained" className="btn" > Беларусь</Button>
                </Stack>            
            </div>
        </div>

        <div className="group-decsr__cinemas">
        {cinemaItems.map(cinemaItem => 
                <>
                <h2>{cinemaItem.name} </h2>
                <p> Адрес кинотеатра: {cinemaItem.adress} </p>
                <img className="foto" src={cinemaItem.foto} alt="foto"/>
                <iframe className="cinema-map" src={cinemaItem.map} title="cinema map" width="500" height="300" allowfullscreen="" loading="lazy"></iframe>
                </>
            )
        }
        </div>
        </>
    )
}