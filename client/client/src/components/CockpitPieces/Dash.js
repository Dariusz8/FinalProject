import styled from "styled-components";
import MainScreen from "./MainScreen";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { BsFillGearFill } from "react-icons/bs"
import { BsFillCircleFill } from "react-icons/bs"
import { BsAirplaneFill } from "react-icons/bs";

const Dash = () => {

    return(
    <>
        <Dashboard>
            <MainScreen/>
            <BottomIcons>
                <BottomIconButtons><BsReverseListColumnsReverse/></BottomIconButtons>
                <BottomIconButtons><BsFillPersonVcardFill/></BottomIconButtons>
                <BottomIconButtons><BsFillRocketTakeoffFill/></BottomIconButtons>
                <BottomIconButtons><BsFillGearFill/></BottomIconButtons>
            </BottomIcons>
            <RightCircle><BsFillCircleFill/></RightCircle>
        </Dashboard>
        </>
    )
}

export default Dash

const RightCircle = styled.div`
position: fixed;
color:pink;
background-color: pink;
left:40vw;
height:40vh;
width: 100px;
height:100px;
z-index: 10000;
`

const Dashboard = styled.div`
clip-path: polygon(31% 50%, 64% 50%, 100% 59%, 100% 100%, 0% 100%, 0% 59%);
position: fixed;
z-index: 100;
width: 100vw;
height: 100vh;
background-color: rgb(20,20,20);
`

const BottomIcons = styled.div`
display: flex;
position: fixed;
bottom: 5vh;
left: 35vw;
gap: 20px;
width: 30vw;
justify-content: space-around;
`

const BottomIconButtons = styled.button`
background-color: transparent;
color: limegreen;
height:25px;
width: 35px;
`