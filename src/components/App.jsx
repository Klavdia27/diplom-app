import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import LoginPage from "./loginPage/LoginPage.jsx";
import Header from "./header/Header.jsx";
import Nav from "./nav/Nav.jsx";
import { FilmsPage } from "./filmsPage/FilmsPage";
import BuyTickets from "./buyTickets/BuyTickets.jsx";
import { Cinemas } from "./cinemas/Cinemas.jsx";
import  FilmPage  from "./filmPage/FilmPage.jsx";

import { withTheme } from "../hoc/withTheme.jsx";
import AuthContext from "./contexts/AuthContext.js";

import './App.scss';
import "swiper/css/bundle";



function App({setThemeFromStore}) {
  const [me, setMeToState] = useState(JSON.parse(localStorage.getItem("me")));

  const setMe = (me) => {
    localStorage.setItem("me", JSON.stringify(me));
    setMeToState(me);
  }

  useEffect(() => setThemeFromStore(), []);

  return (
    <AuthContext.Provider value={{me, setMe}}>
      <div className="app">
        <div>
          <Header/>
        </div>

        <div className="nav">
          <Nav/>
        </div>

        <main className="app__main"> 
            <Routes>
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/' element={<FilmsPage/>} />
              <Route path='/buyticket' element={<BuyTickets/>} />
              <Route path='/cinemas'   element={<Cinemas/>} />
              <Route path='/films/:id' element={<FilmPage/>} />
            </Routes>
          </main>
      </div>  
    </AuthContext.Provider>

  );
}

export default withTheme(App);
