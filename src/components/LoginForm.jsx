import React, { useState } from 'react';
import {FiMail, FiKey} from 'react-icons/fi';

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
    
    return (
        <div className="headerContents">
            <h1>Login</h1>
            <dt><FiMail/>email</dt>
            <input type="text" value={email} onChange={({target : value}) => setEmail(value)} placeholder="input your e-mail"/>
            <dt><FiKey/>Password</dt>
            <input type="password" value={password} onChange={({target : value}) => setPassword(value)} placeholder="input your password"/>
            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default LoginForm;