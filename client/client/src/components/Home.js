import styled from 'styled-components';
import {Image} from 'cloudinary-react';

// Used to get boxshadow input
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// const STAR_COUNT = 100
// let result = ""
// for(let i = 0; i < STAR_COUNT; i++){
//     result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
// }
// console.log(result.substring(0, result.length - 1))

const Home = () => {
    return(
        <>
        <AllPlanets>
        <Image cloudName="dly85se71" publicId="https://res.cloudinary.com/dly85se71/image/upload/v1680995979/n0pb8bpdgnjqmt31p9lrvkmrsq-aa79d268d2480d7c647c7451900dda9a_eaogqm.png" style={{height: '90px', width: '90px'}}/>
        <Image cloudName="dly85se71" publicId="https://res.cloudinary.com/dly85se71/image/upload/v1680996027/pngaaa.com-1494112_dat2te.png" style={{height: '90px', width: '90px'}}/>
        <Image cloudName="dly85se71" publicId="https://res.cloudinary.com/dly85se71/image/upload/v1680995790/Coruscant_f6yipp.png" style={{height: '90px', width: '90px'}}/>
        <Image cloudName="dly85se71" publicId="https://res.cloudinary.com/dly85se71/image/upload/v1680995573/Tatooine_z0rkon.png" style={{height: '90px', width: '90px'}}/>
        </AllPlanets>
        <Box>
        <Stargazing>
        </Stargazing>
        </Box>
        </>
    )
}

export default Home;

const AllPlanets = styled.div`
position:absolute;
left:45%;
top:50%;
`

const Stargazing = styled.div`
background-color: white;
position: fixed;
top: 50%;
left: 50%;
height: 1px;
width: 1px;
border-radius: 50%;
box-shadow: -36vw -24vh 1px 0px #fff,-36vw 30vh 2px 3px #fff,-15vw 23vh 1px 2px #fff,40vw 21vh 1px 0px #fff,-36vw 26vh 0px 2px #fff,-17vw 4vh 0px 0px #fff,-35vw 50vh 3px 3px #fff,-11vw -24vh 2px 0px #fff,-38vw -27vh 2px 1px #fff,-32vw -40vh 1px 0px #fff,-41vw 19vh 0px 1px #fff,7vw 25vh 1px 0px #fff,1vw 22vh 1px 2px #fff,9vw -1vh 1px 2px #fff,47vw 19vh 1px 3px #fff,-44vw 48vh 3px 3px #fff,-37vw 15vh 0px 1px #fff,14vw 32vh 1px 2px #fff,33vw 0vh 2px 2px #fff,2vw 1vh 1px 3px #fff,43vw 10vh 1px 3px #fff,28vw 34vh 1px 0px #fff,14vw 16vh 0px 3px #fff,15vw 40vh 1px 0px #fff,-27vw 28vh 2px 0px #fff,-11vw 2vh 1px 2px #fff,-49vw 6vh 2px 0px #fff,-13vw -27vh 1px 0px #fff,27vw -6vh 0px 3px #fff,38vw 44vh 0px 3px #fff,14vw -34vh 3px 3px #fff,-21vw -14vh 3px 1px #fff,22vw 41vh 2px 1px #fff,25vw -5vh 1px 1px #fff,28vw -17vh 3px 2px #fff,28vw -7vh 3px 2px #fff,-49vw 46vh 1px 3px #fff,7vw 33vh 0px 2px #fff,-6vw 28vh 3px 2px #fff,50vw -1vh 1px 0px #fff,-34vw -48vh 3px 3px #fff,-37vw 13vh 2px 0px #fff,6vw -22vh 2px 3px #fff,34vw 1vh 0px 3px #fff,8vw -50vh 3px 1px #fff,38vw -46vh 1px 2px #fff,-29vw 36vh 0px 0px #fff,-34vw 15vh 2px 3px #fff,-3vw 0vh 1px 0px #fff,11vw 0vh 0px 2px #fff,5vw -40vh 2px 3px #fff,38vw 24vh 3px 0px #fff,-8vw -32vh 2px 3px #fff,-36vw 15vh 1px 1px #fff,-9vw -40vh 1px 2px #fff,24vw 41vh 2px 1px #fff,-28vw -28vh 0px 2px #fff,-48vw -43vh 0px 3px #fff,36vw 24vh 0px 2px #fff,-25vw 32vh 3px 0px #fff,-16vw -42vh 0px 0px #fff,-11vw -35vh 0px 2px #fff,-19vw 31vh 3px 0px #fff,-12vw 36vh 1px 1px #fff,49vw -48vh 3px 1px #fff,-40vw 47vh 2px 2px #fff,-24vw -17vh 1px 0px #fff,-44vw -17vh 1px 3px #fff,-36vw -12vh 1px 2px #fff,-18vw 32vh 3px 0px #fff,-20vw -21vh 1px 0px #fff,-14vw 27vh 3px 3px #fff,15vw -25vh 0px 1px #fff,-38vw -36vh 2px 2px #fff,45vw 28vh 1px 2px #fff,-39vw 48vh 3px 1px #fff,-47vw -29vh 1px 3px #fff,1vw -18vh 3px 2px #fff,20vw -35vh 3px 3px #fff,-17vw 39vh 3px 3px #fff,5vw -6vh 3px 1px #fff,-7vw -18vh 2px 2px #fff,34vw -30vh 0px 3px #fff,29vw -16vh 0px 1px #fff,-7vw 48vh 1px 1px #fff,-36vw -19vh 0px 3px #fff,14vw 38vh 3px 1px #fff,50vw 32vh 2px 1px #fff,-42vw -24vh 1px 3px #fff,-2vw 6vh 0px 1px #fff,31vw -40vh 3px 0px #fff,-1vw 5vh 1px 2px #fff,50vw -5vh 0px 0px #fff,-22vw -14vh 2px 3px #fff,24vw 34vh 2px 3px #fff,-4vw -27vh 1px 0px #fff,-19vw -43vh 0px 1px #fff,25vw 27vh 2px 3px #fff,7vw -14vh 3px 0px #fff,-2vw 14vh 2px 0px #fff;
animation: zoom 8s alternate ease-in-out infinite;
@keyframes zoom {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.5);
    }
}
`


const Box = styled.div`
background-color:black;
height:100vh;
width:100vw;`