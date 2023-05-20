import styled from "styled-components";

const TopRightFrame = () =>{
        
    return(
            <Beam>
            </Beam>
        )
}

export default TopRightFrame

const Beam = styled.div`
background-color:rgb(28,28,28);
color:white;
clip-path: polygon(100% 0%, 100% 4%, 79% 55%, 100% 74%, 100% 79%, 78% 55%);
position: fixed;
z-index: 100;
width: 100vw;
height: 100vh;
`