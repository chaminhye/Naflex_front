import { FETCH_ACTION_MOVIES } from '../actions/index';

/**
 *      - 리듀서는 액션메서드에서 변경한 상태를 받아 기존의 상태를 새로운 상태로 변경하는 일을 한다.
 *      - reducer폴더와 action폴더가 하나로 구성 가능(ducks 기법사용)하지만, 분리하는 이유는 도메일별 구분하기 위함
 *      - reducer는 store를 새로 변경하는데, 입력받는 state와 반환하는 state가 항상 같은 순수함수로 구현.
 *        그렇기 때문에 Redux로 이전의 state를 추적해 시간여행을 하는 도구 만들수 있음.
 */
export default function reducerActionMovies(state = [], action) {
  switch (action.type) {
      case FETCH_ACTION_MOVIES:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}