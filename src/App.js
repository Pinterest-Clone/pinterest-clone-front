import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/home/HomePage";
import IntroPage from "./pages/introPage/IntroPage";
import MakePinPage from "./pages/makePinPage/MakePinPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import ProfileEditPage from "./pages/profileEditPage/ProfileEditPage";
import PinDetailPage from "./pages/pinDetailPage/PinDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<IntroPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="make" element={<MakePinPage />} />
        <Route path="detail/:pinid" element={<PinDetailPage />} />
        <Route path="profile/:userid" element={<ProfilePage />} />
        <Route path="profile/edit/:userid" element={<ProfileEditPage />} />
      </Route>
    </Routes>
  );
}

export default App;
