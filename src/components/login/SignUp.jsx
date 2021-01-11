import React, {useState} from 'react';
import AuthenticationService from '../../utils/AuthenticationService';
import  { useHistory} from 'react-router'; 

const SignUp = ({props}) => {
    const username = props;
    const [password, setPassword] = useState('');

    const history = useHistory();

    const signUpClick = (pwd) =>{
        AuthenticationService
        .signup(username,pwd)
        .then((response) => {
            // 신규 회원인 경우, 결제페이지로 이동
            history.push(`/credentials`);
        }).catch( () => {
            console.log({showSuccessMessage:false})
            console.log({checkUserFailed:true})
        });
    }

    return(
        <div>
            <div className="signup">
                <div className="signup__container">
                    <div>
                        <p className="step">1/2단계</p>
                        <h2>비밀번호를 설정하고 멤버십을 시작하세요</h2>

                        <input className="input" type="text" value={props} readOnly/>
                        <br/>
                        <input className="input" 
                            type="password" 
                            value={password} 
                            onChange={({ target: { value } }) => setPassword(value)} 
                            placeholder="비밀번호를 추가하세요"/>
                    </div>
                    <input type="checkbox"/>
                    <span className="promotion-push-agree">예, Netflix 특별 프로모션 알림 이메일을 보내주세요</span>
                    <br/>
                    <button className="submit" type="submit" onClick={() => signUpClick(password)}>다음</button>
                </div>
            </div>
        </div>
    )
};

export default SignUp;