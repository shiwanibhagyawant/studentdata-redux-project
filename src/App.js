import React from 'react'
import RouteFile from './Components/RouteFile'
import Navbar from './Components/Navbar'
import store from "./Components/store"
import { Provider } from 'react-redux'

const App = () => {
  return (
    <>
    <Provider store={store}>
    <Navbar/>
    <RouteFile/>
    </Provider>
    </>
  )
}

export default App