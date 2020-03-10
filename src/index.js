import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

// THEME and STYLES
import GlobalStyles from "./styles/gobalStyles"
import theme from "./styles/theme"
import { ThemeProvider } from "styled-components"

//i18n
import "./i18n"

const Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}

ReactDOM.render(<Component />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
