import styled from "styled-components";

const TopLeftFrame = () =>{

    return(
        <Beam>
        </Beam>
    )
}

export default TopLeftFrame

const Beam = styled.div`
background-color:rgb(28,28,28);
color:white;
clip-path: polygon(100% 0%, 100% 4%, 76.2% 47%, 100% 47%, 100% 50%, 71.9% 50%);
position: fixed;
z-index: 100;
width: 100vw;
height: 100vh;
transform: scaleX(-1);
`
  