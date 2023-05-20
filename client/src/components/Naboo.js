import styled from "styled-components";
import { useParams,Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Cockpit from "./Cockpit";
import {Image} from "cloudinary-react";
import Hyperjump from "./Hyperjump";

const Naboo = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    const [currentIndex, setCurrentIndex] = useState(0);
    const NabooPics = [
        "https://res.cloudinary.com/dly85se71/image/upload/v1680994232/theed-1-1024x576_s69ter.jpg",
        "https://res.cloudinary.com/dly85se71/image/upload/v1683072517/open-uri20150608-27674-hhlyow_2ee9e9c2_u7jomu.jpg",
        "https://res.cloudinary.com/dly85se71/image/upload/v1683072806/open-uri20150608-27674-1h6r5fb_fadec3fe_rmv0iy.jpg",
        "https://res.cloudinary.com/dly85se71/image/upload/v1683072988/open-uri20150608-27674-13so2t3_ffa97487_phgdg2.jpg"
    ]

    useEffect(()=>{
        const interval = setInterval(() =>{
          setCurrentIndex(prevIndex => (prevIndex + 1)% NabooPics.length)
        }, 3000)
        return()=>{
            clearInterval(interval);
        }
      }, [])

    if (isLoading) return <div><Hyperjump/></div>

    if(!isAuthenticated){
        return(<Navigate to="/"/>)
        }

    return(
        <>
        <Cockpit/>
        <PlanetPictures>
            <StyledImage id="66437138561b80f8966d3de7a" cloudName="dly85se71" publicId={NabooPics[currentIndex]} />
        </PlanetPictures>
        </>
    )

}

export default Naboo;

const PlanetPictures = styled.div`
`
const StyledImage = styled(Image)`
width:100vw;
height:60vh;
z-index: 1;
position:fixed;
top:0px;
left:0px;
margin:0px;
`