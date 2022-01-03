import Header from "./header/Header.jsx";
import Nav from "./nav/Nav.jsx";

import './App.scss';
import { FilmsPage } from "./filmsPage/FilmsPage";

function App() {
  const isFilmPage = true;
  return (
    <div className="app">
      <div>
        <Header />
      </div>

      <div className="nav">
        <Nav/>
      </div>

      <main className="app__main"> 

          {isFilmPage
            ?
            <FilmsPage/>
            :
            <div>Empty Page</div>
          }

        </main>
      
    </div>
  );
}

export default App;
