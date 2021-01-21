import axios from 'axios';
import {BASE_URL} from '../constants';

class AuthenticationService {
    // send username to the SERVER
    signup(username, pwd) {
        return axios.get(`${BASE_URL}/api/saveMember`,{
            params :{
                email :username,
                password : pwd 
            }
        })
    }

    // send username, password to the SERVER
    executeJwtAuthenticationService(data) {
        const headers ={
            'Content-Type': 'application/json',
        };
        console.log(data);
        return axios.post(`${BASE_URL}/authenticate`, data, headers)
    }

    executeHelloService() {
        console.log("===executeHelloService===")
        return axios.get(`${BASE_URL}/hello`);
    }

    registerSuccessfulLoginForJwt(username, data) {
        localStorage.setItem('token', data.jwttoken);
        console.log('registerSuccessfulLoginForJwt', data)
        localStorage.setItem('users', JSON.stringify(data.users));
        localStorage.setItem('authenticatedUser', username);
        // sessionStorage.setItem('authenticatedUser', username)
        //this.setupAxiosInterceptors(this.createJWTToken(token))
        this.setupAxiosInterceptors();
    }
    
    createJWTToken(token) {
        console.log("===createJWTToken===", token);
        return 'Bearer ' + token
    }

    setupAxiosInterceptors() {
        // 요청 인터셉터 추가
        axios.interceptors.request.use(
            // 요청 보내기 전에 수행할 일
            config => {
                console.log("===setupAxiosInterceptors_request===");
                const token = localStorage.getItem('token');
                // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            // 오류 요청을 보내기전에 수행할 일
            error => {
                Promise.reject(error)
            }
        );
    }

    logout() {
        //sessionStorage.removeItem('authenticatedUser');
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        console.log(token);

        if (token) {
            return true;
        }
        return false;
    }

    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        let user = localStorage.getItem('authenticatedUser');
        if (user === null) return '';
        return user;
    }
}

export default new AuthenticationService()