# React

Front-end는 사실 javascript, jquery를 사용해본게 끝...

웹페이지 뿌리고 버튼기능 넣고,, ajax 이정도 써본게 다였다.

여러가지 front library가 있지만, 요즘 핫한(?) react를 선택했다.

 js에 대한 이해도도 높이며, 겸사겸사 react를 공부해보려 한다😊😊😊



* ## React란?

  웹/앱(RN)을 위한 라이브러리

  

  #### 🌈Virtual DOM
  
  Virtual DOM 은 가상의 DOM 입니다. 변화가 일어나면, 실제로 브라우저의 DOM 에 새로운걸 넣는것이 아니라, 자바스크립트로 이뤄진 가상 DOM 에 한번 렌더링을 하고, 기존의 DOM 과 비교를 한 다음에 정말 변화가 필요한 곳에만 업데이트를 해주는 것이죠.
  
  이 Virtual DOM 을 사용함으로서, 데이터가 바뀌었을 때 더 이상 어떻게 업데이트 할 지를 고려하는게 아니라, 그냥 일단 바뀐 데이터로 일단 그려놓고 비교를 한다음에, 바뀐 부분만 찾아서 바꿔주는거죠.

​       * React에 대한 자세한 설명은 -> <a href="https://velopert.com/3612">링크1📃</a>,    <a href="https://medium.com/react-native-seoul/react-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EC%B2%98%EC%9D%8C%EB%B6%80%ED%84%B0-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90-01-react-js%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-ad8ba252ee28">링크2📃</a> 

​     

​       💡 **Axios**   : promise기반의 async/awiat 문법을 사용하여 xhr요청에 매우 쉽게 할 수 있어 http통신하는 라이브러리

​       💡 **async & await**         

​           비동기 처리 방식인 콜백함수와 promise의 단점을 보완

```js
// async & await 적용 전
function logName() {
  // 아래의 user 변수는 위의 코드와 비교하기 위해 일부러 남겨놓았습니다.
  var user = fetchUser('domain.com/users/1', function(user) {
    if (user.id === 1) {
      console.log(user.name);
    }
  });
}
// async & await 적용 후
async function logName() {
  var user = await fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
```

* 먼저 함수의 앞에 `async` 라는 예약어를 붙입니다. 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 `await`를 붙입니다. 여기서 주의하셔야 할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 `await`가 의도한 대로 동작합니다.

   * async & await에 대한 자세한 설명은 -> [링크📃](https://joshua1988.github.io/web-development/javascript/js-async-await/)

     

####      ✔️ 구조

​       📂**my-app**

​			- **node_modules** : 프로젝트와 관련된 라이브러리가 설치되는 폴더

​            - public : index.html가 존재하는 폴더 , http://localhost:3000/ 로 어플리케이션이 작동되는 메인페이지

​            - src  : react 앱 전체(global)에 적용되는 자바스크립트 파일과 css 파일

​                        |_ App.js : root 컴포넌트, 모든 컴포넌트들을 결합시키는 부분(import, export 활용) ,  jsx 확장자 파일로 리턴                    

​                        |_ index.js : 작성된 컴포넌트들을 모두 불러와서 결합시켜서 화면출력        

​                                    

####        ✔️ JSX  

​             자바스크립트를 확장한 문법  ->    <a href="https://velog.io/@jkzombie/React-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0JSX">자세한 문법 알아보기📃</a>

​      ex) 

```js
// 함수형 컴포넌트 기본 구조 (하나의 함수만 사용하는 경우 단순하게 구성)
import React from 'react';

const UserComponent = (props) => {
    return(
        <div className="container">
			컴포넌트 내용부분
        </div>
    );
}

// 클래스형 컴포넌트 기본 구조 ( 하나 이상 복잡하고 정교한 형태의 컴포넌트를 구성하기에 적합)
import React, { Component } from 'react';

class UserComponent extends Component{
    render(){
        return(
            <div className="container">
            	컴포넌트 내용 부분
            </div>
        );
    }
}
```



#### ✔️  React ES6

   간단한 ES6 문법 정리

```jsx
class AddUserComponent extends Component{
    // ES6 class constructor는 subclasses가 있다면 무조건 super()를 불러야 합니다.
    // 따라서 코드에 constructor가 있는 한 반드시 super()를 불러야 해요. (하지만 subclass는 constructor를 가지지 않아도 상관 없습니다.)
    constructor(props){					
        super(props);			/* super() 호출하지 않으면, this가 초기화 되지 않음.
								* super() vs super(props) 
                                * this.props에 접근하려면 super(props) 사용 */
        this.state = {
            username : '',
            password : '',
            firstName : '',
            lastName : '',
            age : '',
            salary : '',
            message : null
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    .....
    .....
}   
```



------



#### 🌈 Hoc(Higher-order-Component)

​      소프트웨어   개발 원리 중  DRY (Don't repeat yourself) - 같은 작업을 반복하지 마라.

​      **리액트 컴포넌트를 작성할 때, 반복되는 코드들을 HOC을 만들어 해결한다.**

​      HOC, 하나의 함수로써 컴포넌트에 특정 기능을 만들어서 사용한다.



#####       💡 HOC 의 원리

​     파라미터로 컴포넌트를 받아오고, 함수 내부에서 새 컴포넌트를 만든 다음에 해당 컴포넌트 안에서 파라미터로 받아온 컴포넌트를 렌더링하는 것입니다. 

​     그리고, 자신이 받아온 props 들은 그대로 파라미터로 받아온 컴포넌트에게 다시 주입해주고, 필요에 따라 추가 props 도 넣어줍니다 

​      (예를들어 우리의 경우엔 웹요청 결과물이 되겠죠)

​      - Hoc은 with__ 형식으로 명명한다.

​      * 자세한 내용 참고 -> <a href="https://velopert.com/3537">링크📃</a>

------



#### 🌈 Hook

​        💡 **Side Effect란?**

​           :  React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 흔히 Side Effect라고 일컽습니다.

​              ex )  어떤 데이터를 가져오기 위해서 외부 API를 호출하는 경우, 

​                      일단 화면에 렌더링할 수 있는 것은 먼저 렌더링하고 실제 데이터는 비동기로 가져오는 것이 권장 



​        💡 **Side Effect class 를 이용하는 방법**  

​             생명주기 메서드 순서 주의 필요

|                   | componentDidMount                             | componentDidUpdat                             | componentWillUnmount                               |
| ----------------- | --------------------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| 용도              | 컴포넌트가 마운트된 단계                      | 컴포넌트가 업데이트 된 상태                   | 메모리 누수가 발생하지 않도록 <br />clean-up  필요 |
| clean-up 사용여부 | X<br />네트워크 리퀘스트, DOM 수동 조작, 로깅 | X<br />네트워크 리퀘스트, DOM 수동 조작, 로깅 | O<br />구독설정                                    |

​     

​        💡 **hook을 이용하는 방법**

​           hook을 이용하게 되면, 생명주기 메서드에 따라서가 아닌 코드가 무엇을 하는지에 따라 나눌수 있다는 장점.

​             `useEffect`  ->  hook을 이용하여 컴포넌트가 렌더링 이후에 실행, 랜더링 이후 매번 수행됨.

​                                  ->  clean-up 필요한 경우 함수 반환

​           

​         💡  **Tip.  hook 사용법**

​           ⭐hook은 최상위레벨에서만 호출O

​           반복문, 조건문혹은 중첩된 함수내에서 호출 X

​           오직 react함수내에서만 호출O

​            Javascript안에서 호출X

​           ⭐사용자정의  Hook의 이름은 무조건 'use~'로 시작



​        * Hook에 대한 자세한 내용 참고 -> <a href="https://ko.reactjs.org/docs/hooks-effect.html">링크</a>📃

​        * Side Effect에 대한 자세한 내용 참고 -> <a href="https://www.daleseo.com/react-hooks-use-effect/">링크📃</a>

------



#### 🌈 Redux 

​          💡  React - Redux

​                자세한 내용 링크 - ><a href="https://d2.naver.com/helloworld/1848131">react - redux 적용 가이드📃</a>

