
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import DoctorsPage from './pages/Doctors';
import ContactPage from './pages/Contact';
import About from './pages/About';
import ProfilePage from './pages/MyProfile';
import LogIn from './pages/Login';
import NavBar from './components/Navbar';
import Appointments from './pages/Appointment';
import MyAppointments from './pages/MyAppointment';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:speciality" element={<DoctorsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-profile" element={<ProfilePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/appointments/:doctorId" element={<Appointments />} />

        <Route path="/my-appointments" element={<MyAppointments />} />



      </Routes>
      <Footer />
    </>
  )
}

export default App
