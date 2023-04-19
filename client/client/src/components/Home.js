import styled from 'styled-components';
import {Image} from 'cloudinary-react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
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
        <LogStuff>
            <LoginButton />
            <LogoutButton />
        </LogStuff>
        </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
margin:none;
width: 100vw;
height: 100vh;
background-color: black;
`

const LogStuff = styled.div`
position:absolute;
left:50%;
top:20%;
`