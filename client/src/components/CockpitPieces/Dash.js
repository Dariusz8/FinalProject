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
import {MdSignalWifiStatusbar4Bar} from "react-icons/md";
import {MdSignalWifiStatusbar3Bar} from "react-icons/md";
import {MdSignalWifiStatusbar2Bar} from "react-icons/md";
import {MdSignalWifiStatusbar1Bar} from "react-icons/md";
import {MdSignalWifiStatusbarNull} from "react-icons/md";
import {GiMissileSwarm} from "react-icons/gi";
import {GiTurret} from "react-icons/gi";
import {GiEclipseFlare} from "react-icons/gi";
import { useState } from "react";


const Dash = () => {
    const [gasLevel, setGasLevel] = useState(88);
    const [oxygenLevel, setOxygenLevel] = useState(94);
    const [sheildLevel, setSheildLevel] = useState(100);

    return(
    <>
        <Dashboard>
            <MainScreen/>
            <OxygenStatus>
                <div>
                    <LungIcon><BsLungs/></LungIcon>   {oxygenLevel} %
                </div>
            </OxygenStatus>
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
                <SheildPerc>
                    {sheildLevel} %
                </SheildPerc>
                <PlaneSheildIcons>
                    <TopSheildButton><RxDoubleArrowUp/></TopSheildButton>
                    <GiBubbleField/>
                    <BotSheildButton><RxDoubleArrowDown/></BotSheildButton>
                </PlaneSheildIcons>
            </PlaneSheild>
            <FireControls>
                <FireOptions>
                    <FireIcon><GiMissileSwarm/></FireIcon>
                    <FireIcon><GiTurret/></FireIcon>
                    <FireIcon><GiEclipseFlare/></FireIcon>
                </FireOptions>
                <OptionsStatus>
                    <OptionsStatusIcon><MdSignalWifiStatusbar3Bar/></OptionsStatusIcon>
                    <OptionsStatusIcon><MdSignalWifiStatusbar4Bar/></OptionsStatusIcon>
                    <OptionsStatusIcon><MdSignalWifiStatusbar4Bar/></OptionsStatusIcon>
                </OptionsStatus>
            </FireControls>
        </Dashboard>
    </>
    )
}

export default Dash

const FireOptions = styled.div`
display: flex;
flex-direction: column;
`
const OptionsStatus = styled.div`
display: flex;
flex-direction: column;
`
const OptionsStatusIcon = styled.p`
font-size: 23px;
`
const FireIcon = styled.p`
font-size: 30px;
`
const FireControls = styled.div`
border: solid red 1px;
color:limegreen;
position: fixed;
right:5vw;
top:67vh;
width:25vw;
height: 30vh;
display: flex;
flex-direction: row;
justify-content: space-around;
`
const LungIcon = styled.p`
font-size: 24;
`

const TopSheildButton = styled.button`
background-color: transparent;
border:none;
color:limegreen;
right:5px;
position: relative;
`
const BotSheildButton = styled.button`
background-color: transparent;
border:none;
color:limegreen;
right:5px;
top:2px;
position: relative;
`

const SheildPerc = styled.p`
display: flex;
flex-direction: row;
`
const PlaneSheildIcons = styled.div`
display:flex;
flex-direction:column;
margin-left:5px;`

const PlaneSheild = styled.div`
color:limegreen;
display: flex;
flex-direction: row;
justify-content: space-evenly;
position:fixed;
right:27%;
top:59%;
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
border:solid black 2px;
border-radius: 4px;
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

const OxygenStatus = styled.div`
color:limegreen;
z-index: 1;
position: fixed;
left:26%;
bottom:30%;
`

const Dashboard = styled.div`
clip-path: polygon(31% 50%, 64% 50%, 100% 59%, 100% 100%, 0% 100%, 0% 59%);
position: fixed;
z-index: 100;
width: 100vw;
height: 100vh;
background-color: rgb(20,20,20);
`
