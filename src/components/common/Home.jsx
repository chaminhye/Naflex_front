import React, { useState } from 'react';
import  { useHistory} from 'react-router'; 
import AuthenticationService from '../../utils/AuthenticationService';

function Home () {
    const [username, setUsername] = useState('');
    const history = useHistory();

    const startClicked = (username) =>{
        const data = {email : username};

        AuthenticationService
        .checkJwtAuthenticationService(data)
        .then((response) => {
            // 이메일이 존재하는 경우
            // 신규 회원인 경우
            history.push(`/home`);
        }).catch( () => {
            console.log({showSuccessMessage:false})
            console.log({checkUserFailed:true})
        });
    }

    return(
        <div>
            <div className="home">
                <div className="home__wrapper home__container__text">

                    <div className="home__register">
                        <h1>영화, TV 프로그램을 <br/>무제한으로.</h1>
                        <h2>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
                        <h3>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
                        <div className="home__input">
                            <input type="email" maxLength="50" onChange={({ target: { value } }) => setUsername(value)} value={username} className="home__input--text"></input>

                            <button className="btn--red" onClick={() => startClicked(username)}>
                                <span className="btn--txt">시작하기 </span>
                            </button>
                        </div>
                    </div>

                    <div className="home__container">
                        <div className="watchOnTv--text">
                            <h1>TV로 즐기세요</h1>
                            <h2>
                                스마트 TV, PlayStation, Xbox, Chromecast, <br/>Apple TV, 블루레이 플레이어 등 다양한<br/>디바이스에서 시청하세요.
                            </h2>
                        </div>
                        <div className="watchOnTv--img">
                            <img alt="watchOnTv-img" class="img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></img>
                        </div>
                    </div>

                    <div className="home__container">
                        <div className="offline--img"/>
                            
                        <div className="offline--text">
                            <h1>즐겨 보는 콘텐츠를<br/> 저장해 오프라인으로<br/> 시청하세요.</h1>
                            <h2>간편하게 저장하고 빈틈없이 즐겨보세요.</h2>
                        </div>
                    </div>

                    <div className="home__container">
                        <div className="device--text">
                            <h1>다양한 디바이스에서<br/> 시청하세요.</h1>
                            <h2>각종 영화와 TV 프로그램을 스마트폰, 태블릿,<br/> 노트북, TV에서 무제한으로 스트리밍하세요.<br/> 추가 요금이 전혀 없습니다.</h2>
                        </div>
                        <div className="device--image"/>
                    </div>

                    <div className="home__container">
                        <div className="faq">
                            <h1>자주 묻는 질문</h1>

                            <ul className="faq--list">
                                <li className="faq--list--item">
                                    <button className="faq--question">나플렉스란 무엇인가요?</button>
                                    <div className="faq--answer closed">
                                        <span>
                                            넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
                                            저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV 프로그램과 영화가 제공됩니다. 
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="home__input">
                        <input type="email" name="email" maxLength="50" id="email" className="home__input--text"></input>

                        <button className="btn--red">
                            <span className="btn--txt">시작하기 </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;