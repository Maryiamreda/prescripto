import React from 'react';
import { assets } from '../../assets/assets'

const AddDoctor = () => {
    return (
        <form className='  m-5 w-full text-start '>
            <h2 className='mb-3 text-lg font-medium'>Add Doctor</h2>
            <div className='bg-white  px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll text-start' >
                <div className='flex items-center gap-4 mb-8 text-gray-500 '>
                    <label for="doc-img">
                        <img src={assets.upload_area} className='w-16 bg-gray-100 rounded-full' />
                    </label>
                    <input type='file' id='doc-img' hidden />
                    <p>Upload doctor <br /> picture </p>
                </div>
                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600 '>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Doctor name</label>
                            <input type='text' className='border rounded px-3 py-2' placeholder="Enter doctor's full name" />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Doctor Email</label>
                            <input type='email' className='border rounded px-3 py-2' placeholder="Enter doctor's email" />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Doctor Password</label>
                            <input type='password' className='border rounded px-3 py-2' placeholder="Enter password" />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Experience</label>
                            <select name="" id="" className='border rounded px-3 py-2' >
                                <option value="" disabled selected>Select years of experience</option>
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
                            <input type='text' className='border rounded px-3 py-2' placeholder="Enter consultation fees" />
                        </div>
                    </div>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Speciality</label>
                            <select name="" id="" className='border rounded px-3 py-2' >
                                <option value="" disabled selected>Select speciality</option>
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
                            <input type='text' className='border rounded px-3 py-2' placeholder="Enter educational qualifications" />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label>Address</label>
                            <input type='text' className='border rounded px-3 py-2' placeholder="Address line 1" />
                            <input type='text' className='border rounded px-3 py-2' placeholder="Address line 2" />
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-1 text-gray-600'>
                    <label className='mt-4 mb-2'>About Doctor</label>
                    <textarea placeholder="Write a brief description about the doctor" className='w-full px-4 pt-2 border rounded' />
                </div>
                <button className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Doctor</button>

            </div>
        </form>
    );
}

export default AddDoctor;