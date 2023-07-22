import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import IntroPage from "./pages/IntroPage/IntroPage";
import MakePinPage from "./pages/MakePinPage/MakePinPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import PinDetailPage from "./pages/PinDetailPage/PinDetailPage";

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
