import styled from "styled-components";
import TopRightFrame from "./CockpitPieces/TopRightFrame";
import TopLeftFrame from "./CockpitPieces/TopLeftFrame";
import Dash from "./CockpitPieces/Dash";

const Cockpit = () =>{

    return(
        <Wrapper>
        <TopRightFrame/>
        <TopLeftFrame/>
        <Dash/>
        </Wrapper>
    )
}

export default Cockpit;

const Test = styled.div`
color:pink;
border:orange;
top: 50%;
left:50%;
position: fixed;
`
const Wrapper = styled.div`
z-index:100;
`