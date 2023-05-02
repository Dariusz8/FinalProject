import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import PlanetDetail from "./PlanetDetail";
import ProfilePage from "./ProfilePage";
import QuestSelect from "./QuestSelect";
import Space from "./Space";

const App = () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Home/>}></Route>
      <Route path="/profile" element={<ProfilePage/>}></Route>
      <Route path="/quests" element={<QuestSelect/>}></Route>
      <Route path="/space" element={<Space/>}></Route>
      <Route path="/:id" element={<PlanetDetail/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
