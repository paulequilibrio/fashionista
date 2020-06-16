import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Topbar from './components/Topbar/Topbar'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import ProductPage from './pages/ProductPage/ProductPage'
import Drawer from './components/Drawer/Drawer'

import { fetchCatalogStart } from './redux/catalog/catalog.actions'

function App () {
  const dispatch = useDispatch()
  const drawerIsVisible = useSelector(state => state.drawer.isVisible)

  useEffect(() => {
    dispatch(fetchCatalogStart())
  }, [dispatch])

  return (
    <div className={`app ${drawerIsVisible ? 'app--is-drawer-visible' : ''}`}>
      <Topbar />
      <Switch>
        <Route exact path='/' component={CatalogPage} />
        <Route path='/product/:slug' component={ProductPage} />
      </Switch>
      <Drawer />
    </div>
  )
}

export default App
