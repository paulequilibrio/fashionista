import DrawerActionTypes from './drawer.types'

const INITIAL_STATE = {
  isVisible: false,
  isSearchOpen: false,
  isBagOpen: false
}

const drawerReducer = (state = INITIAL_STATE, action) => {
  const { type } = action
  switch (type) {
    case DrawerActionTypes.OPEN_SEARCH_DRAWER:
      return {
        ...state,
        isVisible: true,
        isSearchOpen: true,
        isBagOpen: false
      }
    case DrawerActionTypes.OPEN_BAG_DRAWER:
      return {
        ...state,
        isVisible: true,
        isSearchOpen: false,
        isBagOpen: true
      }
    case DrawerActionTypes.CLOSE_DRAWER:
      return {
        ...state,
        isVisible: false,
        isSearchOpen: false,
        isBagOpen: false
      }
    default:
      return state
  }
}

export default drawerReducer
