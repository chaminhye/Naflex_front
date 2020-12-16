import React from 'react';

// 프로필에서 사용할 데이터
const profileData = {
    ellsa : {
        name :'jihye',
        description : '야채곱창을 먹기위해 일찍퇴근한데'
    },
    anna : {
        name : 'minhye',
        description : '그냥 배고파,,,아무거나,,,'
    }
};

const Profile = ({match}) => {
    // 파라미터를 받아올 땐 match안에 들어있는 params 값을 참조
    const {username} = match.params;
    const profile = profileData[username];
    if(!profile){
        return <div>존재하지 않는 유저</div>;
    }
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;