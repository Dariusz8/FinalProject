import Profile from "./Profile";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Image } from 'cloudinary-react';

const ProfilePage = () => {
    const [backgroundPic, setBackgroundPic] = useState("")

    useEffect(() => {
        const fetchData = async() =>{
            try{
                const res = await fetch("/profilepics");
                const resData = await res.json();
                await setBackgroundPic(resData.data[0])
            } catch(err){
            console.log(err)
        }
    }
    fetchData()
    }, []);
    // useEffect(() => {
    //     console.log(backgroundPic);
    //   }, [backgroundPic]);

    return(
        <Wrapper>
            <Image cloudName="dly85se71" publicId={backgroundPic.url}
                style={{ height: '100vh', width: '100vw',
                position: "fixed", zIndex:"-1"}} />
            <ProfileWrapper>
                <Profile/>
            </ProfileWrapper>
        </Wrapper>
    )
}

export default ProfilePage;

const Wrapper = styled.div`
height:100vh;
width:100vw;
overflow: hidden;
margin: 0px;
`
const ProfileWrapper = styled.div`
background: rgba(255,255,255,0.1);
-webkit-backdrop-filter: blur(13px);
backdrop-filter: blur(13px);
border: 1px solid rgba(255,255,255,0.075);
max-width:20vw;
border-radius: 18%;
padding:3%;
position: fixed;
left:6%;
top:7%;
`
