import { useEffect, useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const QuestSelect = () =>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [backgroundPic, setBackgroundPic] = useState([]);

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

    if (isLoading) return <h2>Loading...</h2>
    
    if(!isAuthenticated){
        return(<Navigate to="/"/>)
    }

    return(
        <Wrapper>
            <PicContainer>
            {backgroundPic.map((item) =>{
                return(
                    <NavLinky to={`/space`}>
                    <StyledImage key={item._id} cloudName="dly85se71" publicId={item.url}/>
                    </NavLinky>
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


const PicContainer = styled.div`
display: flex; 
flex-direction: row;
flex-wrap: nowrap;
height: 100vh;
width: 100vw;
overflow-x: scroll;
overflow-y: hidden; 
white-space: nowrap;
`

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
margin:0px;
`

export default QuestSelect;