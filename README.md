# NaFlex💸

## (부제 : NetFlix-clone project)

넷플릭스 클론 코딩 프로젝트 



🎈 **해당 프로젝트는 NaFlex (Spring boot) back-end와 함께 작업될 front-end 프로젝트!**



#### ⚒ Tools used

* react-redux

* Axios

* Sass

* react-player (유튜브 플레이어 이용)
  
  

#### 📂Project structure

* **src**

  * **actions**  : action type 정의 및 action method를 모아둔 폴더
  * **reducers** : 리듀서들로 구성된 폴더(combineReducers를 이용하여 루트리듀서 생성)
    * **components** : 리액트 컴포넌트로 구성된 폴더(presentational, container)
    * **containers** :  data를 가져오는 액션을 디스패치, 각 컴포넌트에 해당 영화 정보를 props를 통해 전달
    * **static** : 이미지 및 scss파일
    * **util** : axios service (back단으로 넘기는 서비스 구현 및 api 구현)
    * **constants** : 공통으로 쓰는 key , url 및 정보
    * **pages** : 각 페이지를 생성하는 컨테이너 page

  

#### ✔ Technology to apply ( ~예정)

* 로그인(다중 이용자) 
  * 회원가입(이메일을 key 값으로 사용)
  * 프로필 페이지(사용자 리스트) : 사용자별 로그인
* 장르별 플레이어 리스트 표시
* 플레이어 - 유튜브 예고편으로 대체
* 결제기능



※ 참조 블로그

front layout -> https://github.com/smooth97/Netflix_Clone