"use client";

import { CheckCircle, DollarSign, Minus, XCircle } from 'lucide-react';
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import { StoryInterface } from '@/interfaces/StoryInterface';
import { useRouter } from 'next/navigation'


interface Props {    
    nextStep: () => void;
    activeChapter: number|string;
    story: StoryInterface | null;    
}

const GettingStartedFooterComponent: React.FC<Props> = ({
    nextStep,
    activeChapter,
    story
}) => {

    const [isFree, setIsFree] = useState<boolean>(true);
    const [isSetFeeOpen, setIsSetFeeOpen] = useState<boolean>(false);
    const [price, setPrice] = useState<number>(0);
    const [tokenPrice, setTokenPrice] = useState<number>(0);
    
    const setFeeRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    
    const toggleIsSetFeeOpen = () => {
        setIsSetFeeOpen(!isSetFeeOpen);
    };

    const convertTokenValue = (amount: string|number) => {
        let tokenValue = Number(amount) * 100;
        setPrice(Number(amount))
        setTokenPrice(tokenValue);
    }

    const done = () => {
        let redirectUrl = `/dashboard/write-original-story?story-id=${story?.id}&current-step=${Number(story?.currentStep) + 1}`;
        router.push(redirectUrl);
    }

    return (
        <div className='bg-white p-4 rounded-xl mt-7'>
            <h1 className='capitalize text-md mb-2 font-bold'>Publish</h1>
            <p className='mb-7 text-xs'>Set reading fee for readers, also publish per chapter, or after you’ve completed your piece.</p>

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <div
                        onClick={toggleIsSetFeeOpen}
                        className="flex items-center relative gap-2 bg-gray-800 cursor-pointer py-2 px-3 rounded-xl" >
                        <Image src="/icon/coins-white.svg" alt="coins icon" width={13} height={13} />
                        <span className="text-xs text-white">Set Fees</span>
                        <i className={`bx bx-chevron-down text-xl text-white ${isSetFeeOpen ? 'transform rotate-180' : ''}`}></i>

                        {isSetFeeOpen && (
                            <div
                                ref={setFeeRef}
                                className="absolute left-0 -top-48 bg-white shadow-sm rounded-lg w-64 z-20"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative p-3 text-[#626262]">
                                    <div
                                        onClick={() => setIsSetFeeOpen(false)}
                                        className="h-7 w-7 cursor-pointer bg-white border border-[#F5F5F5] absolute top-0 -right-3 rounded-full flex items-center justify-center">
                                        <XCircle size={14} />
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Image src="/icon/coins.svg" alt="coins icon" width={34} height={34} />
                                        <div className='flex flex-col'>
                                            <span className='font-bold'>Fees</span>
                                            <span className="text-xs text-gray-500 font-light">Set your rate for this piece</span>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <p className='font-bold text-xs mb-1'>Amount</p>

                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center border bg-[#F5F5F5] px-2 rounded-xl border-[#D0D0D0]">
                                                <DollarSign size={19} />
                                                <input type="number" 
                                                onChange={(e) => convertTokenValue(e.target.value)} 
                                                // value={price}                                                 
                                                className='w-full h-full py-2 px-1 border-none outline-0 text-sm' 
                                                placeholder="0.00" />
                                            </div>

                                            <Minus size={40} />

                                            <div className="flex items-center bg-[#F5F5F5] border border-[#F5F5F5] px-2 rounded-xl ">
                                                <Image src="/icon/coins.svg" alt="coins icon" width={18} height={18} />
                                                <input 
                                                type="text" disabled 
                                                value={tokenPrice}                                                 
                                                className='w-full h-full p-2 border-none outline-0 text-sm' 
                                                placeholder="0.00" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mt-4 grid gap-2 grid-cols-12">

                                        <div className="flex col-span-7 items-center justify-center gap-2 bg-[#5D4076] text-white hover:bg-[#765d8c] cursor-pointer py-2 px-3 rounded-lg">
                                            <Image src="/icon/money-add.svg" alt="coins icon" width={14} height={14} />
                                            <span className="text-xs ">Set Fee</span>
                                        </div>
                                        <div className="flex col-span-5 items-center justify-center gap-2 bg-[#249000] text-white hover:bg-[#46a725] cursor-pointer py-2 px-3 rounded-lg">
                                            <span className="text-xs ">Free</span>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2 bg-[#CACACA29] cursor-pointer hover:bg-gray-200 py-2 px-3 rounded-xl">
                        <span className="text-xs ">Next Chapter</span>
                        <i className="bx bx-right-arrow-alt text-xl "></i>
                    </div>
                </div>

                <div onClick={nextStep} className='flex items-center cursor-pointer gap-2 py-3 px-3 text-white rounded-xl bg-gradient-to-r from-[#33164C] to-[#AA4A41] hover:bg-gradient-to-l transition-all'>
                    <span className="text-xs ">Next</span>
                    <CheckCircle size={15} />
                </div>
            </div>


        </div>
    )
}

export default GettingStartedFooterComponent
