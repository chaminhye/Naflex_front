import { FETCH_TV_AIRING } from '../actions/index';

export default function reducerTvAiring(state = [], action) {
  switch (action.type) {
      case FETCH_TV_AIRING:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}