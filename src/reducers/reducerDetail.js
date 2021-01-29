import {  GET_DETAIL_INFO } from '../actions/index';

export default function reducerDetail(state = [], action) {
  switch (action.type) {
      case GET_DETAIL_INFO:
          return {
            ...state,
            info: action.data,
          }
      default:
          return state;
  }
}