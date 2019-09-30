import { INIT_PAGE, CHANGE_PAGE } from './actionTypes';

// action creators
export const initPage = page => ({ type: INIT_PAGE, page });

export const changePage = page => ({ type: CHANGE_PAGE, page });
