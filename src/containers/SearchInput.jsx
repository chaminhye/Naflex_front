import React, { useState } from 'react';
import axios from 'axios';
import { FiSearch } from "react-icons/fi";
import Modal from '../components/movies/Modal';

//https://www.themoviedb.org/talk/5c89de1ec3a368645d0cce67 genre 참조
//https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&primary_release_year=2019&with_genres=28
//`https://api.themoviedb.org/3/discover/movie?{api_key}c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=adventure%7Caction%7Chorror`


const SearchInput = () => {

    const [search, setSearch] = useState('');       // useState() : input과, 결과로 나온 영화들을 보여주는 list, 검색 데이터가 들어가는 movieLists 세가지를 상태관리 해준다.
    const [lists, setLists] = useState(false);
    const [movieLists, setMovieLists] = useState([]);
    
    const API_KEY = '2ff32a0ae484b0000c3f1f4f2eb34392';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=&include_adult=false&query=${search}&language=en-US&page=1`;

    let data = [];

    const fetch = async () => {
        const response = await axios.get(url);
        data = response.data.results || [];
        setMovieLists(data);
    }
    // onChange() : input에 text를 치면 value값을 통해 상태가 바로바로 업데이트 되면서 해당하는 데이터를 뽑아와 영화목록을 보여주는 list 모달이 띄워진다.
    const onChange = (e) => {
        setSearch(e.target.value);
        fetch(setMovieLists());
        setLists(true);
    }
    
    // hideLists() : 영화 이외에 배경부분을 클릭하면 사라지고 input값이 초기화되도록 하는 setLists(false); setSearch('');를 설정했다.
    const hideLists = () => {
        setLists(false);
        setSearch('');
    }

    return (
        <div className="searchContainer">
            <div className="inputContainer">
                <input className="search-txt" type="text" value={search} onChange={onChange} placeholder="title"/>
                <a className="searchLogo"><FiSearch/></a>
            </div>
            <div className={"searchMovie " + (lists ? "show" : "")} onClick={() => hideLists()}>
                <div className="listContainer">
                    { movieLists && movieLists.map(movie => (
                        <List props={movie} key={movie.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

const List = (props) => {

    return (
        <>
            <div className="lists">
                <img src={`https://image.tmdb.org/t/p/original/${props.props.poster_path}`}
                />
            </div>
    </>
    )
}

export default SearchInput;