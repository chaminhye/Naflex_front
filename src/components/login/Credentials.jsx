import React, {useState} from 'react';

function Credentials(){
    const [cardnumber, setCardnumber] = useState('');
    const [expireddate, setExpireddate] = useState('');
    const [name, setName] = useState('');
    const [birthyear, setBirthyear] = useState('');
    const [birthmonth, setBirthmonth] = useState('');
    const [birthday, setBirthday] = useState('');




    return(
        <>
            <div className="signup">
                <div className="signup__container">
                    <div>
                        2/2단계
                        <h2>신용카드나 체크카드 등록</h2>

                        <input className="input" 
                            type="text" 
                            value={cardnumber} 
                            onChange={({ target: { value } }) => setCardnumber(value)} 
                            placeholder="카드 번호"
                            />
                        <br/>
                        <input className="input" 
                            type="text" 
                            value={expireddate} 
                            onChange={({ target: { value } }) => setExpireddate(value)} 
                            placeholder="만료 날짜(월/연도 : 05/17)"/>
                        <br/>
                        <input className="input" 
                            type="text" 
                            value={name} 
                            onChange={({ target: { value } }) => setName(value)} 
                            placeholder="이름"/>
                        <br/>
                        <input className="input" 
                            type="text" 
                            value={birthyear} 
                            onChange={({ target: { value } }) => setBirthyear(value)} 
                            placeholder="생년"/>
                        <br/>
                        <input className="input" 
                            type="text" 
                            value={birthmonth} 
                            onChange={({ target: { value } }) => setBirthmonth(value)} 
                            placeholder="생월"/>
                        <br/>
                        <input className="input" 
                            type="text" 
                            value={birthday} 
                            onChange={({ target: { value } }) => setBirthday(value)} 
                            placeholder="생일"/>
                        <br/>
                    </div>
                    <input type="checkbox"/>
                    <span className="promotion-push-agree">19세 이상이며, 아래의 약관에 모두 동의합니다.</span>
                    <br/>
                    <button className="submit" type="submit" >멤버십 시작</button>
                </div>
            </div>
        </>
    )
} 

export default Credentials;