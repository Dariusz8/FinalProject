import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import PlanetDetail from "./PlanetDetail";
import ProfilePage from "./ProfilePage";
import QuestSelect from "./QuestSelect";
import Episode1 from "./Episode1";
import Episode2 from "./Episode2";
import Episode3 from "./Episode3";

const App = () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Home/>}></Route>
      <Route path="/profile" element={<ProfilePage/>}></Route>
      <Route path="/quests" element={<QuestSelect/>}></Route>
      <Route path="/quests/Episode1" element={<Episode1/>}></Route>
      <Route path="/quests/Episode2" element={<Episode2/>}></Route>
      <Route path="/quests/Episode3" element={<Episode3/>}></Route>
      <Route path="/:id" element={<PlanetDetail/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
