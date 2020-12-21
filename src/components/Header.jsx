import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { FiInfo } from 'react-icons/fi';
import backgroundImg from '../static/images/header.jpg';

const Header = () => {

    //"https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"

    return (
            <header>
                <div className="headerContainer">
                    <img src={backgroundImg} alt="stranger"/>
                    <div className="headerContents">
                        <h1>LACASA DE PAPEL</h1>
                        <p>종이의 집은 스페인에서 2017년 5월 2일부터 방송된 스페인의 조폐소와 중앙 은행을 습격하는 내용의 범죄 스릴러 드라마다</p>
                        <div className="btn">
                            <button><FiPlay/><span>PLAY</span></button>
                            <button><FiPlus/><span>MY LIST</span></button>
                            <button><FiInfo/><span>DETAILS</span></button>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Header;