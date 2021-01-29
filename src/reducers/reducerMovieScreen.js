import { FETCH_MOVIE_SCREEN } from '../actions/index';

export default function reducerMovieScreen(state = [], action) {
  switch (action.type) {
      case FETCH_MOVIE_SCREEN:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}