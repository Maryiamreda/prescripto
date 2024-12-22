import { createContext } from "react";
export const AdminContext = createContext();
//context provider function
const AdminContextProvider = (props) => {
    const value = {

    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}

        </AdminContext.Provider>
    )
}
export default AdminContextProvider;