import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [ready, setReady] = useState(false);

    useEffect(() =>{
        fetch(`/user/${user._id}`)
            .then((res)=>res.json())
            .then((parsedUserRes)=>{
                console.log(parsedUserRes.data)
            })
            .catch((err)=>{
                console.log("error getting use", err)
            })
            return () =>{
            }
        
    },[isAuthenticated])

    if(ready){
        return(<Navigate to="/quests"/>)
    }

    if(!isAuthenticated){
        return(<Navigate to="/"/>)
    }

    const doUser = async() =>{
        await setReady(true);
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

    const retireUser = async(req, res) => {
        await fetch(`/${user._id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              }
        })
    }

    return(
        isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={doUser}> Confirm Launch </button>
            <LogoutButton/>
            <button onClick={retireUser}> Retire </button>
        </div>
        )
    )
}

export default Profile;