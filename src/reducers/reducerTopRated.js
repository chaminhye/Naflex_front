import { FETCH_TOP_RATED } from '../actions/index';

export default function reducerTopRated(state = [], action) {
  switch (action.type) {
      case FETCH_TOP_RATED:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}