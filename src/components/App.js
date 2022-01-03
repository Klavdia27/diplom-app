import Header from "./header/Header.jsx";
import Nav from "./nav/Nav.jsx";

import './App.scss';

function App() {
  return (
    <div className="app">
      <div>
        <Header />
      </div>

      <div className="navig">
        <Nav/>
      </div>

      
      
    </div>
  );
}

export default App;
