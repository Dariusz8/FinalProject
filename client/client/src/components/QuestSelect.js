import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const QuestSelect = () =>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [backgroundPic, setBackgroundPic] = useState([]);

    useEffect(() => {
        const fetchData = async() =>{
            try{
                const res = await fetch("/quests");
                const resData = await res.json(); 
                await setBackgroundPic(resData.data)
            } catch(err){
            console.log(err)
        }
    }
        fetchData();
    }, []);
    
    // useEffect(() => {
    //     console.log(backgroundPic);
    //   }, [backgroundPic]);

    if (isLoading) return <h2>Loading...</h2>
    
    if(!isAuthenticated){
        return(<Navigate to="/"/>)
    }

    return(
        <Wrapper>
        
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: black;
width: 100vw;
height: 100vh;
`

export default QuestSelect;