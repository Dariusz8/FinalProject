import styled from "styled-components";
import { useParams,Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';

const PlanetDetail = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const {id} = useParams();
    const [state,setState] = useState(null);

    if (isLoading) return <h2>Loading...</h2>

    if(!isAuthenticated){
        return(<Navigate to="/"/>)
        }
        
return (
    <>
        <p>He lives</p>
    </>
)
}

export default PlanetDetail;