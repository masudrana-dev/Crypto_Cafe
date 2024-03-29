import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 px-12 py-8 flex justify-center md:justify-between bg-white'>
            <div className='hidden md:block'>
                <Link to='/' className='font-bold text-gray-600 font-sans text-xl'>Crypto Cafe</Link>
            </div>
            <div className='flex gap-4 text-xl font-bold'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;