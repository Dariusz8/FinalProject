import Profile from "./Profile";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Image } from 'cloudinary-react';

const ProfilePage = () => {
    const [backgroundPic, setBackgroundPic] = useState([])

    useEffect(() => {
        fetch("/profilepics")
        .then((res)=> res.json())
        .then((resData)=>{
            setBackgroundPic(resData.data)
            console.log(backgroundPic);
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);

    return(
        <Wrapper>
            
            <Image cloudName="dly85se71" publicId=""
                style={{ height: '100vh', width: '100vw',
                position: "fixed", zIndex:"-1"}} />
            <Profile/>
        </Wrapper>
    )
}

export default ProfilePage;

const Wrapper = styled.div`
height:100vh;
width:100vw;
`