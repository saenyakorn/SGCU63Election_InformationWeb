import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// PAGE
import PartyPage from "./pages/partyPage"
import LandingPage from "./pages/landingPage"

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/number1">
            <PartyPage party={"party1"} />
          </Route>
          <Route exact path="/number2">
            <PartyPage party={"party2"} />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}
