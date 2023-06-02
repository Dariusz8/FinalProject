import styled from 'styled-components';
import {Image} from 'cloudinary-react';
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hyperjump from './Hyperjump';

const Home = () => {
    const { isLoading, isAuthenticated } = useAuth0();
    const [backgroundPic, setBackgroundPic] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("/homepics");
          const resData = await res.json();
          console.log(resData)
          setBackgroundPic(resData.data);
        } catch (err) {
          console.log(err.message);
        }
      };
      fetchData();
    }, []);

    useEffect(()=>{
      const interval = setInterval(() =>{
        setCurrentIndex(prevIndex => (prevIndex + 1)% backgroundPic.length)
      }, 3000)
      return()=>{
        clearInterval(interval)
      }
    }, [backgroundPic])

    if (isLoading) return <div><Hyperjump/></div>

    if(isAuthenticated){
      return(<Navigate to="/profile"/>)
  }

    return(
        <Wrapper>
          <TitleWrapper>
            <HomeTitle>Yet To Arrive, They Have</HomeTitle>
          </TitleWrapper>
          <HomePicWrapper>
            <StyledImage alt="cover pictures of future quests to be released" cloudName="dly85se71" publicId={backgroundPic[currentIndex]?.url}/>
            <PurpleSpan></PurpleSpan>
            <GreenSpan></GreenSpan>
            <RedSpan></RedSpan>
            <RedSpan2></RedSpan2>
            <BlueSpan></BlueSpan>
          </HomePicWrapper>
          <LogStuff>
            <LoginButton />
          </LogStuff>
        </Wrapper>
    )
}

export default Home;

const StyledImage = styled(Image)`
height: 100vh;
width: 100vw;
position: absolute;
margin:0px;
`
const PurpleSpan = styled.div`
position: absolute;
border-radius: 100vmax;
top:0;
left:0;
width: 0px;
height: 8px;
background: linear-gradient(
    -90deg,
    transparent 1%,
    rgba(102, 51, 153, 0.9),
    rgb(102, 51, 153)
);
animation: animateTop 3s ease-in infinite;
@keyframes animateTop {
    10% {
    width: 100%;
    opacity: 1;
  }
  80%,
  100% {
    opacity: 0;
  }
  }
`
const GreenSpan = styled.div`
position: absolute;
border-radius: 100vmax;
bottom:0;
right:0;
width: 8px;
height: 0px;
background: linear-gradient(
    180deg,
    transparent 1%,
    rgba(47,249,36, 0.9),
    rgb(47,249,36)
);
animation: animateRight 3s ease-in infinite;
@keyframes animateRight {
    10% {
    height: 100%;
    opacity: 1;
  }
  80%,
  100% {
    opacity: 0;
  }
  }
`
const BlueSpan = styled.div`
position: absolute;
border-radius: 100vmax;
bottom:0;
left:0;
width: 8px;
height: 0px;
background: linear-gradient(
    180deg,
    transparent 1%,
    rgba(46,103,248, 0.9),
    rgb(46,103,248)
);
animation: animateLeft 3s ease-in infinite;
@keyframes animateLeft {
    10% {
    height: 100%;
    opacity: 1;
  }
  80%,
  100% {
    opacity: 0;
  }
  }
`
const RedSpan = styled.div`
position: absolute;
border-radius: 100vmax;
bottom:0;
left:50%;
width: 0px;
height: 8px;
background: linear-gradient(
    -90deg,
    transparent 1%,
    rgba(235,33,46, 0.9),
    rgb(235,33,46)
);
animation: animateBottom 3s ease-in infinite;
@keyframes animateBottom {
    10% {
    width: 60%;
    opacity: 1;
  }
  80%,
  100% {
    opacity: 0;
  }
  }
`
const RedSpan2 = styled.div`
  position: absolute;
  border-radius: 100vmax;
  bottom: 0;
  right: 48%;
  width: 0px;
  height: 8px;
  background: linear-gradient(
    90deg,
    transparent 1%,
    rgba(235,33,46, 0.9),
    rgb(235,33,46)
  );
  animation: animateBottom2 3s ease-in infinite;
  @keyframes animateBottom2 {
    10% {
      width: 60%;
      opacity: 1;
    }
    80%,
    100% {
      opacity: 0;
    }
  }
`
const HomePicWrapper = styled.div`
border-radius: 4px;
position: relative;
width: 99vw;
height: 98vh;
background: transparent;
overflow: hidden;
`
const HomeTitle = styled.h1`
color:white;
letter-spacing: 3px;
animation: shifty 4s linear infinite alternate;
transform: skewX(0deg);
@keyframes shifty{
  0%, 20%, 40%, 50%, 65%, 75%, 100% {
    transform: skewX(0deg);
  }
  10% {
    transform: skewY(3deg);
  }
  15% {
    transform: skewY(-3deg);
  }
  30% {
    transform: skewX(-3deg);
  }
  43% {
    transform: skewX(3deg);
  }
  44%{
    transform: skewX(-3deg);
  }
  55%{
    transform: skewX(-3deg);
  }
  60%{
    transform:skewY(2deg)
  }
  70%{
    transform: skewX(2deg) skewY(-1deg);
  }
  80%{
    transform: skewX(5deg);
  }
}
`
const TitleWrapper = styled.div`
width:80vw;
height: 30vh;
position:fixed;
left:40vw;
top:10vh;
z-index: 10;
`
const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: black;
margin: 0px;
overflow: hidden;
`
const LogStuff = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10vh;
  transform: translateX(-50%); 
`