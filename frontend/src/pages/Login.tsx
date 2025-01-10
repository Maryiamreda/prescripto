import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
const LogIn = () => {

    const { token, setToken, backendUrl } = useContext(AppContext)
    const [state, setState] = useState('Sign Up')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            if (state === 'Sign Up') {
                const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email })
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                } else {
                    toast.error(data.message)
                }
            } else {
                const { data } = await axios.post(backendUrl + '/api/user/login', { password, email })
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error: any) {
            toast.error(error.message)

        }

    }
    const toggleState = async () => {
        setState(state === 'Sign Up' ? 'Log In' : 'Sign Up');

    };

    return (
        <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center ">

            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
                <p className="text-2xl font-semibold">{state === 'Sign Up' ? "Craete Account" : "Login"}</p>
                <p>Please {state === 'Sign Up' ? "Sign Up" : "Log in"} to book appointment</p>
                {state === 'Sign Up' && <div className="w-full">
                    <p className="text-start">Full Name</p>
                    <input type="text" className="mt-1 border  w-full rounded p-2" onChange={(e) => setName(e.target.value)}
                        value={name} />
                </div>}

                <div className="w-full">
                    <p className="text-start">Email</p>
                    <input type="email" className="mt-1 border  w-full rounded p-2" onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                </div>
                <div className="w-full">
                    <p className="text-start">password</p>
                    <input type="text" className="mt-1 border  w-full rounded p-2" onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                </div>
                <button type="submit" className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">{state === 'Sign Up' ? "Craete Account" : "Login"}</button>

                {state === 'Sign Up' ? <p >Already have an account? <span className="cursor-pointer  text-primary underline" onClick={toggleState} >Log In</span></p> :
                    <p>Don't have an account?<span className="cursor-pointer text-primary underline" onClick={toggleState} >Sign Up</span> </p>}

            </div>
        </form>);
}

export default LogIn;