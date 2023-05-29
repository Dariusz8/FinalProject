import styled from "styled-components";
import {BsSpeedometer2} from "react-icons/bs";

const LeftCircle = () => {

    return(
        <Wrapper>
            - - - -
            <SpeedIcon>
                <BsSpeedometer2/>
            </SpeedIcon>
        </Wrapper>
    )
}

export default LeftCircle;

const SpeedIcon = styled.div`
position:fixed;
top:59%;
`
const Wrapper = styled.div`
background-color: rgb(13,13,13);
position: fixed;
left:10vw;
top:45vh;
width: 200px;
height:200px;
border-radius: 50%;
z-index: 1000;
display: flex;
justify-content: center;
align-items: center;
border: solid rgb(15,15,15) 8px;
color:limegreen;
`
