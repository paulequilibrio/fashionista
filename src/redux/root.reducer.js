import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import catalogReducer from './catalog/catalog.reducer'
import drawerReducer from './drawer/drawer.reducer'
import bagReducer from './bag/bag.reducer'

const persistConfig = {
  key: 'fashionista',
  storage,
  whitelist: ['bag']
}

const rootReducer = combineReducers({
  catalog: catalogReducer,
  drawer: drawerReducer,
  bag: bagReducer
})

export default persistReducer(persistConfig, rootReducer)
