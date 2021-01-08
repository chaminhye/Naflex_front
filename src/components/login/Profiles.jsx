import React from 'react';

function Profiles(){

return(
<div>
    <div className="profiles">
        <div class="profiles__list">
            <div class="profiles--gate--label">Netflix를 시청할 프로필을 선택하세요.</div>

            <ul class="profiles__choose">
                <li class="profile">
                    <div>
                        <a class="profile--link" tabindex="0" href="/home/{}"
                            data-uia="action-select-profile+primary">
                            <div class="profile--wrapper">
                                <div class="profile--wrapper icon"/>
                            </div><span class="profile--name">Anna</span>
                        </a>
                        <div class="profile--children"></div>
                    </div>
                </li>
                <li class="profile">
                    <div>
                        <a class="profile--link" tabindex="0" href="/home/{}"
                            data-uia="action-select-profile+primary">
                            <div class="profile--wrapper">
                                <div class="profile--wrapper icon"/>
                            </div><span class="profile--name">Ellsa</span>
                        </a>
                        <div class="profile--children"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
)
}

export default Profiles;