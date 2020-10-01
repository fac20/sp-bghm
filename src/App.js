import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import Location from "./components/Location/Location.jsx";
import RecyclingCategories from "./components/RecyclingCategories.jsx";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Location />
            </Route>
            <Route path="/categories/:borough">
              <RecyclingCategories />
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
