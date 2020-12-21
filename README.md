# 리덕스 Redux

[React](https://facebook.github.io/react/)는 Facebook에서 만든 JavaScript 라이브러리입니다. React만 사용해도 애플리케이션을 개발할 수 있지만 애플리케이션의 규모가 커지고 구조가 조금이라도 복잡해지면 컴포넌트의 상태(state)를 관리하는 일이 귀찮은 일이 됩니다. 그래서 많은 프로젝트에서 [Redux](http://redux.js.org/)를 함께 사용해 상태를 단순하게 처리합니다.



create-react-app 설치

```
npm install -g create-react-app
```



### 📂폴더 구조

* src

  * action (액션명령어와 액션메서드)
  * component (컨테이너 컴포넌트와 프레젠테이션 컴포넌트)
  * reducer ( 액션 메서드에서 변경한 상태를 받아 기존의 상태를 새로운 상태로 변경)
  * store (주로 미들웨어 설정)

  

### 💡 state와 prop의 구분

**state는 독립적인 컴포넌트의 상태**고, **prop은 외부(부모) 컴포넌트에게 받은 속성**

Redux 프로젝트에서 prop는 애플리케이션에서 전역으로 관리하는 상태라고 생각하면 된다.



### 💡connect() 메서드

prop은 state와 다르게 컨테이너 컴포넌트에서 연결해 사용한다. 

그래서 **컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 state와 dispatch() 메서드를 전달**해야 한다.



첫 번째 파라미터는 현재 state를 받는 함수고, 두 번째 파라미터는 dispatch() 메서드를 파라미터로 받는 함수다



### 💡 Redux Hook

React 에서 Redux 를 사용하려면, createStore 로 store 를 생성해야 한다.

**Redux Hook 중 가장 중요한 Hook 은 useDispatch 와 useSelector 이다.**

**✔useDispatch** 은 Context 에 포함된 dispatch 를 가져올 수 있다. 이 dispatch 를 이용해 action 을 발생시킨다.

**✔useSelector** 은 selector function 을 전달하여, Context 에 포함된 state 를 가져올 수 있다.



더 자세한 설명 -> <a href="https://www.evernote.com/l/AiA2amhhlZ5EjJdX03fDC7uh5spXExfT5iI/">링크참조</a>



### 💡작동 과정

Redux를 사용할 때 브라우저의 이벤트를 받아 뷰를 바꾸는 과정은 다음과 같다.

1. 브라우저에서 이벤트가 발생한다.컴포넌트에서 이벤트가 발생한다([샘플 코드](https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js#L33)).
2. 액션 메서드가 호출된다([샘플 코드](https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js#L35)).
3. 스토어의 dispatch() 메서드가 호출된다([샘플 코드](https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js#L35)).
4. 스토어에서 리듀서를 호출한다. 샘플 코드에서는 [todos 리듀서](https://github.com/naver/react-sample-code/tree/master/src/reducer/todos.js#L29-L40)를 호출한다.
5. subscribe() 메서드로 등록한 리스너를 호출한다. 샘플 코드에서는 [render() 메서드](https://github.com/naver/react-sample-code/tree/master/src/index.js#L26)를 호출해 뷰를 갱신한다.

![](/redux 작동과정.png)

더 자세한 설명 -> <a href="https://www.evernote.com/l/AiD9pQt8cYRJYbuRsIV7BUqXQd8a0i0GrAM/">링크참조</a>