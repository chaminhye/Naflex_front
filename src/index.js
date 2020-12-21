import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './static/sass/style.scss';
import { composeWithDevTools } from 'redux-devtools-extension';
// import createLogger from 'redux-logger';  
/*
*     index.js파일, 주로 미들웨어를 설정
*          ex) 1. redux-thunk 라이브러리를 설정하거나-> applyMiddleware(thunk) 
               2. state의 변경 내역을 관리하기 위해 react-router-redux 라이브러리를 추가하거나, 
               3. 디버깅을 위해 react-devtool을 설정하는 일을 주로 한다.  -> window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
*     
* */ 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   const logger = createLogger();     
// redux-logger 라이브러리도 설정가능 하지만, 개발자 도구를 더 많이 사용한다.

/** 
 *     createStore() 메서드는 리듀서를 파라미터로 받으며 스토어를 생성
 *        - 해당 스토어를 변경하거나 변경 감지를 위해서는 subscribe()메서드와 dispatch()메서드 등을 가진 객체 반환 
 * */ 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,     // 스토어는 Provider 객체를 사용해 하위 컴포넌트에 스토어를 전달한다
    document.getElementById('root')
);

serviceWorker.unregister();

