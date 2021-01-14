import axios from 'axios';
import {YOUTUBE_API_KEY, YOUTUBE_GET_SEARCH_LIST} from '../constants';

class YoutubeService{
    getSearchMovieName(name){
        return axios.get(`${YOUTUBE_GET_SEARCH_LIST}?key=${YOUTUBE_API_KEY}`,{
            params : {
                q : name,                                   // 혹시 한글깨지면 encodeURI(name)적용
                part : "snippet",
                maxResults : 1,                             // 1개 조회
                type : "video",                             // video 타입
                field : 'items(id(videoId))',
                order : "viewCount",                        // 조회수 많은 순으로
                channelId : "UCiEEF51uRAeZeCo8CJFhGWw"      // Netflix 채널안에서 검색
                                                            // UCiEEF51uRAeZeCo8CJFhGWw   : Netflix Korea
                                                            // UCWOA1ZGywLbqmigxE4Qlvuw   : Netflix
            }
        })
    }
}

export default new YoutubeService()