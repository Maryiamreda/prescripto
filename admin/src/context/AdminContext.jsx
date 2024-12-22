import { createContext, useState } from "react";
export const AdminContext = createContext();
//context provider function
const AdminContextProvider = (props) => {
    //initial value 
    const [aToken, setAToken] = useState('')
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    //then we have to add it in this value property so that we can access it in any component
    const value = {
        aToken, setAToken, backendUrl

    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}

        </AdminContext.Provider>
    )
}
export default AdminContextProvider;