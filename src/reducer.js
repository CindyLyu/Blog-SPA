import { INIT_PAGE, CHANGE_PAGE } from './actionTypes';

let state = {
  page: window.localStorage.getItem('store') || 'home'
}

export const reducer = (globalState = state, action) => {
  switch (action.type) {
    case INIT_PAGE:
      return { 
        page: action.page 
      }
    case CHANGE_PAGE:
      window.localStorage.setItem('store', action.page)
      return {
        page: action.page
      }
    default:
      return globalState
  }
}
