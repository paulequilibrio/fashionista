import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import catalogReducer from './catalog/catalog.reducer'

const persistConfig = {
  key: 'fashionista',
  storage,
  whitelist: ['bag']
}

const rootReducer = combineReducers({
  catalog: catalogReducer
})

export default persistReducer(persistConfig, rootReducer)
