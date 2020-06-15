import CatalogActionTypes from './catalog.types'

export const fetchCatalogStart = () => ({
  type: CatalogActionTypes.FETCH_CATALOG_START
})

export const fetchCatalogSuccess = catalog => ({
  type: CatalogActionTypes.FETCH_CATALOG_SUCCESS,
  payload: catalog
})

export const fetchCatalogFailure = error => ({
  type: CatalogActionTypes.FETCH_CATALOG_FAILURE,
  payload: error
})
