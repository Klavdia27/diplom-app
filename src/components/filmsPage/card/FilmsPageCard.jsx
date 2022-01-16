import React, { useState} from "react";
import { FilmsPageModal } from "../modal/FilmsPageModal";
import "./FilmsPageCard.scss";

export function FilmsPageCard ({ film }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="films-page-card" onClick={() => setShowModal(true)}>
                <img className="avatar" src={film.avatar_url} alt="avatar"/>
                <span className="name text">
                    {film.Name}
                </span>
            </div>
            {showModal && 
                <FilmsPageModal film={film} onClose={() => setShowModal(false)}/>
            } 
            </>
    )
}