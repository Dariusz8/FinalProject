import styled from 'styled-components';
import {Image} from 'cloudinary-react';
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
//import Profile from "./Profile";
//import { Link } from "react-router-dom";

// Used to get boxshadow input
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// const STAR_COUNT = 100
// let result = ""
// for(let i = 0; i < STAR_COUNT; i++){
//     result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
// }
// console.log(result.substring(0, result.length - 1))

const Home = () => {
    const { isLoading } = useAuth0();

    if (isLoading) return <h2>Loading...</h2>

    return(
        <Wrapper>
        <HomeTitle>Yet To Arrive, They Have</HomeTitle>
        <HomePicWrapper>
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

const PurpleSpan = styled.div`
position: absolute;
border-radius: 100vmax;
top:0;
left:0;
width: 0px;
height: 5px;
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
width: 5px;
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
width: 5px;
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
height: 5px;
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
  height: 5px;
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
`;


const HomePicWrapper = styled.div`
border-radius: 8px;
margin-left: 5px;
margin-right: 5px;
position: relative;
border: solid 1px red;
width: 99vw;
height: 60vh;
top:11vh;
background: transparent;
overflow: hidden;
border-top: 1px solid rgba(102, 51, 153, 0.5);
  border-right: 1px solid rgba(47,249,36, 0.5);
  border-bottom: 1px solid rgba(235,33,46, 0.5);
  border-left: 1px solid rgba(46,103,248, 0.5);
`

const HomeTitle = styled.h1`
color:white;
position:relative;
left:40vw;
top:10vh;`

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: black;
margin: none;
overflow: hidden;
`

const LogStuff = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10vh;
  transform: translateX(-50%); 
`;


//grey saber 230, 230, 250