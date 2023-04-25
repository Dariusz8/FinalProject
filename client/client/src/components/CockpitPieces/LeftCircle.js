import styled from "styled-components";

const LeftCircle = () => {

    return(
        <Wrapper>
            
        </Wrapper>
    )
}

export default LeftCircle;

const Wrapper = styled.div`
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
background: repeating-conic-gradient(limegreen 0  60deg, rgb(13,13,13) 0  180deg);
animation: radar-spinner 5s infinite linear;

@keyframes radar-spinner{
    100%{
        transform: rotate(1turn);
    }
}
`
