import React from "react";
import "./Nav.scss";
import { Time } from "../time/Time";

class Nav extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            showTime: true,
        };

    }
    render() {
        return (
            
                <div className="container-nav">
                    <nav className="nav">
                        <a href="/home" className="nav__link">Главная </a>
                        <a href="/buy" className="nav__link">Покупка билетов</a>
                    </nav>
                    <div className="nav__time">
                        {this.state.showTime && <Time/>}
                    </div>
                </div>

            
        )
    }
}

export default Nav;