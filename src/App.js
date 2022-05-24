
import './App.css';
import Bisection from './components/bisection';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/nav/navbar';
import Main from './components/main';
import FalsePosition2 from './components/FalsePosition2';
import OnePoint from './components/OnePoint';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Main}/>
        <Route exact path='/Bisection' component={Bisection}/>
        <Route exact path='/FalsePosition' component={FalsePosition2}/>
        <Route exact path='/OnePoint' component={OnePoint}/>
        
      </Switch>
    </Router>
  );
}

export default App;
