import React from "react";
import { FilmsPageCard } from "./card/FilmsPageCard";

import "./FilmsPage.scss";



const getFilms = () => {
   return fetch('https://api-film-all.herokuapp.com/api/get_all_films')
               .then((response) => {
                  return response.json();
               })
}
export class FilmsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           films: [],
           isLoading: true,
        }
    }

    componentDidMount() {
       getFilms()
            .then((data) => {
               this.setState({ films: data, isLoading: false});
            })
    }

    render() {
        
        if (this.state.isLoading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <div className="films-page">
                {this.state.films.map(film => 
                   <FilmsPageCard key={film.id} film={film}/>
                )}
            </div>
        )
    }
}