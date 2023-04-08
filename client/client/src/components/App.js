import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <h2>Loading...</h2>

  return (
    <>
    <LoginButton />
    <LogoutButton />
    <Profile />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
