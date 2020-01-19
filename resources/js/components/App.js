import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import { BrowserRouter } from 'react-router-dom'
    import Layout from './Layout'
import {store} from "../store";
import {Provider} from 'react-redux';


    class App extends Component {
      render () {
        return (
          <Provider store={store}>
          <BrowserRouter>
            <Layout/>
          </BrowserRouter>
          </Provider>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))