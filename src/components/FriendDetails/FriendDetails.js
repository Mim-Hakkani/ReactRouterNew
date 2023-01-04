import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {

    const {friendId} = useParams();
    console.log('Friend id ',friendId);
    return (
        <div>
            <h1>Ami Friends er details to ki hoise </h1>
            <h5>Amar id {friendId}</h5>
        </div>
    );
};

export default FriendDetails;