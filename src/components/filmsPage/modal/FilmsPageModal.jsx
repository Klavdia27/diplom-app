import React, {useEffect, useState} from "react";
import { getFilm } from "../../../api/filmsApi";
import { Modal } from "../../modal/Modal";
import "./FilmsPageModal.scss";

export function FilmsPageModal ({ film, onClose }) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getFilm(film.id);
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
                        <p>Год: {data.year}</p>
                        <p>Страна: {data.country}</p>
                        <p>Жанр: {data.genre}</p>
                        <p>Описание: {data.decsription}</p>
                      </div>
                    }
                </div>
        </Modal>
    )
}