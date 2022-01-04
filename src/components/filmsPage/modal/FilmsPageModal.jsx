import React from "react";
import { Modal } from "../../modal/Modal";
import "./FilmsPageModal.scss";

export class FilmsPageModal extends React.Component {

    render() {
        const film = this.props.film;

        return (
            <Modal title = {`${film.Name} (${film.year})`}
                    onClose={this.props.onClose}>

                <div className="films-page-modal"> 
                    <img className="avatar" src={film.avatar_url} alt="avatar"/>
                    <div className="summery">
                        
                        <p>Год: {film.year}</p>
                        <p>Страна: {film.country}</p>
                        <p>Жанр: {film.genre}</p>
                        <p>Описание: {film.decsription}</p>
                        <a href={film.trailer} target="_blank">Трейлер</a>


                    </div>
                </div>
                

            </Modal>
        )
    }
}