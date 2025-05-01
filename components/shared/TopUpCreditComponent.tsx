"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { ArrowRight, DollarSign, Info, ShieldCheck } from 'lucide-react';
import axiosInterceptorInstance from '@/axiosInterceptorInstance';
import { UserInterface } from '@/interfaces/UserInterface';
import BuyCreditComponent from '../credit/BuyCreditComponent';

const TopUpCreditComponent = () => {
    const [price, setPrice] = useState<number>(1);
    const [tokenPrice, setTokenPrice] = useState<number>(0);
    const [user, setUser] = useState<UserInterface|null>(null);


    useEffect(() => {
        getAuthor();
    }, []);

    const getAuthor = async () => {
        try {
            const response = await axiosInterceptorInstance.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/auth`)
            console.log(response);
            setUser(response?.data?.user)
        } catch (error) {
            console.error(error);            
        }
    }

    const convertTokenValue = (amount: string|number) => {
        let tokenValue = Number(amount) * 100;
        setPrice(Number(amount))
        setTokenPrice(tokenValue);
    }


    return (
        <div className="p-3">

            <div className="flex items-center justify-center">
                <div className='flex items-center gap-3'>
                    <div className="bg-[#F5F5F5] flex items-center justify-center relative rounded-full w-12 h-12 ">
                        <Image src="/icon/dollar.svg" alt="dollar icon" className="" width={16} height={16} />                    
                    </div>
                    <ArrowRight size={16} className='text-gray-400'/>
                    <Image src="/icon/coins-light.svg" alt="coins icon" className=" " width={40} height={40} />                            
                    
                </div>

            </div>
            <h1 className="font-bold text-2xl text-center mt-2">Purchase Credits</h1>

            <div className="mt-7">

                <p className='font-bold text-xs mb-2 text-gray-600'>Amount</p>
                <div className="flex items-center border bg-white px-2 rounded-xl border-[#f0f0f0]">
                    <DollarSign size={19} />
                    <input type="number" 
                    onChange={(e) => convertTokenValue(e.target.value)} 
                    // value={price}                                                 
                    className='w-full h-full py-3 px-1 border-none bg-white outline-0 text-sm' 
                    placeholder="0.00" />
                </div>
                <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <Info size={14} className='cursor-pointer hover:text-gray-400'/>
                    <p className='text-[10px]'>Max amount is $5</p>
                </div>
            </div>

            <div className="mt-5">
                <p className='font-bold text-xs mb-2 text-gray-600'>You'll receive</p>
                <div className="flex items-center bg-[#F5F5F5] border w-[30%] border-[#F5F5F5] px-2 rounded-xl ">
                    <Image src="/icon/coins-light.svg" alt="coins icon" width={18} height={18} />
                    <input 
                    type="text" disabled 
                    value={tokenPrice}                                                 
                    className='w-full h-full p-3 border-none outline-0 text-sm' 
                    placeholder="0.00" />
                </div>
            </div>

            <div className="mt-7">
                <BuyCreditComponent amount={price} getAuthor={getAuthor}  />
            </div>

            <div className="mt-5 flex items-center justify-center gap-1">
                <ShieldCheck className='text-[#57DE2A]' size={20} />
                <span className='text-[#A2A2A2] text-[10px] font-medium'>100% Secured</span>
            </div>

        </div>
    )
}

export default TopUpCreditComponent
