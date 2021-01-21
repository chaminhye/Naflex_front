import axios from 'axios';
import {BASE_URL} from '../constants';

class MyHistoryService{
    saveContentHistory(data){
        console.log('saveViewingRecording :: ',data)
        const headers ={
            'Content-Type': 'application/json',
        };
        return axios.post(`${BASE_URL}/history/saveContentHistory`,data, headers)
    }

    saveViewingRecording(){

    }
}

export default new MyHistoryService()