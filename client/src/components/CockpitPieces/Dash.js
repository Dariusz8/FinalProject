import styled from "styled-components";
import MainScreen from "./MainScreen";
import {BsLungs} from "react-icons/bs";
import {FiMic} from "react-icons/fi";
import {FiMicOff} from "react-icons/fi";
import {FiPhoneCall} from "react-icons/fi";
import {FiPhoneMissed} from "react-icons/fi";
import {BsFuelPumpFill} from "react-icons/bs";
import {GiBubbleField} from "react-icons/gi";
import {RxDoubleArrowUp} from "react-icons/rx";
import {RxDoubleArrowDown} from "react-icons/rx";
import { useState } from "react";


const Dash = () => {
    const [gasLevel, setGasLevel] = useState(88);
    const [oxygenLevel, setOxygenLevel] = useState(94);

    return(
    <>
        <Dashboard>
            <MainScreen/>
            <AboveScreen>
                <BsLungs/>  {oxygenLevel}%
            </AboveScreen>
            <HeadingIndicator>
                <HeadingTop>
                    <HeadingCharacters>12</HeadingCharacters>
                    <HeadingCharacters>S</HeadingCharacters>
                    <HeadingCharacters>15</HeadingCharacters>
                </HeadingTop>
                <HeadingBottom>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                    <HeadingLines>|</HeadingLines><HeadingLines>|</HeadingLines>
                </HeadingBottom>
            </HeadingIndicator>
            <FuelIcon>
                <BsFuelPumpFill/>
                {gasLevel} %
            </FuelIcon>
            <PhoneIcons>
                <FiPhoneCall/>
                <FiPhoneMissed/>
            </PhoneIcons>
            <MicIcons>
                <FiMic/>
                <FiMicOff/>
            </MicIcons>
            <PlaneSheild>
                <RxDoubleArrowUp/>
                <GiBubbleField/>
                <RxDoubleArrowDown/>
            </PlaneSheild>
        </Dashboard>
    </>
    )
}

export default Dash

const PlaneSheild = styled.div`
color:limegreen;
display: flex;
flex-direction: column;
justify-content: space-evenly;
position:fixed;
right:28%;
top:60%;
`

const HeadingCharacters = styled.p`
`
const HeadingLines = styled.p`
margin-left: 8px;
margin-right: 8px;
`
const HeadingBottom = styled.div`
position:relative;
right:50px;
display: flex;
flex-direction: row;
animation: leftRightBottom 8s ease-in-out infinite;
@keyframes leftRightBottom{
    0%{
        transform: translateX(0)
    }
    33%{
        transform:translateX(-20px)
    }
    66%{
        transform:translateX(40px)
    }
    100%{
        transform:translateX(0)
    }
}
`
const HeadingTop = styled.div`
margin-top:10px;
margin-bottom:-10px;
display:flex;
flex-direction:row;
justify-content: space-evenly;
animation: leftRightTop 8s ease-in-out infinite;
@keyframes leftRightTop{
    0%{
        transform: translateX(0)
    }
    33%{
        transform:translateX(-20px)
    }
    66%{
        transform:translateX(40px)
    }
    100%{
        transform:translateX(0)
    }
}
`
const HeadingIndicator = styled.div`
color:limegreen;
display: flex;
flex-direction: column;
justify-content: space-around;
overflow: hidden;
background-color: rgb(15,15,15);
width: 270px;
height: 60px;
position: fixed;
top:52%;
left:40%;
`

const FuelIcon = styled.div`
color:limegreen;
display: flex;
flex-direction: row;
justify-content: space-between;
width:60px;
height:40px;
position:fixed;
left:26%;
top:60%;
`

const PhoneIcons = styled.div`
color:limegreen;
display: flex;
flex-direction: column;
justify-content: space-between;
height:50px;
position:fixed;
right:38%;
top:53%;
`

const MicIcons = styled.div`
color:limegreen;
display: flex;
flex-direction: column;
justify-content: space-between;
height:50px;
position:fixed;
right:35%;
top:53%;
`

const AboveScreen = styled.div`
color:limegreen;
z-index: 1;
position: fixed;
left:35%;
bottom:41%;
`

const Dashboard = styled.div`
clip-path: polygon(31% 50%, 64% 50%, 100% 59%, 100% 100%, 0% 100%, 0% 59%);
position: fixed;
z-index: 100;
width: 100vw;
height: 100vh;
background-color: rgb(20,20,20);
`
