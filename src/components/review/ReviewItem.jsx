import React, { useState } from "react";
import "./Review.scss";

export function ReviewItem({ item, setReview, filmName }) {
    let [modifyMode, setModifyMode] = useState(false);
    let [modifyText, setModifyText] = useState('');

    function deleteReview(str) {
        let temp = JSON.parse(localStorage.getItem(filmName));
        temp.splice(temp.findIndex(i => i === str), 1);
        localStorage.setItem(filmName, JSON.stringify(temp));
        setReview(temp);
    }

    function startModify(str) {
        setModifyMode(true);
        setModifyText(str);
    }

    function saveModify(item) {
        let temp = JSON.parse(localStorage.getItem(filmName));
        let index = temp.findIndex(i => i === item);
        temp[index] = modifyText;
        localStorage.setItem(filmName, JSON.stringify(temp));
        setReview(temp);
        setModifyMode(false);
        setModifyText('');
    }

    function cancelModify() {
        setModifyMode(false);
        setModifyText('');
    }

    return (
        <div className="review__row">
            <p className={!modifyMode ? "" :  "review__none"} key={item}>{item}</p>
            <textarea className={modifyMode ? "review__modify" :  "review__modify review__none"} 
                    onClick={() => startModify(item)}
                    value={modifyText}
                    onChange={(e) => setModifyText(e.target.value)}></textarea>
            <div>
                <button className={!modifyMode ? "" :  "review__none"} onClick={() => startModify(item)}>Редак</button>
                <button className={!modifyMode ? "" :  "review__none"} onClick={() => deleteReview(item)}>Удалить</button>
                <button className={modifyMode ? "" :  "review__none"} onClick={() => saveModify(item)}>Сохранить</button>
                <button className={modifyMode ? "" :  "review__none"} onClick={() => cancelModify()}>Отменить</button>
            </div>
        </div>
    )
}