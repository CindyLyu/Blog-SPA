import { INIT_PAGE, CHANGE_PAGE } from './actionTypes';

// action creators
export const initPage = (page) => {
  return { type: INIT_PAGE, page }
}

export const changePage = (page) => {
  return { type: CHANGE_PAGE, page }
}
