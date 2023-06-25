import Profile from "./Profile";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Image } from 'cloudinary-react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
    const [backgroundPic, setBackgroundPic] = useState("");
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        const fetchData = async() =>{
            try{
                const res = await fetch("/profilepics");
                const resData = await res.json();
                await setBackgroundPic(resData.data[0])
            } catch(err){
            console.log(err.message)
        }
    }
    fetchData()
    }, []);

    if(!isAuthenticated){
        return(<Navigate to="/"/>)
    }

    return(
        <Wrapper>
            <StyledImage alt="Picture of a hangar background for the profile and launch page" cloudName="dly85se71" publicId={backgroundPic.url}/>
            <ProfileWrapper>
                <Profile/>
            </ProfileWrapper>
        </Wrapper>
    )
}

const StyledImage = styled(Image)`
height:100vh;
width: 100vw;
position:fixed;
z-index:-1;
`
const Wrapper = styled.div`
height:100vh;
width:100vw;
overflow: hidden;
margin: none;
`
const ProfileWrapper = styled.div`
background: rgba(255,255,255,0.1);
-webkit-backdrop-filter: blur(13px);
backdrop-filter: blur(13px);
border: 1px solid rgba(255,255,255,0.075);
max-width:20vw;
border-radius: 18%;
padding:5%;
position: fixed;
left:6%;
top:7%;
`
export default ProfilePage;