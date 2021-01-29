import axios from 'axios';
import {BASE_URL} from '../constants';

class MyHistoryService{
    headers ={
        'Content-Type': 'application/json',
    };

    saveContentHistory(data){
        console.log('saveViewingRecording :: ',data)
        return axios.post(`${BASE_URL}/history/saveHistory`,data, this.headers)
    }
    
    getHistoryList(data){
        return axios.post(`${BASE_URL}/history/getHistoryList`,data, this.headers)
    }
}

export default new MyHistoryService()