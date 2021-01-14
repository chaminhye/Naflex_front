import axios from 'axios';
import {MOVIE_API_KEY, MOVIE_API_BASE_URL} from '../constants/index'
/**
 *     src/action 폴더는 애플리케이션에서 사용하는 명령어와 api 통신과 같은 작업을 하는 액션메서드를 모아둔 폴더이다
 *      - 액션 메서드에서는 리듀서(reducer)로 데이터 생성을 요청한다. 
 *      - 비즈니스 로직을 주로 액션 메서드에 개발하기 때문에 액션 메서드는 컴포넌트의 재활용을 높이고 코드를 관리하는 데 중요한 역할을 한다.
 *      - 비동기 통신이 필요할 때는 redux-thunk 라이브러리나 react-saga 라이브러리를 사용한다.  
 */ 


// action type 명령어
export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_NETFLIX_ORIGINALS = 'FETCH_NETFLIX_ORIGINALS';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES';
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES';
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES';


/* action creators 메서드*/
export const fetchTrendData = (data) => {
  return {
      type: FETCH_TRENDING,
      data
  }
}


// dispatch() 메서드를 파라미터로 받는 함수를 만들고, 
// 응답이 온 후 dispatch()메서드를 호출하면 정상적으로 비동기 통신을 적용할 수 있다.
export const fetchTrending = () => {
  return (dispatch) => {
      return axios.get(`${MOVIE_API_BASE_URL}/trending/all/week?api_key=${MOVIE_API_KEY}&language=ko`)
          .then(response => {
              dispatch(fetchTrendData(response.data))
          })
          .catch(error => {
              throw(error);
          });
  }
}

export const fetchNetflixData = (data) => {
  return {
      type: FETCH_NETFLIX_ORIGINALS,
      data
  }
}

export function fetchNetflixOriginals() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/discover/tv?api_key=${MOVIE_API_KEY}&with_networks=213&language=ko`)
      .then(response => {
        dispatch(fetchNetflixData(response.data))
      })
      .catch(error => {
          throw(error);
      })
  }
}

export const fetchTopData = (data) => {
  return {
      type: FETCH_TOP_RATED,
      data
  }
}

export function fetchTopRated() {
  return (dispatch) => {
    return axios.get(`${MOVIE_API_BASE_URL}/movie/top_rated?api_key=${MOVIE_API_KEY}&language=ko`)
      .then(response => {
        dispatch(fetchTopData(response.data))
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
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=28&language=ko`)
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
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=35&language=ko`)
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
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=27&language=ko`)
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
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=10749&language=ko`)
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
    return axios.get(`${MOVIE_API_BASE_URL}/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=99&language=ko`)
      .then(response => {
        dispatch(fetchDocumentData(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}