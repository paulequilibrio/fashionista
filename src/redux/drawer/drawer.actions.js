import DrawerActionTypes from './drawer.types'

export const openSearchDrawer = () => ({
  type: DrawerActionTypes.OPEN_SEARCH_DRAWER
})

export const openBagDrawer = () => ({
  type: DrawerActionTypes.OPEN_BAG_DRAWER
})

export const closeDrawer = () => ({
  type: DrawerActionTypes.CLOSE_DRAWER
})
