import styled from "styled-components";

const RightCircleRadar = () => {

    return(
        <Wrapper>
            
        </Wrapper>
    )
}

export default RightCircleRadar;

const Wrapper = styled.div`
position: fixed;
right:10vw;
top:45vh;
width: 200px;
height:200px;
border-radius: 50%;
z-index: 1001;
display: flex;
justify-content: center;
align-items: center;
border: solid rgb(15,15,15) 8px;
background: repeating-conic-gradient(limegreen 0  60deg, transparent 0  180deg);
animation: radar-spinner 5s infinite linear;

@keyframes radar-spinner{
    100%{
        transform: rotate(1turn);
    }
}
`
