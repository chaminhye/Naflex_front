import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

   
    const fetchUsers = async () => {
        try{
            // 요청 시작할때, error와 users초기화
            setError(null);
            setUsers(null);

            //loading 상태를 true로 변경
            setLoading(true);
            const response= await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data);
        }catch(e){
            setError(e);
        }

        setLoading(false);
    };
    
    useEffect(() => {
        fetchUsers();
    }, []);

    if(loading) return <div>로딩중...</div>;
    if(error)   return <div>에러발생..</div>;
    if(!users)  return null;

    return(
        <>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li> 
            ))}
        </ul>
        <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    )
}

export default Users;