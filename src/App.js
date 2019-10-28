import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { LoginPage } from 'pages'

import theme from './components/themes/default'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
`

const muiTheme = createMuiTheme({ ...theme })

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MuiThemeProvider theme={muiTheme}>
        <Switch>
          <Route path="/" component={LoginPage} exact />
        </Switch>
      </MuiThemeProvider>
    </>
  )
}

export default App
