import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
   const [friendDetails,setFriendDetails] =useState({});
   const [loading,setLoading]=useState(true)

    const {friendId} = useParams();
    // console.log('Friend id ',friendId);

     useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data=>{
            setFriendDetails(data);
            setLoading(false);
       })
     },[]);

     if(loading) return <p>loading please Wait ......</p>
    return (
        <div>
            <h1>Ami Friends er details to ki hoise </h1>
            {!loading && <>
             <h5>Amar id {friendId}</h5>
            <p>Name is : {friendDetails?.name}</p>
            <p>email:{friendDetails?.email}</p></>}
           
        </div>
    );
};

export default FriendDetails;