import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleLogin = async() =>{
        loginWithRedirect();
    }

    return(
        !isAuthenticated && (
        <Wrapper>
            <GreySpan1></GreySpan1>
            <GreySpan2></GreySpan2>
            <GreySpan3></GreySpan3>
            <GreySpan4></GreySpan4>
            <Button onClick = { () => handleLogin()}>
                Log In
            </Button>
        </Wrapper>
      
        )
    )
}

const Wrapper = styled.div`
position:relative;
`
const Button = styled.button`
  font-size: 18px;
	text-align: center;
	margin: 0;
	padding: 1rem;
	background-color: transparent;
	color: white;
    &:hover{
        cursor: crosshair;
    }
`
const GreySpan1 = styled.div`
position: absolute;
border-radius: 100vmax;
top:0;
left:0;
width: 0;
height: 5px;
background: linear-gradient(
    90deg,
    transparent 1%,
    rgba(230, 230, 250, 0.9),
    rgb(230, 230, 250)
);
animation: animateTop 2.2s linear infinite;
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
const GreySpan2 = styled.div`
position: absolute;
border-radius: 100vmax;
top:0;
right:0;
width: 5px;
height: 0px;
background: linear-gradient(
    180deg,
    transparent 1%,
    rgba(230, 230, 250, 0.9),
    rgb(230, 230, 250)
);
animation: animateRight 2.4s linear infinite;
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
const GreySpan3 = styled.div`
position: absolute;
border-radius: 100vmax;
bottom:0;
right:0;
width: 0px;
height: 5px;
background: linear-gradient(
    -90deg,
    transparent 1%,
    rgba(230, 230, 250, 0.9),
    rgb(230, 230, 250)
);
animation: animateBottom 2.6s linear infinite;
@keyframes animateBottom {
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
const GreySpan4 = styled.div`
position: absolute;
border-radius: 100vmax;
bottom:0;
left:0;
width: 5px;
height: 0px;
background: linear-gradient(
    0deg,
    transparent 1%,
    rgba(230, 230, 250, 0.9),
    rgb(230, 230, 250)
);
animation: animateLeft 2.8s linear infinite;
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
export default LoginButton;