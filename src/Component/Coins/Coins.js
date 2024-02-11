import React, { useEffect, useState } from 'react';
import Coincard from '../Coincard/Coincard';
import Spinner from '../Spinner/Spinner';



const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
            .then(res => res.json())
            .then(data => {
                setCoins(data)
                setLoading(false)
            })
    }, [])
    return (
        <>
            {loading ? (<Spinner />) : (
                <div className=' bg-slate-50  px-4 pt-20 pb-24 mx-auto max-w-7xl  md:px-2'>
                    <p className='font-bold text-3xl text-center text-gray-700'>Availabel Crypto Currencies is here </p>
                    <p className='font-normal text-center mb-12 text-gray-500 text-xl '>Total Coins : {coins.length}</p>
                    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
                        {
                            coins.map(coin => <Coincard
                                key={coin.id}
                                coin={coin}
                            ></Coincard>)
                        }
                    </div>
                </div>
            )
            }
        </>

    );
};

export default Coins;