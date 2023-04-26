import styled from "styled-components";
import TopRightFrame from "./CockpitPieces/TopRightFrame";
import TopLeftFrame from "./CockpitPieces/TopLeftFrame";
import Dash from "./CockpitPieces/Dash";
import RightCircle from "./CockpitPieces/RightCircle";
import RightCircleRadar from "./CockpitPieces/RightCircleRadar";
import LeftCircle from "./CockpitPieces/LeftCircle";


const Cockpit = () =>{

    return(
        <Wrapper>
        <TopRightFrame/>
        <TopLeftFrame/>
        <RightCircleRadar/>
        <RightCircle/>
        <LeftCircle/>
        <Dash/>
        </Wrapper>
    )
}

export default Cockpit;

const Wrapper = styled.div`
z-index:100;
`