import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import exm from "./components/exm"
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={exm} />
      </Switch>
    </div>
  );
}

export default App;
