import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Login = () => {
    const [state, setState] = useState('Admin');
    const toggleState = () => {
        setState(state === 'Admin' ? 'Doctor' : 'Admin');
    };
    return (
        <form className="min-h-[80vh] flex items-center ">
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl m-auto font-bold'><span className='text-primary'>{state} </span>Login</p>
                <div className="w-full">
                    <p className="text-start">Email</p>
                    <input type='email' required className="mt-1 border  w-full rounded p-2" />
                </div>
                <div className="w-full">
                    <p className="text-start">Password</p>
                    <input type='password' required className="mt-1 border  w-full rounded p-2" />
                </div>
                <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">Login</button>

                {state === 'Admin' ? <p >Doctor Login? <span className="cursor-pointer  text-primary underline" onClick={toggleState} > Click here</span></p> :
                    <p>Admin Login?<span className="cursor-pointer text-primary underline" onClick={toggleState} > Click here</span> </p>}

            </div>

        </form>
    );
}

export default Login;