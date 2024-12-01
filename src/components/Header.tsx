import HeaderImg from '../assets/assets_frontend/header_img.png'
import Arrow from '../assets/assets_frontend/arrow_icon.svg'
import Grouprofile from '../assets/assets_frontend/group_profiles.png'
const Header = () => {
    return (
        <div className="bg-primary px-20 h-[78vh] flex mt-5 rounded-lg">
            <div className=' flex flex-col gap-5 pt-32'>
                <p className='text-white md:text-5xl font-semibold  text-start leading-snug'>Book Appointment<br />
                    With Trusted Doctors</p>
                <div className='flex gap-3'>
                    <img src={Grouprofile} className='w-32 h-12' />
                    <div className='text-white text-sm text-start'>Simply browse through our extensive list of trusted
                        doctors,   <br />
                        schedule your appointment hassle-free.</div>
                </div>
                <div className='flex text-gray-600 bg-white text-sm w-48 justify-center p-2 items-center gap-2 rounded-3xl'><p>Book appointment</p><img src={Arrow} className='w-3' /></div>
            </div>
            <div className='flex items-end '>
                <img src={HeaderImg} className='w-[30rem]' alt="" />
            </div>

        </div>);
}

export default Header;