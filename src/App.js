import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Location from "./pages/Location/Location.jsx";
import RecyclingCategories from "./pages/RecyclingCategories/RecyclingCategories.jsx";
import MoreInfo from "./pages/MoreInfo/MoreInfo.jsx";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Navbar />
              <Location />
            </Route>
            <Route path="/categories/:borough" exact>
              <Navbar />
              <RecyclingCategories />
            </Route>
            <Route path="/categories/:borough/:material">
              <Navbar />
              <MoreInfo />
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
