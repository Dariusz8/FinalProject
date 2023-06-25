import styled from "styled-components";
import {Image} from 'cloudinary-react';

const AttitudeMeter = () => {

    return(
        <Wrapper>
            <Border cloudName="dly85se71" publicId="https://res.cloudinary.com/dly85se71/image/upload/v1687656566/altitude_meter_frame_ia4xks.png"/>
            <Outter cloudName="dly85se71" publicId="https://res.cloudinary.com/dly85se71/image/upload/v1687656578/altitude_meter_outer_lnwhnp.png"/>
            <Inner cloudName="dly85se71" publicId="https://res.cloudinary.com/dly85se71/image/upload/v1687656588/altitude_meter_middle_cx1quw.png"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
position: fixed;
max-width: 200px;
max-height: 200px;
left: 16vw;
bottom:2vh;
`
const Border = styled(Image)`
max-width: 200px;
max-height: 200px;
position: fixed;
left: 16vw;
bottom:2vh;
`
const Outter = styled(Image)`
max-width: 160px;
max-height: 160px;
left: 17.3vw;
bottom:4.3vh;
position: fixed;
`
const Inner = styled(Image)`
max-width: 126px;
max-height: 126px;
left: 18.5vw;
bottom:6.3vh;
position: fixed;
animation: smallRotate 1s infinite linear;
@keyframes smallRotate{
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(5deg);
    }
    100%{
        transform: rotate(-5deg);
    }
}
`

export default AttitudeMeter