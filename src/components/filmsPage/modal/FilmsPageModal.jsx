import React from "react";
import { Modal } from "../../modal/Modal";
import "./FilmsPageModal.scss";

export class FilmsPageModal extends React.Component {

    render() {
        const film = this.props.film;

        return (
            <Modal title = {`${film.name} (${film.year})`}
                    onClose={this.props.onClose}>

                <div className="films-page-modal"> 
                    <img className="avatar" src={film.avatar_url} alt="avatar"/>
                    <a href={film.trailer} target="_blank">trailer</a>
                </div>
                

            </Modal>
        )
    }
}