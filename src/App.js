import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/Home/NotFound/NotFound';

import Header from './Shared/Footer/Header/Header';




import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Projects from './Shared/Footer/Header/projects/Projects';
import Expert from './components/Skill/Expert/Expert';
import Contact from './contact/Contact';






function App() {
  return (
    <div className="App bg-dark h-100">

        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/skill'>
              <Skill></Skill>
            </Route>
            <Route path='/projects'>
              <Projects></Projects>
            </Route>
            <Route path='/expert'>
              <Expert></Expert>
            </Route>
            <Route path='/Contact'>
              <Contact></Contact>
            </Route>
        
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>


          </Switch>

        </BrowserRouter>
 
    </div>
  );
}

export default App;
