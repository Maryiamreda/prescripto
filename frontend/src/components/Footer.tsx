import Logo from '../assets/assets_frontend/logo.svg';

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between text-start '>
            <div className='flex flex-col gap-2'>
                <img src={Logo} className='w-44 hover:cursor-pointer' />
                <p className='pt-4 text-sm text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and
                    <br /> typesetting industry. Lorem Ipsum has been the industry's
                    <br /> standard dummy text ever since the 1500s, when an <br />
                    unknown printer took a galley of type and scrambled it to  <br />
                    make a type specimen book.</p>
            </div>
            <div className='flex flex-col md:flex-row pt-10 gap-[4rem] md:gap-[6.75rem]'>
                <div>
                    <h2 className='text-lg font-semibold'>COMPANY</h2>
                    <ul className='pt-4  text-sm text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy
                        </li>

                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>GET IN TOUCH</h2>
                    <p className='pt-4 text-sm text-gray-600'>+0-000-000-000
                    </p>
                    <p className=' text-gray-600 text-sm'>greatstackdev@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
