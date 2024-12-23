import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const Login = () => {
    const [state, setState] = useState('Admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleState = () => {
        setState(state === 'Admin' ? 'Doctor' : 'Admin');
    };
    const { setAToken, backendUrl } = useContext(AdminContext);
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password });

                if (data.success) {
                    setAToken(data.token); // Set token in context

                    // saves the token in the browser's local storage, making it persist across page reloads.
                    localStorage.setItem('aToken', data.token);
                    // You could also add navigation here, e.g.:
                    // navigate('/dashboard');
                } else {
                    toast.error(data.message)

                }
            } else {

            }
        } catch (error) {
            console.error('Login error:', error);
            // Handle error appropriately, maybe set an error state
            // setError(error.response?.data?.message || 'Login failed');
        }
    };
    return (
        <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center ">
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl m-auto font-bold'><span className='text-primary'>{state} </span>Login</p>
                <div className="w-full">
                    <p className="text-start">Email</p>
                    <input type='email' required className="mt-1 border border-[#DADADA]  w-full rounded p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="w-full">
                    <p className="text-start">Password</p>
                    <input type='password' required className="mt-1 border  border-[#DADADA]   w-full rounded p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">Login</button>

                {state === 'Admin' ? <p >Doctor Login? <span className="cursor-pointer  text-primary underline" onClick={toggleState} > Click here</span></p> :
                    <p>Admin Login?<span className="cursor-pointer text-primary underline" onClick={toggleState} > Click here</span> </p>}

            </div>

        </form>
    );
}


//Summary of Execution Flow
//Login Attempt:
//Form submission → API request → Token received.
//Token Stored:
//localStorage.setItem('aToken', data.token) saves the token.
// setAToken(data.token) updates the context state.
// Re-render:
// Context state change triggers React re-render.
// App renders the appropriate component based on aToken.
// Persistence:
// On reload, AdminContextProvider checks localStorage and restores aToken.

export default Login;