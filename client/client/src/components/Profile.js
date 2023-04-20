import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [authInfo, setAuthInfo] = useState(null);

    useEffect(() =>{
        fetch(`/user/${user._id}`)
            .then((res)=>res.json())
            .then((parsedUserRes)=>{
                setAuthInfo(parsedUserRes.data)
            })
            .catch((err)=>{
                console.log("error getting use", err)
            })
            return () =>{
                //cleanup??
            }

        
    },[user._id, isAuthenticated])

    if(authInfo){
        return(<Navigate to="/quests"/>)
    }

    const doUser = async(req, res) =>{
        await fetch('/user',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                _id:user._id,
                    email:user.email,
                    name: user.name,
                    picture: user.picture,
                    Logged_in: user.updated_at
            })
        })
    }

    return(
        isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={doUser} >Confirm User for Launch</button>
            
            <LogoutButton/>
        </div>
        )
    )
}

export default Profile;