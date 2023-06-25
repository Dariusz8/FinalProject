import styled from "styled-components";
import MainScreen from "./MainScreen";
import AttitudeMeter from "./AttitudeMeter";
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
    const [topButtonClicked, setTopButtonClicked] = useState(false);
    const [bottomButtonClicked, setBottomButtonClicked] = useState(false);

    return(
        <Dashboard>
            <MainScreen/>
            <AttitudeMeter/>
            <OxygenStatus>
                    <LungIcon><BsLungs/></LungIcon>   
                    {oxygenLevel} %
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
            <FuelStatus>
                <FuelIcon><BsFuelPumpFill/></FuelIcon>
                {gasLevel} %
            </FuelStatus>
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
                    <TopSheildButton onClick={() => setTopButtonClicked(!topButtonClicked)}><RxDoubleArrowUp/></TopSheildButton>
                    <PlaneSheildIcon><GiBubbleField/></PlaneSheildIcon>
                    <BotSheildButton onClick={() => setBottomButtonClicked(!bottomButtonClicked)}><RxDoubleArrowDown/></BotSheildButton>
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
                    <OptionsStatusIcon><MdSignalWifiStatusbar1Bar/></OptionsStatusIcon>
                </OptionsStatus>
            </FireControls>
        </Dashboard>
    )
}

const FireOptions = styled.div`
display: flex;
flex-direction: column;
`
const OptionsStatus = styled.div`
display: flex;
flex-direction: column;
`
const OptionsStatusIcon = styled.p`
margin-top:0px;
font-size: 35px;
`
const FireIcon = styled.p`
margin-top:0px;
font-size: 35px;
`
const FireControls = styled.div`
color:limegreen;
position: fixed;
right:5vw;
top:73vh;
width:28vw;
height: 20vh;
display: flex;
flex-direction: row;
justify-content: space-around;
`
const LungIcon = styled.p`
font-size: 24px;
position: relative;
bottom:4vh;
`
const OxygenStatus = styled.div`
color:limegreen;
z-index: 1;
position: fixed;
left:26%;
bottom:30%;
display:flex;
flex-direction: row;
justify-content: space-between;
width:60px;
height:40px;
`
const PlaneSheildIcon = styled.p`
margin:0px;
font-size: 30px;
`
const TopSheildButton = styled.button`
color: ${topButtonClicked => topButtonClicked.isActive ? "blue" : "limegreen"};
background-color: transparent;
border:none;
position: relative;
`
const BotSheildButton = styled.button`
color: ${bottomButtonClicked => bottomButtonClicked.isActive ? 'blue' : 'limegreen'};
background-color: transparent;
border:none;
position: relative;
`
const SheildPerc = styled.p`
display: flex;
flex-direction: row;
margin-bottom: 4vh;
`
const PlaneSheildIcons = styled.div`
display:flex;
flex-direction:column;
margin-left:5px;
`
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
max-width: 270px;
max-height: 60px;
position: fixed;
top:52%;
left:40%;
`
const FuelStatus = styled.div`
color:limegreen;
display: flex;
flex-direction: row;
justify-content: space-between;
max-width:60px;
max-height:40px;
position:fixed;
left:26%;
top:60%;
`
const FuelIcon = styled.p`
font-size: 24px;
position: relative;
bottom:4vh;
`
const PhoneIcons = styled.div`
color:limegreen;
display: flex;
flex-direction: column;
justify-content: space-between;
height:6vh;
position:fixed;
right:38%;
top:53%;
`

const MicIcons = styled.div`
color:limegreen;
display: flex;
flex-direction: column;
justify-content: space-between;
height:6vh;
position:fixed;
right:35%;
top:53%;
`
const Dashboard = styled.div`
clip-path: polygon(31% 50%, 64% 50%, 100% 59%, 100% 100%, 0% 100%, 0% 59%);
position: fixed;
z-index: 100;
width: 100vw;
height: 100vh;
background-color: rgb(20,20,20);
`
export default Dash