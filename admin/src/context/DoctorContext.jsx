//this to store logic for doctor login and token 
import { createContext } from "react";
export const DoctorContext = createContext();
//context provider function
const DoctorContextProvider = (props) => {
    const value = {

    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}

        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider;