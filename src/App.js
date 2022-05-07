
import './App.css';
import Bisection from './components/bisection';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/nav/navbar';
import Main from './components/main';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Main}/>
        <Route exact path='/Bisection' component={Bisection}/>
        
      </Switch>
    </Router>
  );
}

export default App;
