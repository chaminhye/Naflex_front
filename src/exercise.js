import {createStore}from 'redux';       //createStore는 redux를 만들어주는 함수, 리액트에서는 단하나의 스토어를 생성

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
    counter: 0,
    text: '',
    list: []
};

/* 액션타입 정의 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* 액션 생성함수 정의 */
function increase(){
    return {
        type : 'INCREASE'
    };
}

const decrease = () => ({
    type : 'DECREASE'
});

const changeText = text => ({
    type : 'CHANGE_TEXT',
    text
});

const addToList = item => ({
    type : 'ADD_TO_LIST',
    item
});

/** 리듀서 생성 */
// 불변성을 지켜야한다.
function reducer(state=initialState, action){
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                counter : state.counter+1
            };
        case DECREASE:
            return {
                ...state,
                counter : state.counter-1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text : action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list : state.list.concat(action.item)
            };
        default:
            return state;
    }
}

/** 스토어 만들기 */
const store = createStore(reducer);

console.log(store.getState());      //현재 스토어안에 있는 상태를 조회

// 스토어안에 들어있는 상태가 바뀔때마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state)
};

const unsubcribe = store.subscribe(listener);       // 구독해제를 원할떄는 unsubscribe() 호출

// 액션을 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕'));
store.dispatch(addToList({id:1, text : '클스마스'}));

