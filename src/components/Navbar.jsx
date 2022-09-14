import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from '../assets/logo.png';
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)
  return (
    <div className='w-screen z-10 bg-sky-800 h-16 drop-shadow-lg text-white fixed shadow-xl'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <img src={Logo} alt="VNETIX" width="100"/>
        <ul className='hidden md:flex'>
          <li>
            <Link to="home"  smooth={true} offset={0}>
              Home
            </Link>
          </li>
          <li><Link to="about"  smooth={true} offset={-50}>
            About
          </Link></li>
          <li><Link to="services"  smooth={true} offset={-50}>
            Services
          </Link></li>
          <li><Link to="contact"  smooth={true} offset={-50}>
            Contact
          </Link></li>
        </ul>
        <div className='md:hidden' onClick={handleClick}>
          {
            nav ? <XIcon className='w-5 cursor-pointer' /> : <MenuIcon className='w-5 cursor-pointer' />
          }
        </div>
      </div>
      <ul className={nav ? 'bg-sky-800 w-full absolute md:hidden' : 'hidden'}>
        <li className='border-b-2 border-sky-600 w-full'> <Link to="home" onClick={()=>setNav(false)}  smooth={true} offset={0}>
          Home
        </Link></li>
        <li className='border-b-2 border-sky-600 w-full'><Link to="about" onClick={()=>setNav(false)}  smooth={true} offset={-50}>
          About
        </Link></li>
        <li className='border-b-2 border-sky-600 w-full'><Link to="services"  onClick={()=>setNav(false)} smooth={true} offset={-50}>
          Services
        </Link></li>
        <li className='border-b-2 border-sky-600 w-full'><Link to="contact"  onClick={()=>setNav(false)} smooth={true} offset={-50}>
          Contact
        </Link></li>
      </ul>
    </div>
  )
}

export default Navbar
