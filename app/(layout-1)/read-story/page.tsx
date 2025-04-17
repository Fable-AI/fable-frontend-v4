// 'use client';

import React from 'react'
import Image from "next/image";
import TopRankingStoryComponent from '@/components/story/TopRankingStoryComponent';
import PopularStoryComponent from '@/components/story/PopularStoryComponent';
import { ArrowLeft, ArrowRight, Dot } from 'lucide-react';
import { Heart, MessageCircle, Share2, BookmarkPlus } from 'lucide-react';
import Link from 'next/link';
import ReadStoryComponent from '@/components/story/ReadStoryComponent';
import StoryCommentsComponent from '@/components/story/StoryCommentsComponent';
import LayoutOneNavComponent from '@/components/navigation/LayoutOneNavComponent';

const ReadStoryPage = () => {
    return (
        <div className='min-h-screen bg-[#FBFBFB]'>
            <nav className='fixed top-0 left-0 w-full z-20 px-7 pt-7 backdrop-blur-sm'>

                <LayoutOneNavComponent />

                <h1 className="text-3xl font-bold mx-20 mt-7 mb-5 text-black">The Deathly Hallows of Narnia</h1>
            </nav>

            <div className="mt-[210px] px-20 grid p-5 grid-cols-6 gap-20">
                <div className='left-container col-span-4 '>
                    <ReadStoryComponent />
                    
                    <div className="mt-10">
                        <StoryCommentsComponent />
                    </div>
                </div>
 
                <div className="right-container p-5 col-span-2">
                    <div>
                        <div className="flex items-center justify-between">
                            <h2 className='text-gray-900 text-2xl font-bold'>Top Ranking</h2>
                            
                            <div className='bg-[#F5F5F5] rounded-xl p-2 cursor-pointer'>
                                <Image src="/icon/bell.svg" alt="add-circle-half-dot icon" className=" " width={16} height={16} />
                            </div>
                        </div>
                        <p className="mt-3 text-xs text-gray-600 font-light">Get caught up with Fable's top most publications.</p>

                        <div className="mt-6 max-h-[500px] overflow-y-auto">
                            <TopRankingStoryComponent image="/img/placeholder.png" />
                            <TopRankingStoryComponent image="/img/placeholder2.png" />
                            <TopRankingStoryComponent image="/img/placeholder3.png" />
                        </div>
                    </div>

                    <div className='mt-16'>
                        <div className="flex items-center justify-between">
                            <h2 className='text-gray-900 text-2xl font-bold'>Popular</h2>
                            
                            <div className='bg-[#F5F5F5] rounded-xl p-2 cursor-pointer'>
                                <Image src="/icon/bell.svg" alt="add-circle-half-dot icon" className=" " width={16} height={16} />
                            </div>
                        </div>
                        <p className="mt-3 text-xs text-gray-600 font-light">
                        Get caught up with Fable's top most publications.
                        </p>

                        <div className="mt-6 max-h-[500px] overflow-y-auto">
                            <PopularStoryComponent image="/img/placeholder.png" />
                            <PopularStoryComponent image="/img/placeholder2.png" />
                            <PopularStoryComponent image="/img/placeholder3.png" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )               
};

export default ReadStoryPage;