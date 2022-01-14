import { Header } from "./header/Header.jsx";
import Nav from "./nav/Nav.jsx";
import { BuyTickets } from "./buyTickets/BuyTickets.jsx";
import './App.scss';
import { FilmsPage } from "./filmsPage/FilmsPage";
import { Slaider } from "./filmsPage/slaider/Slaider";


import "swiper/css/bundle";
//import "./styles.css";

import MultipleSlides from "./multipleSlides/MultipleSlides.jsx";


function App() {
  const isFilmPage = true;
  return (
    <div className="app">
      <div>
        <Header/>
      </div>

      <div className="nav">
        <Nav/>
      </div>
  
      <div>
        <MultipleSlides/>
      </div>

      <main className="app__main"> 

          {isFilmPage
            ?
            <div>
              
              <FilmsPage/>
            </div>
            
            :
            <div>Empty Page</div>
          }

        </main>
        
      <div className="nav">
        <BuyTickets/>
      </div>

      
      
    </div>
  );
}

export default App;