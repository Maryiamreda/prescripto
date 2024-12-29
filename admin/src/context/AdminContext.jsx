import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const AdminContext = createContext();
//context provider function
const AdminContextProvider = (props) => {
    //initial value 
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const [doctors, setDoctors] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-doctors', {}, {
                headers: {
                    'atoken': aToken,
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors)
            } else { toast.error(data.message) }
        } catch (error) { toast.error(error.message) }
    }


    // const changeAvailability = async (docId) => {
    //     try {
    //         const { data } = await axios.post(backendUrl + '/api/admin//change-availability', { docId }, {
    //             headers: {
    //                 'atoken': aToken,
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         })
    //         if (data.success) {
    //             toast.success(data.message);
    //             getAllDoctors();
    //         }
    //         else {
    //             toast.error(data.message)
    //         }
    //     } catch (error) { toast.error(error.message) }
    // }

    //then we have to add it in this value property so that we can access it in any component
    const value = {
        aToken, setAToken, backendUrl, getAllDoctors, doctors,
        // changeAvailability

    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}

        </AdminContext.Provider>
    )
}
export default AdminContextProvider;