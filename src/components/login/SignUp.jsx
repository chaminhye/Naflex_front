import React, {useState} from 'react';
import AuthenticationService from '../../utils/AuthenticationService';
import  { useHistory} from 'react-router'; 

function SignUp(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const signUpClick = (username) =>{
        const data = {email : username};

        AuthenticationService
        .signup(data)
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
        <>
            <div className="signup">
                <div className="signup__container">
                    <div>
                        <h2>비밀번호를 설정하고 멤버십을 시작하세요</h2>

                        <input className="input" 
                            type="text" 
                            value={username} 
                            onChange={({ target: { value } }) => setUsername(value)} 
                            />
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
                    <button className="submit" type="submit" onClick={() => signUpClick(username, password)}>다음</button>
                </div>
            </div>
        </>
    )
}

export default SignUp;