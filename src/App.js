import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import Location from "./components/Location/Location.jsx";
import RecyclingCategories from "./components/RecyclingCategories/RecyclingCategories.jsx";
import MoreInfo from "./components/MoreInfo/MoreInfo.jsx"

function App() {
  return (
    <div className="App">
      <header>
        <h1>Recycling in London</h1>
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Location />
            </Route>
            <Route path="/categories/:borough" exact>
              <RecyclingCategories />
            </Route>
            <Route path="/categories/:borough/:material">
              <MoreInfo/>
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
      {/* </Location>  */}
    </div>
  );
}

export default App;
