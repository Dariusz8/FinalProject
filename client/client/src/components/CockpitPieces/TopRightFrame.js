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
clip-path: polygon(100% 0%, 100% 4%, 76.2% 47%, 100% 47%, 100% 50%, 71.9% 50%);
position: fixed;
z-index: 100;
width: 100vw;
height: 100vh;
`