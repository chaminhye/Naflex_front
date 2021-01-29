import axios from 'axios';
import {YOUTUBE_API_KEY, YOUTUBE_GET_SEARCH_LIST} from '../constants';
import MyHistoryService from './MyHistoryService';

class YoutubeService{
    getSearchMovieName(data){
        // 플레이어 click과 동시에 시청기록 insert
        MyHistoryService.saveContentHistory(data)
// console.log('YoutubeService :: ',data)
        return axios.get(`${YOUTUBE_GET_SEARCH_LIST}?key=${YOUTUBE_API_KEY}`,{
            params : {
                q : data.vodName,                                   // 혹시 한글깨지면 encodeURI(name)적용
                part : "snippet",
                maxResults : 1,                             // 1개 조회
                type : "video",                             // video 타입
                field : 'items(id(videoId))',
                // order : "rating",                          // 평가순으로 , 조회수 많은 순으로
                region : "ko",                              // 지역
                channelId : "UCiEEF51uRAeZeCo8CJFhGWw"      // Netflix 채널안에서 검색
                                                            // UCiEEF51uRAeZeCo8CJFhGWw   : Netflix Korea
                                                            // UCWOA1ZGywLbqmigxE4Qlvuw   : Netflix
            }
        })
    }
}

export default new YoutubeService()