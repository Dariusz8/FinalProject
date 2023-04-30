import { useEffect, useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import Hyperjump from './Hyperjump';

const QuestSelect = () =>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [backgroundPic, setBackgroundPic] = useState([]);
    const [giveTitle, setGiveTitle] = useState(false);

    const handleHover = () => {
        setGiveTitle(true);
    };

    useEffect(() => {
        const fetchData = async() =>{
            try{
                const res = await fetch("/quests");
                const resData = await res.json(); 
                await setBackgroundPic(resData.data)
            } catch(err){
            console.log(err)
        }
    }
        fetchData();
    }, []);
    // useEffect(() => {
    //     console.log(backgroundPic);
    //   }, [backgroundPic]);

    if (isLoading) return <div><Hyperjump/></div>
    
    if(!isAuthenticated){
        return(<Navigate to="/"/>)
    }

    return(
        <Wrapper>
            <PicContainer>
            {backgroundPic.map((item) =>{
                return(
                    <>
                    
                    <NavLinky key={item._id} to={`/space`}>
                        
                    <StyledImage alt="Cover picture of the quests which are possible"
                        key={item._id} 
                        cloudName="dly85se71" 
                        publicId={item.url}
                        onMouseEnter={handleHover}
                        onMouseLeave={() => setGiveTitle(false)}/>
                        
                    </NavLinky>
                    {giveTitle && <QuestTitle>{item.name}</QuestTitle>
                        }
                    </>
                )
            })
            }
            </PicContainer>
        </Wrapper>
    )
}

const NavLinky = styled(NavLink)`
text-decoration: none;
display: contents;
`

const StyledImage = styled(Image)`
    transition: transform 1s ease-in-out;
    &:hover {
        transform: scale(1.1);
        border: 2% solid transparent;
    }
`;

const QuestTitle = styled.p`
position: relative;
left:-400px;
top:50vh;
color:white;
font-size: 26px;
z-index: 100;
`

const PicContainer = styled.div`
display: flex; 
flex-direction: row;
flex-wrap: nowrap;
height: 100vh;
width: 100vw;
overflow-x: scroll;
overflow-y: hidden; 
white-space: nowrap;
background-color: black;
`

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
margin:0px;
`

const TheHtml= styled.html`

`

export default QuestSelect;

