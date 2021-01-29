import { GET_HISTORY_LIST } from '../actions/index';

export default function reducerMyHistoryList(state = [], action) {
  switch (action.type) {
      case GET_HISTORY_LIST:
          return {
            ...state,
            myData: action.data,
          }
      default:
          return state;
  }
}