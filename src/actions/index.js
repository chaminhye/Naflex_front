import axios from 'axios';
import {MOVIE_API_KEY, MOVIE_API_BASE_URL, MOVIE_API_BASE_PARAM, BASE_URL,movie_detail_id, tv_detail_id, home_detail_id} from '../constants/index'
/**
 *     src/action 폴더는 애플리케이션에서 사용하는 명령어와 api 통신과 같은 작업을 하는 액션메서드를 모아둔 폴더이다
 *      - 액션 메서드에서는 리듀서(reducer)로 데이터 생성을 요청한다. 
 *      - 비즈니스 로직을 주로 액션 메서드에 개발하기 때문에 액션 메서드는 컴포넌트의 재활용을 높이고 코드를 관리하는 데 중요한 역할을 한다.
 *      - 비동기 통신이 필요할 때는 redux-thunk 라이브러리나 react-saga 라이브러리를 사용한다.  
 */ 


// action type 명령어
export const FETCH_ALL_TRENDING = 'FETCH_ALL_TRENDING';

// Tv show
export const FETCH_TV_AIRING = 'FETCH_TV_AIRING';
export const FETCH_TV_POPULAR = 'FETCH_TV_POPULAR';
export const FETCH_TV_KOREA = 'FETCH_TV_KOREA';

// Movie
export const FETCH_MOVIE_SCREEN = 'FETCH_MOVIE_SCREEN';
export const FETCH_MOVIE_TOP_RATED = 'FETCH_MOVIE_TOP_RATED';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES';

// Detail
export const GET_DETAIL_INFO = 'GET_DETAIL_INFO';

export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES';
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES';
export const FETCH_MOVIE_KOREA = 'FETCH_MOVIE_KOREA';

/* action creators 메서드*/
export const fetchTrendData = (data) => {
  return {
      type: FETCH_ALL_TRENDING,
      data
  }
}

// dispatch() 메서드를 파라미터로 받는 함수를 만들고, 
// 응답이 온 후 dispatch()메서드를 호출하면 정상적으로 비동기 통신을 적용할 수 있다.
export const fetchTrending = () => {
  // console.log('fetchTrending')

  return (dispatch) => {
      return axios.get(`${MOVIE_API_BASE_URL}/trending/all/day?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}`)
          .then(response => {
              dispatch(fetchTrendData(response.data))
          })
          .catch(error => {
              throw(error);
          });
  }
}

export const fetchTvAiringData = (data) => {
  return {
      type: FETCH_TV_AIRING,
      data
  }
}

export function fetchTvAiring() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/tv/on_the_air?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}`)
      .then(response => {
        dispatch(fetchTvAiringData(response.data))
      })
      .catch(error => {
          throw(error);
      })
  }
}
export const fetchMovieScreenData = (data) => {
  return {
      type: FETCH_MOVIE_SCREEN,
      data
  }
}

export function fetchMovieScreen() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/movie/now_playing?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}`)
      .then(response => {
        dispatch(fetchMovieScreenData(response.data))
      })
      .catch(error => {
          throw(error);
      })
  }
}

export const fetchMovieTopData = (data) => {
  return {
      type: FETCH_MOVIE_TOP_RATED,
      data
  }
}

export function fetchMovieTopRated() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/movie/top_rated?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}`)
      .then(response => {
        dispatch(fetchMovieTopData(response.data))
      })
      .catch(error => {
          throw(error);
      })
  }
}
export const fetchTvPopularData = (data) => {
  return {
      type: FETCH_TV_POPULAR,
      data
  }
}

export function fetchTvPopular() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/tv/popular?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}`)
      .then(response => {
        dispatch(fetchTvPopularData(response.data))
      })
      .catch(error => {
          throw(error);
      })
  }
}

export const fetchActionData = (data) => {
  return {
      type: FETCH_ACTION_MOVIES,
      data
  }
}

export const fetchActionMovies = () => {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=28${MOVIE_API_BASE_PARAM}`)
      .then(response => {
        dispatch(fetchActionData(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const fetchComedyData = (data) => {
  return {
      type: FETCH_COMEDY_MOVIES,
      data
  }
}

export function fetchComedyMovies() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}&with_genres=35`)
      .then(response => {
        dispatch(fetchComedyData(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const fetchHorrorData = (data) => {
  return {
      type: FETCH_HORROR_MOVIES,
      data
  }
}

export function fetchHorrorMovies() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}&with_genres=27`)
      .then(response => {
        dispatch(fetchHorrorData(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const fetchRomanceData = (data) => {
  return {
      type: FETCH_ROMANCE_MOVIES,
      data
  }
}

export function fetchRomanceMovies() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}&with_genres=10749`)
      .then(response => {
        dispatch(fetchRomanceData(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const fetchDocumentData = (data) => {
  return {
      type: FETCH_DOCUMENTARIES,
      data
  }
}

export function fetchDocumentaries() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}&with_genres=99`)
      .then(response => {
        dispatch(fetchDocumentData(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}
export const fetchTvKoreaData = (data) => {
  return {
      type: FETCH_TV_KOREA,
      data
  }
}

export function fetchTvKorea() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/discover/tv?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}&sort_by=popularity.desc&page=1&with_original_language=ko&region=ko`)
      .then(response => {
        dispatch(fetchTvKoreaData(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}
export const fetchTvMoiveData = (data) => {
  return {
      type: FETCH_TV_KOREA,
      data
  }
}

export function fetchTvMoive() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}&sort_by=popularity.desc&with_original_language=ko`)
      .then(response => {
        dispatch(fetchTvMoiveData(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const getDetailInfoData = (data) =>{
  return{
    type :GET_DETAIL_INFO,
    data
  }
}

export function getDetailInfo(type, id) {
  let url = `${MOVIE_API_BASE_URL}`;
  switch (id) {
    case "tv":
      url += `/${type}/${tv_detail_id}`;
      break;
    case "movie":
      url += `/${type}/${movie_detail_id}`;
      break;
    default:
      url += `/tv/${tv_detail_id}`;
      break;
  }
  url += `?api_key=${MOVIE_API_KEY}${MOVIE_API_BASE_PARAM}`;
  // console.log('getDetailInfo ::',url);
  
  return (dispatch) =>{
    return axios.get(url)
    .then(response => {
      dispatch(getDetailInfoData(response.data))
    })
    .catch(error => {
      throw(error);
    })
  }
}

// back-end action
// action type 명령어
export const GET_HISTORY_LIST = 'GET_HISTORY_LIST';

// action creators 메서드
export const getHistoryListData = (data) =>{
    return {
        type : GET_HISTORY_LIST,
        data
    }
}

export const getHistoryList = (params) => {
  const headers ={
        'Content-Type': 'application/json',
    };

  return (dispatch) => {
      return axios.post(`${BASE_URL}/history/getHistoryList`,params, headers)
      .then(response =>{
        // console.log('res :: ',response);
          dispatch(getHistoryListData(response.data))
      })
      .catch(error =>{
          throw(error);
      })
  }
}