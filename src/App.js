import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TitleBar from "./components/Title/TitleBar.jsx";
import TitleNohome from "./components/TitleNohome/TitleNohome.jsx"

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
              <Location />
            </Route>
            <Route path="/categories/:borough" exact>
              <TitleBar/>
              <RecyclingCategories />
            </Route>
            <Route path="/categories/:borough/:material">
              <TitleNohome/>
              <MoreInfo />
            </Route>
            <Route>
              <TitleBar/>
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
