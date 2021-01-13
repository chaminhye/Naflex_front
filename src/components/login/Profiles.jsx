import React from 'react';

function Profiles(){
    const users = JSON.parse(localStorage.getItem('users'))
return(
<div>
    <div className="profiles">
        <div class="profiles__list">
            <div class="profiles--gate--label">NaFlex를 시청할 프로필을 선택하세요.</div>

            <ul class="profiles__choose">
                {users.map(user => (
                    <li class="profile" key={user.userIdx}>
                        <div>
                            <a class="profile--link" href={'/home/'+user.userIdx}
                                data-uia="action-select-profile+primary">
                                <div class="profile--wrapper">
                                    <div class="profile--wrapper icon"/>
                                </div><span class="profile--name">{user.username}</span>
                            </a>
                            <div class="profile--children"></div>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    </div>
</div>
)
}

export default Profiles;