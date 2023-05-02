import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const MainScreen = () => {
    const {id} = useParams();
    const [planetInfo,setPlanetInfo] = useState([]);

    useEffect(()=>{
        const fetchPlanetData = async() =>{
            try{
                const res = await fetch(`/${id}`);
                const resData = await res.json();
                await setPlanetInfo(resData.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchPlanetData();
    }, [id])

    return(
        <Wrapper>
            {planetInfo.script && (
            <ScreenText> 
                {planetInfo.script}
            </ScreenText>
            )}
        </Wrapper>
    )
}

export default MainScreen

const Wrapper = styled.div`
position: fixed;
border: solid 8px rgb(10,10,10);
background: radial-gradient(circle at 100% 100%, transparent 0, transparent 3px, transparent 3px) 0% 0%/8px 8px no-repeat,
            radial-gradient(circle at 0 100%, transparent 0, transparent 3px, transparent 3px) 100% 0%/8px 8px no-repeat,
            radial-gradient(circle at 100% 0, transparent 0, transparent 3px, transparent 3px) 0% 100%/8px 8px no-repeat,
            radial-gradient(circle at 0 0, transparent 0, transparent 3px, transparent 3px) 100% 100%/8px 8px no-repeat,
            linear-gradient(transparent, transparent) 50% 50%/calc(100% - 10px) calc(100% - 16px) no-repeat,
            linear-gradient(transparent, transparent) 50% 50%/calc(100% - 16px) calc(100% - 10px) no-repeat,
            linear-gradient(0deg, #000000 0%, #505050 100%);
border-radius: 8px;
padding: 9px;
box-sizing: border-box;
border-bottom: none;
left:32vw;
bottom:10vh;
width: 35vw;
height: 20vh;
border-radius:6px;
overflow: scroll;
`

const ScreenText = styled.p`
color: rgb(43,255,0);
padding-left:1vw;
padding-right: 1vw;
font-weight: 26px;
`