import { useContext, useState } from 'react';
import Logo from '../assets/assets_frontend/logo.svg';
import ProfilePic from '../assets/assets_frontend/profile_pic.jpg';
import MenuIcon from '../assets/assets_frontend/menu_icon.svg';
import CrossIcon from '../assets/assets_frontend/cross_icon.png';

import DropDownIcon from "../assets/assets_frontend/dropdown_icon.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const NavBar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState(false);

    const { token, setToken } = useContext(AppContext)
    const logout = () => {
        setToken('');
        localStorage.removeItem('token')
    }
    const toggleMenu = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation(); // Prevent event propagation
        setSelectedOption(!selectedOption);
    };

    return (<div className='flex  items-center justify-between border-b pb-4 border-b-gray-400'>
        <img onClick={() => navigate('/')} src={Logo} className='w-36 hover:cursor-pointer' />
        <div>
            <ul className='hidden md:inline-flex gap-5 font-medium'>
                <NavLink to="/">
                    <li className='py-1 text-sm '>HOME</li>
                    <hr className='bg-primary  border-none  outline-none h-0.5 m-auto w-3/5 hidden' />
                </NavLink>
                <NavLink to="/doctors">
                    <li className='py-1 text-sm'>ALL DOCTORS</li>
                    <hr className='bg-primary  border-none  outline-none h-0.5 m-auto w-3/5 hidden' />
                </NavLink>
                <NavLink to="/about">
                    <li className='py-1 text-sm'>ABOUT</li>
                    <hr className='bg-primary  border-none  outline-none h-0.5 m-auto w-3/5 hidden' />
                </NavLink>
                <NavLink to="/contact">
                    <li className='py-1 text-sm'>CONTACT</li>
                    <hr className='bg-primary  border-none  outline-none h-0.5 m-auto w-3/5 hidden' />
                </NavLink>

            </ul>
        </div>
        {token ? (
            <div className='flex items-center gap-2 cursor-pointer' onClick={toggleMenu}>
                <img src={ProfilePic} className='w-8 rounded-full ' />
                <img src={DropDownIcon} className='' />

                {selectedOption == true &&
                    <div
                        className='text-gray-600 text-base font-medium absolute top-0 right-0 pt-20 pr-[10%] '
                    >
                        <div className='min-w-48 rounded p-4 gap-4 bg-stone-50 flex flex-col items-start '>
                            <p onClick={() => navigate('/my-profile')} className='hover:text-black'>My Profile</p>
                            <p onClick={() => navigate('/my-appointments')} className='hover:text-black' >My Appointments</p>
                            <p onClick={logout} className='hover:text-black'>Logout</p>
                        </div>

                    </div>
                }
            </div>)
            : (<button onClick={() => navigate('/login')} className='bg-primary text-white  text-sm py-3 px-8 rounded-3xl'>Create account</button>)
        }

        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={MenuIcon} />
        {/* //mobile menu */}
        <div className={`${showMenu ? "fixed w-full" : "h-0 w-0"}  md:hidden  right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center justify-between px-5 py-6'>
                <img src={Logo} className='w-36' />
                <img onClick={() => setShowMenu(false)} className='w-7' src={CrossIcon} />
            </div>
            <ul className='flex flex-col gap-2 mt-5 px-5 text-lg font-medium'>
                <NavLink onClick={() => setShowMenu(false)} to="/">
                    <p className='px-4 py-2 rounded inline-block'>HOME</p>            </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                    <p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to="/about">
                    <p className='px-4 py-2 rounded inline-block'>ABOUT</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to="/contact">
                    <p className='px-4 py-2 rounded inline-block'>CONTACT</p>
                </NavLink>
            </ul>
        </div>
    </div>);
}

export default NavBar;