import React from 'react';

function Hello({color, name, isSpecial}){
    return (
    <div style={{color}}>
        {/**JSX 에서 null, false, undefined 를 렌더링하게 된다면 아무것도 나타나지 않게 됩니다. */}
        {isSpecial ? <b>*</b> : null}
        안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name : '이름없음'
}

export default Hello;