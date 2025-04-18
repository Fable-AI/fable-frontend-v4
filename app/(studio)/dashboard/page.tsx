"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { Eye, Plus } from 'lucide-react';
import GenrePillsComponent from '@/components/shared/GenrePillsComponent';
import Link from 'next/link';
import BookmarkComponent from '@/components/shared/BookmarkComponent';
import CommentBtnComponent from '@/components/shared/CommentBtnComponent';
import ShareBtnComponent from '@/components/shared/ShareBtnComponent';
import RatingBtnComponent from '@/components/shared/RatingBtnComponent';

const DashboardPage = () => {

    const [tab, setTab] = useState<string>("original");

    return (
        <div className='px-5 grid grid-cols-12'>
            <div className="col-span-12">
                
                {/* STATISTICS */}
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-1">
                        <p className='font-bold bg-white p-3 rounded-xl mb-2'>Credit Balance</p>
                        <div className='bg-white p-2 rounded-xl'>
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-2">
                                    <Image src="/icon/coins.svg" alt="icon" className=" " width={20} height={20} />
                                    <p className="font-bold text-2xl">200,000.<span className='text-xs font-normal'>00</span></p>
                                </div>
                                
                                <div className="bg-[#F5F5F5] rounded-xl p-1 cursor-pointer border border-[#F5F5F5] text-gray-500">
                                    <Eye size={14}/>
                                </div>
                            </div>  

                            <div className="bg-black p-2 cursor-pointer text-white flex items-center justify-between rounded-lg hover:bg-gray-800 transition-all">
                                <div className="flex items-center gap-3">
                                    <Plus size={15} className='' />
                                    <p className='text-xs'>TopUp Balance</p>
                                </div>
                            
                                <Image src="/icon/getcode.svg" alt="icon" className=" " width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className=' bg-white p-3 rounded-xl mb-2'>
                            <p className=" text-gray-500 mb-4">Total Publications</p>
                            <p className="font-bold text-2xl">200</p>
                        </div>

                    </div>
                    <div className="col-span-1"></div>
                </div>

                {/* TABS */}
                <div className="bg-white p-3 rounded-lg mt-10">
                    <p className='mb-3'>Categories</p>
                    <div className="bg-[#F9F9F9] rounded-lg p-2 flex items-center gap-3 text-xs tracking-wide">
                        <span onClick={() => setTab('original')} className={`rounded-lg p-2 cursor-pointer transition-all ${tab === 'original' ? 'bg-[#5D4076] text-white' : 'text-gray-600'}`}>Original</span>
                        <span onClick={() => setTab('with-ai')} className={`rounded-lg p-2 cursor-pointer transition-all ${tab === 'with-ai' ? 'bg-[#5D4076] text-white' : 'text-gray-600'}`}>With AI</span>
                        <span onClick={() => setTab('characters')} className={`rounded-lg p-2 cursor-pointer transition-all ${tab === 'characters' ? 'bg-[#5D4076] text-white' : 'text-gray-600'}`}>Characters</span>
                        <span onClick={() => setTab('drafts')} className={`rounded-lg p-2 cursor-pointer transition-all ${tab === 'drafts' ? 'bg-[#5D4076] text-white' : 'text-gray-600'}`}>Drafts</span>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="mt-10">
                    <h1 className="text-gray-600 mb-5 text-2xl font-semibold">Originals</h1>

                    <div className='grid grid-cols-3 gap-5 overflow-y-auto'>
                        {
                            [1,2,3,4,5,6].map(item => (
                                <div key={item} className="w-full mb-5">
                                    <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">        
                                        <img
                                            src={`/img/placeholder2.png`} 
                                            alt="story cover image"
                                            className="object-cover rounded-xl w-full"
                                        />

                                        <p className="absolute bottom-2 left-2 px-3 py-1 text-gray-50 bg-gray-800 rounded-full text-[10px]">5min ago</p>
                                        <div className='absolute bottom-2 right-2'>
                                            <GenrePillsComponent />
                                        </div>

                                    </div>

                                    <Link href="/read-story">
                                        <h1 className='my-4 font-bold text-xl hover:underline'>The Deathly Hallows of North Seria</h1>
                                    </Link>

                                    <div className="flex items-center flex-wrap gap-3">
                                        <CommentBtnComponent />
                                        <ShareBtnComponent />
                                        <RatingBtnComponent />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

            {/* <div className="col-span-2"></div> */}
        </div>
    )
}

export default DashboardPage
