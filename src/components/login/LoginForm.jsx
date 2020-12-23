import { CheckBox } from '@material-ui/icons';
import React, { useState } from 'react';
import {FiMail, FiKey, FiMove, FiLogIn} from 'react-icons/fi';
import backgroundImg from '../../static/images/login_bg.jpg';

function LoginForm({login, location}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleClick = () => {
        try {
          login({ email, password })
        } catch (e) {
          alert("Failed to login")
          setEmail("")
          setPassword("")
        }
    }
    
    const style = {
      backgroundImage: `url(${backgroundImg})`
    };

    return (
      <div>
        <div className="login" style={style}>
            <div className="login__wrapper" >
              <h1>로그인</h1>
              <FiMail/>
              <input className="login__input" type="text" value={email} onChange={({target : value}) => setEmail(value)} placeholder="이메일 주소"/>
              <br/>
              <FiKey/>
              <input className="login__input" type="password" value={password} onChange={({target : value}) => setPassword(value)} placeholder="비밀번호"/>
              <br/>
              
              <button className="login__submit" type="submit">로그인<FiLogIn/></button>
              <br/>

              <input type="checkbox" class="" name="rememberMe" id="bxid_rememberMe_true" value="true" tabindex="0" data-uia="rememberMe" checked=""/>
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

export default LoginForm;