import { takeLatest, call, put } from 'redux-saga/effects'

import CatalogActionTypes from './catalog.types'
import { fetchCatalogSuccess, fetchCatalogFailure } from './catalog.actions'

export function * fetchCatalogAsync () {
  try {
    const response = yield call(
      fetch,
      'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'
    )
    if (!response.ok) {
      throw Error(`${response.status} - ${response.statusText}`)
    }
    const catalog = yield response.json()
    yield put(fetchCatalogSuccess(catalog))
  } catch (error) {
    yield put(fetchCatalogFailure(error))
  }
}

export function * onFetchCatalogStart () {
  yield takeLatest(CatalogActionTypes.FETCH_CATALOG_START, fetchCatalogAsync)
}

export function * catalogSagas () {
  yield call(onFetchCatalogStart)
}
