import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Navigate} from "react-router-dom";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { BsFillGearFill } from "react-icons/bs"
import { NavLink } from "react-router-dom";
import {Image} from "cloudinary-react";

const MainScreen = () => {
    const {id} = useParams();
    const [script, setScript] = useState(true);
    const [residents, setResidents] = useState(false);
    const [advance, setAdvance] = useState(false);
    const [oneCharacter, setOneCharacter] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [qAnswer, setQAnswer] = useState("gungan")
    const [redirectToSpace, setRedirectToSpace] = useState(false);
    const [allCharacters, setAllCharacters] = useState([])
    
    useEffect(()=>{
        const fetchCharacterData = async() =>{
            try{
                const res = await fetch(`/allcharacters`);
                const resData = await res.json();
                await setAllCharacters(resData.data);
                //console.log(resData.data)
            }catch(err){
                console.log(err.message)
            }
        }
        fetchCharacterData();
        
    }, [])

    const handleScriptButtonClick = () => {
        setResidents(false);
        setAdvance(false);
        setOneCharacter(false);
        setScript(true);
      };

      const handleResidentsButtonClick = () =>{
        setOneCharacter(false);
        setAdvance(false);
        setScript(false);
        setResidents(true);
      }

      const handleAdvanceButtonClick = () =>{
        setResidents(false);
        setScript(false);
        setOneCharacter(false);
        setAdvance(true);
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

      const handleCharacters = (character) => {
        setResidents(false);
        setOneCharacter(character);
      }

    return(
        <Wrapper>
            {
                script && (
                <ScreenText> 
                    Darth Sidious orders the trade federation to invade Naboo, after blocking all trades coming in and out from the planet. The galactic republic's Supreme Chancellor dispatches Jedi Master Qui-Gon Jinn and his apprentice, Obi-Wan Kenobi to resolve the matter.
                    The Jedis rescue Jar Jar Binks whom leads them to the Gungan people underwater at the core of the planet. They ask the Gungans to help the surface dwellers from the droid attack. The trio reach the surface and rescue Queen Amidala and her escort. They try attempt to flee to the republic's capital planet, Corusant.
                </ScreenText>
            )}
            {
                residents && (
                    <ScreenText>
                        {allCharacters.map(item => {
                            return(
                            <CharacterButton key={item._id} onClick={() => handleCharacters(item)}>
                                {item.name}
                            </CharacterButton>
                            )
                        })
                        }
                        
                    </ScreenText>
            )}
            {
                oneCharacter && (
                    <>
                    <ScreenText>
                        <div>Name:{oneCharacter.name}</div>
                        <div>Height:{oneCharacter.height}</div>
                        <div>Mass:{oneCharacter.mass}</div>
                        <div>Gender:{oneCharacter.gender}</div>
                        <div>Hair color:{oneCharacter.hair_color}</div>
                        <div>Skin color:{oneCharacter.skin_color}</div>
                        <div>Eye color:{oneCharacter.eye_color}</div>
                        <div>Birth Year:{oneCharacter.birth_year}</div>
                        <div>Homeworld:{oneCharacter.homeworld}</div>
                    </ScreenText>
                    <StyledImage cloudName="dly85se71" publicId={oneCharacter.picture_url} />
                    </>
                )
            }
            {
                advance && (
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
            {redirectToSpace && <Navigate to={-1} />}
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

const CharacterButton = styled.button`
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