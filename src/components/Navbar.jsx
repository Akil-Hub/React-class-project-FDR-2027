import React from 'react'
import Image from './common/Image'
import logo from  '../assets/logo.png'
import { Link } from 'react-router-dom'
import Button from './common/Button'





const Navbar = () => {
    const commonMenuClass = `hover:text-primary  duration-300  active:scale-90`
  return (
    <>
    <header className='wrapper flex justify-between items-center'>
        <Link to={'/'}><Image imgSrc={logo} altSrc={logo}/></Link>

        <ul className='flex gap-5 items-center font-semibold text-xl text-gray-700'>
            <li className={`${commonMenuClass}`}><Link to={'/'}>Home</Link></li>
            <li className={`${commonMenuClass}`}><Link to={'/about'}>About</Link></li>
            <li className={`${commonMenuClass}`}><Link to={'/services'}>Services</Link></li>
            <li className={`${commonMenuClass}`}><Link to={'/contact'}>Contact Us </Link></li>


        </ul>

        <Button title={'See More'} />
    </header>
    </>
  )
}

export default Navbar