import React, {useEffect, useState} from "react";
import { getFilms } from "../../../api/filmsApi";
import { Modal } from "../../modal/Modal";
import "./FilmsPageModal.scss";

export function FilmsPageModal ({ film, onClose }) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getFilms(film.id);
                setData(response.data);
                setIsLoading(false);
            } catch {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [])

    return (
        <Modal title = {`${film.Name} (${film.year})`}
                    onClose={onClose}>
                <div className="films-page-modal"> 
                    <img className="avatar" src={film.avatar_url} alt="avatar"/>
                    {isLoading && <span>Loading...</span>}
                    {isError && <span>Error...</span>}
                    {!isLoading &&  !isError &&
                      <div className="summery">   
                        <p>Год: {film.year}</p>
                        <p>Страна: {film.country}</p>
                        <p>Жанр: {film.genre.join(", ")}</p>
                        <p>Описание: {film.decsription}</p>
                      </div>
                    }
                </div>
        </Modal>
    )
}