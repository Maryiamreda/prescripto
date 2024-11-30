import Logo from '../assets/assets_frontend/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate();
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
                <NavLink to="contact">
                    <li className='py-1 text-sm'>CONTACT</li>
                    <hr className='bg-primary  border-none  outline-none h-0.5 m-auto w-3/5 hidden' />
                </NavLink>

            </ul>
        </div>
        <button onClick={() => navigate('/login')} className='bg-primary text-white  text-sm py-3 px-8 rounded-3xl'>Create account</button>
    </div>);
}

export default NavBar;