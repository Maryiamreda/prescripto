import HeaderImg from '../assets/assets_frontend/header_img.png'
import Arrow from '../assets/assets_frontend/arrow_icon.svg'
import Grouprofile from '../assets/assets_frontend/group_profiles.png'
const Header = () => {
    return (
        <div className="bg-primary px-10  justify-between md:px-20 md:pt-48    flex md:flex-row  flex-col  mt-5 rounded-lg">
            <div className=' flex flex-col items-center md:items-baseline  md:relative md:bottom-20 gap-5  pt-7 '>
                <p className='text-white text-3xl md:text-5xl font-semibold  text-start md:leading-tight'>Book Appointment<br />
                    With Trusted Doctors</p>
                <div className='flex flex-col items-center md:flex-row gap-3'>
                    <img src={Grouprofile} className='w-32 h-12' />
                    <div className='text-white text-sm text-start'>Simply browse through our extensive list of trusted
                        doctors,   <br />
                        schedule your appointment hassle-free.</div>
                </div>
                <a href='#speciality' className='flex  text-gray-600 bg-white text-sm w-48 justify-center px-2 py-3 items-center gap-2 rounded-3xl'><p>Book appointment</p><img src={Arrow} className='w-3' /></a>
            </div>
            <div className='md:w-1/2 relative '>
                <img src={HeaderImg} className='w-full md:absolute bottom-0 h-auto rounded-lg' alt="" />
            </div>

        </div>);
}

export default Header;