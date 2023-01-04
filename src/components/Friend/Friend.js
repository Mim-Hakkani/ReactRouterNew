import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({user}) => {

    const navigate = useNavigate() ;

    const handleFriend=(id)=>{

      const path = `/friend/`+id ;
    //   console.log('Path is ',path);
      navigate(path);
    }
    return (
        <div>
            <h2>Name : {user?.name}</h2>
            <button onClick={()=>handleFriend(user?.id)}>{user?.username} :{user?.id}</button>
        </div>
    );
};

export default Friend;