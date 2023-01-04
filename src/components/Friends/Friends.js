import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [users,setUsers] =useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]);


    return (
        <div>
            <p>Hellow Friends </p>
            <p>See All Friends are </p>
            {users.map(user=><Friend key={user.id} user={user}/>)}
        </div>
    );
};

export default Friends;