import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

import PageNotFound from "./components/pages/PageNotFound/PageNotFound.jsx";
import Location from "./components/pages/Location/Location.jsx";
import RecyclingCategories from "./components/pages/RecyclingCategories/RecyclingCategories.jsx";
import MoreInfo from "./components/pages/MoreInfo/MoreInfo.jsx";

function App() {
  return (
    <div className="App">
     
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Navbar/>
              <Location />
            </Route>
            <Route path="/categories/:borough" exact>
              <Navbar/>
              <RecyclingCategories />
            </Route>
            <Route path="/categories/:borough/:material">
              <Navbar/>
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
