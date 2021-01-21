import { FETCH_ALL_TRENDING } from '../actions/index';

export default function reducerTrending(state = [], action) {
  switch (action.type) {
      case FETCH_ALL_TRENDING:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}