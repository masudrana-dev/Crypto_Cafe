import React from 'react';
import { Link } from 'react-router-dom';

const Coincard = ({ coin }) => {
    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4 '>
            <Link to={`/coin-details/${coin.id}`}>
                <div className='flex gap-4 justify-between items-center'>
                    <div className='flex flex-shrink-0'>
                        <img src={coin.image} alt="coinImg" className='h-16 w-16 object-cover mx-auto rounded-full ' />
                    </div>
                    <div className='flex flex-col justify-end'>
                        <span className='text-gray-600 font-medium'>{coin.name}</span>
                        <span className='text-xs text-gray-300 text-right'> {coin.symbol}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Coincard;