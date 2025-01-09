import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Doctor } from "../Doctors"; // Adjust the path based on your folder structure

// Define the context type
interface AppContextType {
    doctors: Doctor[];
    getAllDoctors: () => Promise<void>;
    token: string | boolean; // Add token
    setToken: (token: string) => void; // Add setToken
    backendUrl: string; // Add backendUrl
}

// Initial value for context
const defaultValue: AppContextType = {
    doctors: [],
    getAllDoctors: async () => { },
    token: '',
    setToken: () => { },
    backendUrl: ''
};

// Create context
export const AppContext = createContext<AppContextType>(defaultValue);

// Props type for the provider
interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [token, setToken] = useState('');

    const backendUrl = import.meta.env.VITE_BACKEND_URL as string;
    const getAllDoctors = async () => {
        try {
            console.log("Fetching doctors from:", `${backendUrl}/api/doctor/list`);
            const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
            console.log("Response:", data);
            if (data.success) {
                setDoctors(data.doctors);
                console.log("Doctors set in context:", data.doctors);
            } else {
                console.error("API Error:", data.message);
                toast.error(data.message);
            }
        } catch (error: any) {
            console.error("Error fetching doctors:", error);
            toast.error(error.message);
        }
    };

    const value = {
        doctors,
        getAllDoctors,
        token, setToken, backendUrl
    };

    useEffect(() => {
        getAllDoctors();
    }, []);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
