/** 액션타입 정의 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 액션 생성함수 정의 */
let nextId = 1;

// todo 데이터에서 사용할 고유 id
export const addTodo = text => ({
    type : ADD_TODO,
    todo : {
        id : nextId++,
        text
    }
});
export const toggleTodo = id => ({
    type : TOGGLE_TODO,
    id
});

/** 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = [

];

export default function todos(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return{
                state : state.concat(action.todo)
            };
        case TOGGLE_TODO:
            return state.map (
                todo => 
                todo.id === action.id ? {...todo, done: !todo.don} : todo
            );
        default:
            return state;
    }
}