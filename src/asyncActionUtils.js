// 이 함수는 파라미터로 액션의 타입 (예: GET_USER) 과 Promise 를 만들어주는 함수를 받아옵니다.

export function createAsyncDispatcher(type, promiseFn) {
    // 성공, 실패에 대한 액션타입
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    // 새로운 함수 생성
    // ...rest를 사용하여 나머지 파라미터를 rest배열에 담는다.
    async function actionHandler(dispatch, ...rest) {
        dispatch({type});   // 요청 시작
        try{
            const data = await promiseFn(...rest);  // 배열을 spread로 넣어줌
            dispatch({
                type : SUCCESS, 
                data
            });
        }catch(e){
            dispatch({
                type : ERROR,
                error : e
            });
        }
    }
    return actionHandler;   //만든 함수 반환
}

// 기본 상태
export const initialAsyncState = {
    loading: false,
    data: null,
    error: null
  };
  
// 로딩중일 때 바뀔 상태 객체
const loadingState = {
    loading: true,
    data: null,
    error: null
};
  
// 성공했을 때의 상태 만들어주는 함수
const success = data => ({
    loading: false,
    data,
    error: null
});
  
// 실패했을 때의 상태 만들어주는 함수
const error = error => ({
    loading: false,
    data: null,
    error: error
});
  
// 위의 세가지 액션을 처리하는 리듀서 생성
// type은 액션타입, key는 리듀서에서 사용할 필드 이름 (users, user)
export function createAsyncHandler(type, key) {
    // 성공, 실패에 대한 액션타입
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    function handler(state, action) {
        switch (action.type) {
          case type:
            return {
              ...state,
              [key]: loadingState
            };
          case SUCCESS:
            return {
              ...state,
              [key]: success(action.data)
            };
          case ERROR:
            return {
              ...state,
              [key]: error(action.error)
            };
          default:
            return state;
        }
      }
    // 반환
    return handler;
}