import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Coindetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCoin(data)
                setLoading(false)
            })
    }, [id])
    return (
        <>
            {
                loading ? (<Spinner></Spinner>) : (
                    <div className='bg-slate-50'>
                        <div className='px-4 h-[90vh] pb-24 pt-20 mx-auto max-w-7xl md:px-2 '>
                            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-content-center gap-4 content-center md:justify-items-around  '>
                                <div className=' order-2 md:order-1 text-center md:text-justify px-40'>
                                    <h1 className='text-3xl'>Genaral Info:</h1>
                                    <hr className=' max-w-xs '></hr>
                                    <h1 className='pt-2'>Coin Name: {coin.name}</h1>
                                    <h1>Market Rank: {coin.market_cap_rank}</h1>
                                    <h1>Country Origin : {coin.country_origin ? coin.country_origin : "Not Found    "}</h1>
                                    <h1>Symbol : {coin.symbol}</h1>
                                    <h1 className='text-3xl mt-5'>Score Info:</h1>
                                    <hr className='max-w-xs'></hr>
                                    <h1 className='pt-2'>Coin Score: {coin.community_score}</h1>
                                    <h1>Developer Score: {coin.developer_score}</h1>
                                </div>
                                <div className='flex justify-center items-center order-1 md:order-2 '>
                                    <img src={coin.image?.large} alt="coinImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
};

export default Coindetails;