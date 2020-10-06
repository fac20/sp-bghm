import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Title } from "./App.style";

import PageNotFound from "./components/pages/PageNotFound/PageNotFound.jsx";
import Location from "./components/pages/Location/Location.jsx";
import RecyclingCategories from "./components/pages/RecyclingCategories/RecyclingCategories.jsx";
import MoreInfo from "./components/pages/MoreInfo/MoreInfo.jsx";
import { Primary } from "./stories/Navbar.stories.js";

function App() {
  return (
    <div className="App">
      <Title>
        <h1>Recycling in London</h1>
      </Title>
      <main>
        <BrowserRouter>
          <Primary
            backgroundColor={null}
            label="Navigation"
            onClick={() => {}}
            primary
            size="medium"
          />
          <Switch>
            <Route path="/" exact>
              <Location />
            </Route>
            <Route path="/categories/:borough" exact>
              <RecyclingCategories />
            </Route>
            <Route path="/categories/:borough/:material">
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
