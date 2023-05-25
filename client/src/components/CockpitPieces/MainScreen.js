import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Navigate} from "react-router-dom";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { BsFillGearFill } from "react-icons/bs"
import { NavLink } from "react-router-dom";
import {Image} from "cloudinary-react";
import { useAuth0 } from '@auth0/auth0-react';

const MainScreen = () => {
    const {id} = useParams();
    const { isAuthenticated, user } = useAuth0();
    const [script, setScript] = useState(true);
    const [residents, setResidents] = useState(false);
    const [advance, setAdvance] = useState(false);
    const [oneCharacter, setOneCharacter] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [redirectToSpace, setRedirectToSpace] = useState(false);
    const [allCharacters, setAllCharacters] = useState([]);
    const [planetInfo, setPlanetInfo] = useState([]);
    const [checkProg, setCheckProg] = useState([]);
    
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

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const res = await fetch(`/${id}`);
                const resData = await res.json();
                await setPlanetInfo(resData.data);
            }catch(err){
                console.log(err.message)
            }
        };
        fetchData();
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

      useEffect(() =>{
        const fetchUserData = async() =>{
            try{
                const res = await fetch(`/user/${user.email}`);
                const resData = await res.json(); 
                await setCheckProg(resData.data)
                //console.log("profileChecker", resData.data)
                //console.log(resData.data.email)
            }catch(err){
                console.log(err.message);
            }
        }
        fetchUserData();
    }, [isAuthenticated])

    const updatedUser = { 
        "email":`${checkProg.email}`,
        [planetInfo.name]: "true"};

    const handlePatchUser = async () => {
        try {
        const response = await fetch("/user", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser)
        });
        if (response.ok) {
            console.log("Patched up")
        } else {
            console.log("Patch failed :(")
        }
        } catch (error) {
        console.log(error.message);
        }
      };

      const handleAnswerSubmit = () => {
        if (userAnswer.toLowerCase() === planetInfo.answer.toLowerCase()) {
            setRedirectToSpace(true);
            handlePatchUser();
        
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
                    {planetInfo.script}
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
                    {planetInfo.question}
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