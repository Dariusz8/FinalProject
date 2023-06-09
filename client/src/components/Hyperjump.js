import styled from "styled-components";
import {Image} from 'cloudinary-react';

const Hyperjump = () => {

    return(
        <>
            <StyledImage alt="loading screen displaying a hyperspeed jump through space" cloudName="dly85se71" publicId="https://media.tenor.com/VdZJbPtJrfYAAAAC/light-speed.gif" ></StyledImage>
        </>
    )
}

const StyledImage = styled(Image)`
width: 100vw;
height: 100vh;
z-index: 10000;
margin:0px;
background-color: black;
overflow: hidden;
`
export default Hyperjump;