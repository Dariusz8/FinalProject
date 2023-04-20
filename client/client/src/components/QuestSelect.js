import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



const QuestSelect = () =>{
    const { user, isAuthenticated } = useAuth0();

    useEffect(() =>{
        if(!user){
            return(<Navigate to="/"/>)
        }
        return () =>{
            //cleanup??
        }
    },[])

    return(
        <div>
            quests
        </div>
    )
}

export default QuestSelect;