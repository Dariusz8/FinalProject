import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Navigate } from "react-router-dom";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { BsFillGearFill } from "react-icons/bs"
import { NavLink } from "react-router-dom";
import {Image} from "cloudinary-react";

const MainScreen = () => {
    const {id} = useParams();
    const [planetInfo,setPlanetInfo] = useState([]);
    const [Script, SetScript] = useState(true);
    const [Residents, SetResidents] = useState(false);
    const [Advance, SetAdvance] = useState(false);
    const [r2d2, setR2d2] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [qAnswer, setQAnswer] = useState("gungan")
    const [redirectToSpace, setRedirectToSpace] = useState(false);
    const residentInfo = 
        {
        name: "R2-D2",
        height: "96",
        mass: "32",
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a",
        homeworld: "naboo",
        films: ["A New Hope","The Empire Strikes Back",
        "Return of the Jedi",
        "The Phantom Menace",
        "Attack of the Clones",
        "Revenge of the Sith"],
        picture_url: "https://res.cloudinary.com/dly85se71/image/upload/v1683932300/R2D2_fewoic.png"
        }
    // useEffect(()=>{
    //     const fetchPlanetData = async() =>{
    //         try{
    //             const res = await fetch(`/${id}`);
    //             const resData = await res.json();
    //             await setPlanetInfo(resData.data);
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     fetchPlanetData();
    // }, [id])

    const handleScriptButtonClick = () => {
        SetResidents(false);
        SetAdvance(false);
        setR2d2(false);
        SetScript(true);
      };

      const handleResidentsButtonClick = () =>{
        SetAdvance(false);
        SetScript(false);
        SetResidents(true);
      }

      const handleAdvanceButtonClick = () =>{
        SetResidents(false);
        SetScript(false);
        setR2d2(false);
        SetAdvance(true);
      }

      const handleAnswerInputChange = (event) => {
        setUserAnswer(event.target.value);
      };

      const handleAnswerSubmit = () => {
        if (userAnswer.toLowerCase() === qAnswer.toLowerCase()) {
            setRedirectToSpace(true);
        
        } else {
          console.log("Answer is incorrect");
        }
      };

      const handler2d2 = () => {
        SetResidents(false);
        setR2d2(!r2d2);
        console.log("r2d2 hit")
      }

    return(
        <Wrapper>
            {
                Script && (
                <ScreenText> 
                    Darth Sidious orders the trade federation to invade Naboo, after blocking all trades coming in and out from the planet. The galactic republic's Supreme Chancellor dispatches Jedi Master Qui-Gon Jinn and his apprentice, Obi-Wan Kenobi to resolve the matter.
                    The Jedis rescue Jar Jar Binks whom leads them to the Gungan people underwater at the core of the planet. They ask the Gungans to help the surface dwellers from the droid attack. The trio reach the surface and rescue Queen Amidala and her escort. They try attempt to flee to the republic's capital planet, Corusant.
                </ScreenText>
            )}
            {
                Residents && (
                    <ScreenText>
                        <R2Button onClick={handler2d2}>{residentInfo.name}</R2Button>
                    </ScreenText>
            )}
            {
                r2d2 && (
                    <>
                    <ScreenText>
                        <div>Name:{residentInfo.name}</div>
                        <div>Height:{residentInfo.height}</div>
                        <div>Mass:{residentInfo.mass}</div>
                        <div>Gender:{residentInfo.gender}</div>
                        <div>Hair color:{residentInfo.hair_color}</div>
                        <div>Skin color:{residentInfo.skin_color}</div>
                        <div>Eye color:{residentInfo.eye_color}</div>
                        <div>Birth Year:{residentInfo.birth_year}</div>
                        <div>Homeworld:{residentInfo.homeworld}</div>
                    </ScreenText>
                    <StyledImage cloudName="dly85se71" publicId={residentInfo.picture_url} />
                    </>
                )
            }
            {
                Advance && (
                    <>
                    <ScreenText>
                    What species is Jar Jar Binks?
                    </ScreenText>
                        <AnswerInput value={userAnswer} onChange={handleAnswerInputChange} />
                        <SubmitButton onClick={handleAnswerSubmit}>Verify</SubmitButton>
                    </>
                )
            }
            <BottomIcons>
                <ScriptButton onClick={handleScriptButtonClick}><BsReverseListColumnsReverse/></ScriptButton>
                <ResidentButton onClick={handleResidentsButtonClick}><BsFillPersonVcardFill/></ResidentButton>
                <AdvanceButton onClick={handleAdvanceButtonClick}><BsFillRocketTakeoffFill/></AdvanceButton>
                <ProfileButton><NavLinky to={`/profile`}><BsFillGearFill/></NavLinky></ProfileButton>
            </BottomIcons>
            {redirectToSpace && <Navigate to="/space" />}
        </Wrapper>
    )
}

export default MainScreen

const StyledImage = styled(Image)`
position:fixed;
left: 700px;
bottom:100px;
width:230px;
height:230px;
z-index:100000;
`

const R2Button = styled.button`
background-color:transparent;
color:limegreen;
border-radius: 6px;
`

const SubmitButton = styled.button`
background-color:transparent;
color:limegreen;
`

const AnswerInput = styled.input`
border:transparent;
background-color: transparent;
color:limegreen;
margin-top: 2%;
margin-left:5%;
margin-right: 1%;
`

const ScriptButton = styled.button`
background-color: transparent;
color: limegreen;
font-size: 30px;
`
const ResidentButton = styled.button`
background-color: transparent;
color: limegreen;
font-size: 30px;
`
const AdvanceButton = styled.button`
background-color: transparent;
color: limegreen;
font-size: 30px;
`
const ProfileButton = styled.button`
font-size: 30px;
background-color: transparent;
color: limegreen;
`

const NavLinky = styled(NavLink)`
   text-decoration: none;
   color: limegreen;
    &:hover {
        text-decoration: none;
    }
    &.active {
        color:limegreen;
    }
`

const BottomIcons = styled.div`
display: flex;
position: fixed;
bottom: 2vh;
left: 34vw;
gap: 20px;
width: 30vw;
justify-content: space-around;
`

const Wrapper = styled.div`
position: fixed;
border: solid 8px rgb(10,10,10);
border-bottom: transparent;
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
left:32vw;
bottom:10vh;
width: 35vw;
height: 30vh;
border-radius:6px;
overflow: scroll;
`

const ScreenText = styled.p`
color: rgb(43,255,0);
padding-left:1vw;
padding-right: 1vw;
font-weight: 26px;
`