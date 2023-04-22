import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const QuestSelect = () =>{
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <h2>Loading...</h2>
    
    if(!isAuthenticated){
        return(<Navigate to="/"/>)
    }

    return(
        <div>
            quests
        </div>
    )
}

export default QuestSelect;