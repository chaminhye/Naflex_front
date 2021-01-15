import { FETCH_MOVIE_TOP_RATED,FETCH_TV_TOP_RATED } from '../actions/index';

export default function reducerTopRated(state = [], action) {
  switch (action.type) {
      case FETCH_MOVIE_TOP_RATED:
          return {
            ...state,
            movies: action.data,
          }
      case FETCH_TV_TOP_RATED:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}