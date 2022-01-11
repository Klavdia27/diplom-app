import React from "react";
import { getFilms } from "../../api/filmsApi";
import { Modal } from "../../modal/Modal";
import "./FilmsPageModal.scss";

export class FilmsPageModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            isLoading: true,
            isError: false,
        }
    }
    async componentDidMount() {
        try {
            const response = await getFilms(this.props.film.Name);
            this.setState({ data: response.data, isLoading: false });
        } catch {
            this.satState({ isError: true, isLoading: false})
        }
    }


    render() {
        const film = this.props.film;

        return (
            <Modal title = {`${film.Name} (${film.year})`}
                    onClose={this.props.onClose}>

                <div className="films-page-modal"> 
                    <img className="avatar" src={film.avatar_url} alt="avatar"/>
                    {this.state.isLoading && <span>Loading...</span>}
                    {this.state.isError && <span>Error...</span>}
                    {!this.state.isLoading &&  !this.state.isError &&
                      <div className="summery">   
                      <p>Год: {film.year}</p>
                      <p>Страна: {film.country}</p>
                      <p>Жанр: {film.genre}</p>
                      <p>Описание: {film.decsription}</p>
                  </div>
                    }

                  
                </div>
                

            </Modal>
        )
    }
}