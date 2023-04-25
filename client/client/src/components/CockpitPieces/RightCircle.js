import styled from "styled-components";
import { BsAirplaneFill } from "react-icons/bs";

const RightCircle = () => {

    return(
        <Wrapper>
            <MyPlane>
                <BsAirplaneFill/>
            </MyPlane>
        </Wrapper>
    )
}

export default RightCircle;

const Wrapper = styled.div`
background-color: rgb(13,13,13);
position: fixed;
right:10vw;
top:45vh;
width: 200px;
height:200px;
border-radius: 50%;
z-index: 1000;
display: flex;
justify-content: center;
align-items: center;
border: solid rgb(15,15,15) 8px;
`
const MyPlane = styled.image`
position: fixed;
color:limegreen;
background-color: transparent;
`