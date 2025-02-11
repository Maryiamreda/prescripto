import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('1 Year');
    const [fees, setFees] = useState('');
    const [about, setAbout] = useState('');
    const [specialty, setSpecialty] = useState('General physician');
    const [degree, setDegree] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const { aToken, backendUrl } = useContext(AdminContext);
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            // Validate all required fields
            if (!name || !email || !password || !degree || !fees || !about || !address1) {
                return toast.error('Please fill all required fields');
            }

            if (!docImg) {
                return toast.error('Image Not Selected');
            }

            const formData = new FormData();
            formData.append('image', docImg);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('experience', experience);
            formData.append('fees', Number(fees));
            formData.append('about', about);
            formData.append('specialty', specialty);
            formData.append('degree', degree);
            formData.append('address', JSON.stringify({
                line1: address1,
                line2: address2 || '' // Make line2 optional
            }));

            // Debug log
            formData.forEach((value, key) => {
                console.log(`${key}:`, value);
            });

            const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {
                headers: {
                    'atoken': aToken,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (data.success) {
                toast.success(data.message);
                // Clear form
                setName('');
                setEmail('');
                setPassword('');
                setDegree('');
                setFees('');
                setAbout('');
                setAddress1('');
                setAddress2('');
                setDocImg(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.message || 'Error adding doctor');
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full text-start'>
            <h2 className='mb-3 text-lg font-medium'>Add Doctor</h2>
            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll text-start'>
                <div className='flex items-center gap-4 mb-8 text-gray-500 '>
                    <label htmlFor="doc-img">
                        <img src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} className='w-16 cursor-pointer bg-gray-100 rounded-full' />
                    </label>
                    <input type='file' id='doc-img' hidden onChange={(e) => setDocImg(e.target.files[0])} />
                    <p>Upload doctor <br /> picture </p>
                </div>
                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Doctor name</label>
                            <input
                                type='text'
                                className='border rounded px-3 py-2'
                                placeholder="Enter doctor's full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Doctor Email</label>
                            <input
                                type='email'
                                className='border rounded px-3 py-2'
                                placeholder="Enter doctor's email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Doctor Password</label>
                            <input
                                type='password'
                                className='border rounded px-3 py-2'
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Experience</label>
                            <select
                                className='border rounded px-3 py-2'
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                            >
                                <option value="" disabled>Select years of experience</option>
                                <option value="1 Year">1 Year</option>
                                <option value="2 Year">2 Year</option>
                                <option value="3 Year">3 Year</option>
                                <option value="4 Year">4 Year</option>
                                <option value="5 Year">5 Year</option>
                                <option value="6 Year">6 Year</option>
                                <option value="7 Year">7 Year</option>
                                <option value="8 Year">8 Year</option>
                                <option value="9 Year">9 Year</option>
                                <option value="10 Year">10 Year</option>
                            </select>
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Fees</label>
                            <input
                                type='text'
                                className='border rounded px-3 py-2'
                                placeholder="Enter consultation fees"
                                value={fees}
                                onChange={(e) => setFees(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Speciality</label>
                            <select
                                className='border rounded px-3 py-2'
                                value={specialty}
                                onChange={(e) => setSpecialty(e.target.value)}
                            >
                                <option value="" disabled>Select speciality</option>
                                <option value="General physician">General physician</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                            </select>
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Education</label>
                            <input
                                type='text'
                                className='border rounded px-3 py-2'
                                placeholder="Enter educational qualifications"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Address</label>
                            <input
                                type='text'
                                className='border rounded px-3 py-2'
                                placeholder="Address line 1"
                                value={address1}
                                onChange={(e) => setAddress1(e.target.value)}
                            />
                            <input
                                type='text'
                                className='border rounded px-3 py-2'
                                placeholder="Address line 2"
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-1 text-gray-600'>
                    <label className='mt-4 mb-2'>About Doctor</label>
                    <textarea
                        placeholder="Write a brief description about the doctor"
                        className='w-full px-4 pt-2 border rounded'
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    />
                </div>
                <button className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Doctor</button>
            </div>
        </form>
    );
}

export default AddDoctor;