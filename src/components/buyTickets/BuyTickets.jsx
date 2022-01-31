import React from "react";
import { withAuth } from "../../hoc/withAuth";

import './BuyTickets.scss';

import { ReactComponent as LegendBooked } from "../../icons/legendbooked.svg";
import { ReactComponent as LegendLabel } from "../../icons/legendlabel.svg";
import { ReactComponent as LegendText } from "../../icons/legendtext.svg";
import { ReactComponent as Scheme } from "../../icons/scheme.svg";

const BuyTickets = () => {
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

export default withAuth(BuyTickets);