import React from "react";

import './BuyTickets.scss';
import { ReactComponent as LegendBooked } from "../../icons/legendbooked.svg";
import { ReactComponent as LegendLabel } from "../../icons/legendlabel.svg";
import { ReactComponent as LegendText } from "../../icons/legendtext.svg";
import { ReactComponent as Scheme } from "../../icons/scheme.svg";
export class BuyTickets extends React.Component {


    render() {

        // const schemeSvg = document.querySelector('.scheme-svg');
        // const totalPriceTag = document.querySelector('.price-total');
        // const menuButton = document.querySelector('.m-menu');
        // const menu = document.querySelector('.menu');
        
        // let cost = 800;
        // let totalPrice = 0;
        // schemeSvg.addEventListener('click', (event) => {
        //     if (!event.target.classList.contains('booked')) {
        //         event.target.classList.toggle('active');
        //         let totalSeats = schemeSvg.querySelectorAll('.active').length;
        //         totalPrice = cost * totalSeats;
        //         totalPriceTag.textContent = totalPrice;
        
        //     };
        // })
        // menuButton.addEventListener('click', () => {
        //     menu.classList.toggle('is-open');
        // })

        return (
            <div className="scheme">
                <Scheme/>
                <div className="legend">
                    <div className="legend-free legend-label">
                        <LegendText/>
                        <span className="legend-text">Свободно</span>
                    </div>
       
                    <div className="legend-active legend-label">
                        <LegendLabel/>
                        <span className="legend-active">Выбрано</span>
                    </div>
      
                    <div className="legend-booked legend-label">
                        <LegendBooked/>
                        <span className="legend-booked">Занято</span>
                    </div>
                </div>
            </div>
        )
    }
}