import { FETCH_HORROR_MOVIES } from '../actions/index';

export default function reducerHorrorMovies(state = [], action) {
  switch (action.type) {
      case FETCH_HORROR_MOVIES:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}