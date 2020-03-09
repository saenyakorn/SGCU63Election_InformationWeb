import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ThemeProvider, ThemeContext } from "styled-components"

import theme from "./styles/theme"
import PartyPage from "./pages/partyPage"
import LandingPage from "./pages/landingPage"

import { content } from "./content/api"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/number1">
            <PartyPage party={content.party1} />
          </Route>
          <Route path="/number2">
            <PartyPage party={content.party2} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}
