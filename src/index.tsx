import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'emotion-theming'
import { lightTheme } from './config/theme'

const boot = (rootId: string) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>,
    document.getElementById(rootId),
  )

boot('root')

// ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
