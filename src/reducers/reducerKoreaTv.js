import { FETCH_TV_KOREA } from '../actions/index';

export default function reducerKoreaTv(state = [], action) {
  switch (action.type) {
      case FETCH_TV_KOREA:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}