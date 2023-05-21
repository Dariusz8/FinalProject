import styled from "styled-components";
import { GiSpaceship } from "react-icons/gi";

const RightCircle = () => {

    return(
        <Wrapper>
            <MyPlane>
                <GiSpaceship/>
            </MyPlane>
        </Wrapper>
    )
}

export default RightCircle;



const Wrapper = styled.div`
background-color: black;
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
const MyPlane = styled.p`
font-size: 70px;
position: fixed;
color:white;
background-color: transparent;
`