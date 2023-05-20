import styled from "styled-components";
import { useParams,Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Cockpit from "./Cockpit";
import {Image} from "cloudinary-react";
import Hyperjump from "./Hyperjump";



const PlanetDetail = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    const {id} = useParams();
    const [planetInfo,setPlanetInfo] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const res = await fetch(`/${id}`);
                const resData = await res.json();
                await setPlanetInfo(resData.data);
                
            }catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [])

    useEffect(()=>{
        const interval = setInterval(() =>{
          setCurrentIndex(prevIndex => (prevIndex + 1)% planetInfo.planet_pics.length)
        }, 3000)
        return()=>{
            
            clearInterval(interval);
        }
      }, [planetInfo])

      if (isLoading) return <div><Hyperjump/></div>

    if (!planetInfo) return <h2>Loading...</h2>

    if(!isAuthenticated){
        return(<Navigate to="/"/>)
        }
return (
    <div>
         {planetInfo.planet_pics && (
        <StyledImage alt="background picture of the current planet" cloudName="dly85se71" publicId={planetInfo.planet_pics[currentIndex]} />
      )}
        <Cockpit/>
    </div>
)
}

const StyledImage = styled(Image)`
width:100vw;
height:60vh;
z-index: 1;
position:fixed;
top:0px;
left:0px;
margin:0px;
`

export default PlanetDetail;