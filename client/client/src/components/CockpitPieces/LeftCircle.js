import styled from "styled-components";

const LeftCircle = () => {

    return(
        <Wrapper>
            - - - -
        </Wrapper>
    )
}

export default LeftCircle;

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
