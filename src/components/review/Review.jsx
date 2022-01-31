import React from "react";
import { useEffect, useState } from "react";
import { ReviewItem } from "./ReviewItem";
import "./Review.scss";

export function Review({ filmName }) {
    let [review, setReview] = useState([]);
    let [text, setText] = useState('');

    useEffect(() => {
        setReview(JSON.parse(localStorage.getItem(filmName)) ?? []);
    }, [filmName])

    function saveReview(e) {
        e.preventDefault();

        if (text) {
            if (!localStorage.getItem(filmName)) {
                localStorage.setItem(filmName, JSON.stringify([text]));
                setReview(p => [...p, text]);
            } 

            else {
                let temp = JSON.parse(localStorage.getItem(filmName));

                if (temp.length > 5) {
                    temp.shift();
                }

                temp.push(text);
                localStorage.setItem(filmName, JSON.stringify(temp));
                setReview(temp);
            }
            setText('');
        }
    }

    return (
        <>
            <h2>Отзывы</h2>
            <div>
                {review.length === 0 && <p>Отзывов нет!</p>}
                {review.map(item => <ReviewItem item={item} setReview={setReview} filmName={filmName}/>)}
            </div>
            <div>
                <form className="review__form" onSubmit={(e) => saveReview(e)} action="">
                    <textarea className="review__textarea" value={text} onChange={(e) => setText(e.target.value)} type="text" />
                    <button>Добавить</button>
                </form>
            </div>
        </>
    )
}