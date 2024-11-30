import { useState } from 'react';
import Logo from '../assets/assets_frontend/logo.svg';
import ProfilePic from '../assets/assets_frontend/profile_pic.png';
import DropDownIcon from "../assets/assets_frontend/dropdown_icon.svg";
import { NavLink, useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true)

    return (<div className='flex  items-center justify-between border-b pb-4 border-b-gray-400'>
        <img src={Logo} className='w-44' />
        <div>
            <ul className='inline-flex gap-5 font-medium'>
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
            <div className='flex items-center gap-2 cursor-pointer'>
                <img src={ProfilePic} className='w-10 rounded-full ' />
                <img src={DropDownIcon} className='' onClick={() => setShowMenu(!showMenu)} />

                {showMenu &&
                    <div
                        className='text-gray-600 text-base font-medium absolute top-0 right-0 pt-20 pr-32 items-center'
                    >
                        <div className=' bg-stone-100 '>
                            <p onClick={() => navigate('/my-profile')}>My Profile</p>
                            <p onClick={() => navigate('/my-appointments')} >My Appointments</p>
                            <p onClick={() => navigate('/my-profile')}>Logout</p>
                        </div>

                    </div>
                }
            </div>)
            : (<button onClick={() => navigate('/login')} className='bg-primary text-white  text-sm py-3 px-8 rounded-3xl'>Create account</button>)}
    </div>);
}

export default NavBar;