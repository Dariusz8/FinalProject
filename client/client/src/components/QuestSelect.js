import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const QuestSelect = () =>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [background, setBackgroundPic] = useState([]);

    useEffect(() => {
        fetch("/quests")
        .then((res)=> res.json())
        .then((resData)=>{
            setBackgroundPic(resData.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);

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