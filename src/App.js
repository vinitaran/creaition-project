import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/"><Home /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
