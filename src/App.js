import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Topbar from './components/Topbar/Topbar'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import ProductPage from './pages/ProductPage/ProductPage'

import './styles/App.css'

function App () {
  return (
    <div className='app'>
      <Topbar />
      <Switch>
        <Route exact path='/' component={CatalogPage} />
        <Route path='/product/:productName' component={ProductPage} />
      </Switch>
    </div>
  )
}

export default App
