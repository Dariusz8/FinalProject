import styled from "styled-components";
import MainScreen from "./MainScreen";

const Dash = () => {

    return(
    <>
        <Dashboard>
            <MainScreen/>
        </Dashboard>
        
        </>
    )
}

export default Dash

const Dashboard = styled.div`
clip-path: polygon(31% 50%, 64% 50%, 100% 59%, 100% 100%, 0% 100%, 0% 59%);
position: fixed;
z-index: 100;
width: 100vw;
height: 100vh;
background-color: rgb(20,20,20);
`