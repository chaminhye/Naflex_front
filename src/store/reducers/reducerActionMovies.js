import { FETCH_ACTION_MOVIES } from '../actions/index';

/**
 *      reducer는 store를 새로 변경하는데, 입력받는 state와 반환하는 state가 항상 같은 순수함수로 구현.
 *      그렇기 때문에 Redux로 이전의 state를 추적해 시간여행을 하는 도구 만들수 있음.
 */
export default function (state = [], action) {
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