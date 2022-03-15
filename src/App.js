import './App.css';
import {Route,Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import About from './components/About';
import {ProtectedRoute} from './protected.route'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Login}/>
      <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
      <ProtectedRoute exact path="/about" component={About}/>
      <Route path="*" component={()=>"404 Not Found"}/>
    </Switch>
    </div>
  );
}

export default App;
