import React from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import styled, { ThemeProvider, ThemeContext } from "styled-components"

import theme from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/"></Route>
        <Route path="/number1"></Route>
        <Route path="/number2"></Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
