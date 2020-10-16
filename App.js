import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {

  //(window.location.pathname)

  return (
    <body>
      <div className="heading">
        <h1>Spaghetti Warehouse</h1>
      </div>
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path='/menu'>
                <Menu />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </body>
  );
}

const AutoHeader = (props) => {
  //console.log(props)
  let foo = props;
  //console.log( typeof foo)
  if (foo) {
    return (
      <div><h3>{foo.text}</h3></div>
    )
  } else {
    return
  }
}

const getClass = (path) => {
  console.log(path, window.location.pathname, window.location.pathname === path)
  if (window.location.pathname === path) {
    return "active";
  } else {
    return "inactive"
  }
}

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className={getClass('/')}>
            <Link to='/'>Home</Link>
          </li>
          <li className={getClass('/menu')}>
            <Link to='/menu'>Menu</Link>
          </li>
          <li className={getClass('/about')}>
            <Link to='/about'>About</Link>
          </li>
          <li className={getClass('/contact')}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

function Home() {
  return (
    <div className="card">
      <NavBar />
      <AutoHeader text="Home" />
      <h3>"Spaghetti Warehouse is amazing!" - Donatella Versace</h3>
      <h3>"I met the love of my life in Spaghetti Warehouse!" - Robert De Niro</h3>
      <h3>"I owe Spaghetti Warehouse my firstborn." - Giorgio Armani</h3>
    </div>

  )
}

function Menu() {
  return (
    <div className="card">

      <NavBar />
      <AutoHeader text="Menu" />
      <h3>Spaghetti Pomodoro </h3>
      <p>Simple yet delicious tomato sauce over fresh spaghetti</p>
      <br></br>
      <h3>Spaghetti Bolognese</h3>
      <p>Hearty vegetable and meat sauce over fresh spaghetti</p>
      <br></br>
      <h3>Spaghetti Carbonara</h3>
      <p>Guanciale, parmesan, egg yolk, spaghetti - Just like nonna used to make</p>
      <br></br>
      <h3>Giorgio Armani's Firstborn Son</h3>
      <p>Lightly breaded and deep fried, served over our delicious Spaghetti Pomodoro</p>
    </div>
  )
}

function About() {
  return (
    <div className="card">

      <NavBar />
      <AutoHeader text="About" />
      <p>Spaghetti Warehouse was started by my great-great Grand Uncle in 1907</p>
    </div>
  )
}

function Contact() {
  return (
    <div className="card">

      <NavBar />
      <AutoHeader text="Contact" />
      <p>404 Saucy Noodle Lane</p>
      <p>1-800-Spa-Ghet</p>
    </div>
  )
}

export default App;