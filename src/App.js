import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import styled from "styled-components"

import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import Location from "./components/Location/Location.jsx";
import RecyclingCategories from "./components/RecyclingCategories/RecyclingCategories.jsx";
import MoreInfo from "./components/MoreInfo/MoreInfo.jsx"
const Title = styled.h1`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  color: var(--very-dark-green);
`
function App() {
  return (
    <div className="App">
      <Title>
        Recycling in London
      </Title>
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
