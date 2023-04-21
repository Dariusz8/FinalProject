import styled from "styled-components";

const Dash = () => {

    return(
        <Dashboard>
        </Dashboard>
    )
}

export default Dash

const Dashboard = styled.div`
clip-path: polygon(32.2% 40%, 61.7% 40%, 100% 50%, 100% 100%, 85% 100%, 15% 100%, 0% 100%, 0% 50%);
position: fixed;
z-index: 100;
width: 100vw;
height: 100vh;
background-color: rgb(20,20,20);
`