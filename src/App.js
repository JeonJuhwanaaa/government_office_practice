import { Routes, Route } from 'react-router-dom';
import Base from "./components/Base";
import Login from './pages/Login/login.js';
import Citizen from './pages/Citizen/citizen.js';
import Registration from './pages/Registration/registration.js';
import DangerElement from './pages/DangerElement/dangerElement.js';
import PublicFacility from './pages/PublicFacility/PublicFacility.js';
import DailyReportManagement from './pages/DailyReportManagement/DailyReportManagement.js';
import SystemManagement from './pages/SystemManagement/SystemManagement.js';
import IdeaOffer from './pages/IdeaOffer/IdeaOffer.js';

export default function App() {
  return (
    <Base>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/citizen" element={<Citizen />} />
            <Route path="/citizen/dangerElement" element={<DangerElement />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/citizen/law/publicFacility" element={<PublicFacility />} />
            <Route path="/citizen/prevent/DailyReportManagement" element={<DailyReportManagement />} />
            <Route path="/systemManagement" element={<SystemManagement />} />
            <Route path="/citizen/ideaOffer" element={<IdeaOffer />} />
        </Routes>
    </Base>
  );
}