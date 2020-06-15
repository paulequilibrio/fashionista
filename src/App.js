import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Topbar from './components/Topbar/Topbar'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import ProductPage from './pages/ProductPage/ProductPage'

import { fetchCatalogStart } from './redux/catalog/catalog.actions'
import './styles/App.css'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCatalogStart())
  }, [dispatch])

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
