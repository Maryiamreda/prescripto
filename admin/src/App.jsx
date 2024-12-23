
import { useContext } from 'react';
import './App.css'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './context/appContext';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/navBar';
function App() {
  const { aToken } = useContext(AdminContext)
  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
    </div>
  ) : (<div>
    <Login />
    <ToastContainer />
  </div>)
}

export default App
