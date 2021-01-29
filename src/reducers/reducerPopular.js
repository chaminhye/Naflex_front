import { FETCH_TV_POPULAR } from '../actions/index';

export default function reducerPopular(state = [], action) {
  switch (action.type) {
      case FETCH_TV_POPULAR:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}