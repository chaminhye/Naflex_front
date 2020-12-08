# React

Front-end는 사실 javascript, jquery를 사용해본게 끝...

웹페이지 뿌리고 버튼기능 넣고,, ajax 이정도 써본게 다였다.

여러가지 front library가 있지만, 요즘 핫한(?) react를 선택했다.

 js에 대한 이해도도 높이며, 겸사겸사 react를 공부해보려 한다😊😊😊



* ## React란?

  웹/앱(RN)을 위한 라이브러리

  #### 

  #### 🌈Virtual DOM
  
  Virtual DOM 은 가상의 DOM 입니다. 변화가 일어나면, 실제로 브라우저의 DOM 에 새로운걸 넣는것이 아니라, 자바스크립트로 이뤄진 가상 DOM 에 한번 렌더링을 하고, 기존의 DOM 과 비교를 한 다음에 정말 변화가 필요한 곳에만 업데이트를 해주는 것이죠.
  
  이 Virtual DOM 을 사용함으로서, 데이터가 바뀌었을 때 더 이상 어떻게 업데이트 할 지를 고려하는게 아니라, 그냥 일단 바뀐 데이터로 일단 그려놓고 비교를 한다음에, 바뀐 부분만 찾아서 바꿔주는거죠.

​       * React에 대한 자세한 설명은 -> <a href="https://velopert.com/3612">링크1</a>,      <a href="https://medium.com/react-native-seoul/react-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EC%B2%98%EC%9D%8C%EB%B6%80%ED%84%B0-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90-01-react-js%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-ad8ba252ee28">링크2</a>

####      

####      ✔️ 구조

​       📂**my-app**

​			- **node_modules** : 프로젝트와 관련된 라이브러리가 설치되는 폴더

 		   - **public** : index.html가 존재하는 폴더 , http://localhost:3000/ 로 어플리케이션이 작동되는 메인페이지

    		  - **src**  : react 앱 전체(global)에 적용되는 자바스크립트 파일과 css 파일

​                    - **index.js** : 작성된 컴포넌트들을 모두 불러와서 결합시켜서 화면출력        

```js
ReactDOM.render(<App />, document.getElementById('root'));     //App 이 컴포넌트, docu~ 가 부착위치입니다. id값을 가져왔습니다.

// 최근엔 Render 내부에 <React.StrictMode> 라는 컴포넌트로 감싸서 출력합니다.
//이 컴포넌트는 문제가 발생하면, 발생된 에러메세지를 바로 출력하는 모드입니다.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

​                    - **App.js** : root 컴포넌트, 모든 컴포넌트들을 결합시키는 부분(import, export 활용) ,  jsx 확장자 파일로 리턴

​                                    

####        ✔️ JSX  

​             자바스크립트를 확장한 문법  ->    <a href="https://velog.io/@jkzombie/React-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0JSX">자세한 문법 알아보기</a>

​          

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
    // ㅇ따라서 코드에 constructor가 있는 한 반드시 super()를 불러야 해요. (하지만 subclass는 constructor를 가지지 않아도 상관 없습니다.)
    constructor(props){					
        super(props);			// super() 호출하지 않으면, this가 초기화 되지 않음.
								// super() vs super(props) 
                                // this.props에 접근하려면 super(props) 사용
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

​         

