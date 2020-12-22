import './App.css';
import LandingPage from "./Pages/LandingPage/index";
import DetailsPage from "./Pages/DetailsPage/index";
import SearchPage from "./Pages/SearchPage/index";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <LandingPage path="/"/>
        </Route>
        <Route>
          <SearchPage path="/search"/>
        </Route>
        <Route>
          <DetailsPage path="/details"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
