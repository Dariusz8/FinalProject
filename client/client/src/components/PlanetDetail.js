import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PlanetDetail = () => {
    const {id} = useParams();

    const [state,setState] = useState(null);
return (
    <>
        <p>He lives</p>
    </>
)
}

export default PlanetDetail;