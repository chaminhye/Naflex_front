import React, { useState } from 'react';
import { FiKey, FiLogIn, FiMail } from 'react-icons/fi';
import AuthenticationService from '../../utils/AuthenticationService';
import  { useHistory} from 'react-router'; 

function LoginComponent(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const loginClicked = (username, password) => {
        const data = {
            email : username,
            password : password
        };
        AuthenticationService
        .executeJwtAuthenticationService(data)
        .then((response) => {
            AuthenticationService.registerSuccessfulLoginForJwt(username,response.data.jwttoken)
            history.push(`/home`)
        }).catch( () =>{
            console.log({showSuccessMessage:false})
            console.log({hasLoginFailed:true})
        })
    }
    return (
        <div>
            <div className="login">
                <div className="login__wrapper" >
                    
                  <h1>로그인</h1>
                  <FiMail/>
                  <input className="login__input" 
                      type="text" 
                      value={username} 
                      onChange={({ target: { value } }) => setUsername(value)} 
                      placeholder="이메일 주소"/>
                  <br/>
                  <FiKey/>
                  <input className="login__input" 
                      type="password" 
                      value={password} 
                      onChange={({ target: { value } }) => setPassword(value)} 
                      placeholder="비밀번호"/>
                  <br/>
                  
                  <button className="login__submit" type="submit" onClick={() => loginClicked(username, password)}>로그인<FiLogIn/></button>
                  <br/>
  
                  <input type="checkbox"/>
                  <span className="login__rememberMe">로그인 정보 저장</span>
                  
  
                  <div className="login__signup">
                    NaFlex 회원이 아닌가요?
                    <a href="/">지금 가입하세요</a>
                  </div>
                </div>
            </div>
        </div>
      );

}

export default LoginComponent;