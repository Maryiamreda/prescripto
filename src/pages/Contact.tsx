import Image from '../assets/assets_frontend/contact_image.png'

const ContactPage = () => {
    return (
        <div className='text-gray-500 text-sm mt-5'>
            <h1 className='text-center text-2xl pt-10 text-[#707070]'>CONTACT <span className='text-gray-700 font-semibold'>US</span></h1>
            <div className='flex md:flex-row flex-col justify-center items-center mx-10 mt-12 mb-20 gap-8'>
                <img src={Image} className=' w-full md:max-w-[356px]' />
                <div className='text-start  '>
                    <h2 className='font-semibold text-lg text-gray-600'>OUR OFFICE</h2>
                    <p className='pt-6'>00000 Willms Station<br />
                        Suite 000, Washington, USA</p>
                    <p className='pt-6'>Tel: (000) 000-0000 <br />
                        Email: greatstackdev@gmail.com</p>
                    <h2 className='font-semibold pt-5 text-lg text-gray-600'>CAREERS AT PRESCRIPTO</h2>
                    <p className='pt-8'>Learn more about our teams and job openings.</p>
                    <div className='mt-3 w-fit px-8 py-4 border border-black hover:bg-black hover:text-white cursor-pointer text-black transtion-all duration-500 '>Explore Jobs</div>
                </div>
            </div>
        </div >
    );
}

export default ContactPage;