import React from "react";
//import { Modal } from "../../modal/Modal";
import { FilmsPageModal } from "../modal/FilmsPageModal";
import "./FilmsPageCard.scss";

export class FilmsPageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        }
    }

    handleClick = (e) => {
        this.setState({ showModal: true });
    }

    handleCloseModal = (e) => {
        this.setState({ showModal: false });
    }

    render() {
        const film = this.props.film;

        return (
            <>
            <div className="films-page-card" onClick={this.handleClick}>
                <img className="avatar" src={film.avatar_url} alt="avatar"/>
                <span className="name">
                    {film.Name}
                </span>
            </div>
            {this.state.showModal && 
                <FilmsPageModal film={film} onClose={this.handleCloseModal}/>
            } 
            </>
        )
    }
}