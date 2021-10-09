import './App.css';
import Home from './Components/Header/NavBar/Home/Home';
import About from './Components/Header/NavBar/About/About';
import NotFound from './Components/Header/NavBar/NotFound/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Components/Header/NavBar/Contact/Contact';
import NavLinks from './Components/Header/NavBar/NavLinks/NavLinks';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <div>
        <div>
        <Router>
          <div className='nav-links'>
            <NavLinks></NavLinks>
          </div>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/courses'>
            <Courses></Courses>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/contact'>
            <Contact></Contact>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        
        <Footer></Footer>
      </Router>

        </div>
      </div>
    </div>
  );
}

export default App;
