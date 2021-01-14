import React from 'react';

function Profiles(){
    const users = JSON.parse(localStorage.getItem('users'))
    return(
    <div>
        <div className="profiles">
            <div className="profiles__list">
                <div className="profiles--gate--label">NaFlex를 시청할 프로필을 선택하세요.</div>

                <ul className="profiles__choose">
                    {users.map(user => (
                        <li className="profile" key={user.userIdx}>
                            <div>
                                <a className="profile--link" href={'/home/'+user.userIdx}
                                    data-uia="action-select-profile+primary">
                                    <div className="profile--wrapper">
                                        <div className="profile--wrapper icon"/>
                                    </div><span className="profile--name">{user.username}</span>
                                </a>
                                <div className="profile--children"></div>
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