import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import catalogReducer from './catalog/catalog.reducer'
import drawerReducer from './drawer/drawer.reducer'
import bagReducer from './bag/bag.reducer'
import searchReducer from './search/search.reducer'

const persistConfig = {
  key: 'fashionista',
  storage,
  blacklist: ['catalog']
}

const rootReducer = combineReducers({
  catalog: catalogReducer,
  drawer: drawerReducer,
  bag: bagReducer,
  search: searchReducer
})

export default persistReducer(persistConfig, rootReducer)
