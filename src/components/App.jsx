import { Routes, Route } from "react-router-dom";
import { Header } from "./header/Header.jsx";
import Nav from "./nav/Nav.jsx";
import { BuyTickets } from "./buyTickets/BuyTickets.jsx";
import { FilmsPage } from "./filmsPage/FilmsPage";
import  Cinemas  from "./cinemas/Cinemas.jsx";
import  FilmPage  from "./filmPage/FilmPage.jsx";

import './App.scss';

import "swiper/css/bundle";





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
  
      {/* <div>
        <MultipleSlides/>
      </div> */}

      <main className="app__main"> 
          <Routes>
            <Route path='/' element={<FilmsPage/>} />
            <Route path='/buyticket' element={<BuyTickets/>} />
            <Route path='/cinemas'   element={<Cinemas/>} />
            <Route path='/films/:id' element={<FilmPage/>} />
          </Routes>
        
          {/* {isFilmPage
            ?
            <div>
              
              <FilmsPage/>
            </div>
            
            :
            <div>Empty Page</div>
          } */}

        </main>
        
      {/* <div className="nav">
        <BuyTickets/>
      </div> */}

      
      
    </div>
  );
}

export default App;
