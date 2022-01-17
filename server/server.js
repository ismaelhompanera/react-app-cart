import path from 'path'
import Express from 'express'
import React  from 'react'

import { renderToString } from 'react-dom/server'
import counterApp from '../src/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from '../src/App'

const app = Express()
const PORT = 3006;

app.use('/public', Express.static(path.join(__dirname, 'static', 'public')));
app.use(handleRender)

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(counterApp)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});