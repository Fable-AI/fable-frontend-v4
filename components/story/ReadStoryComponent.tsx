"use client"

import React from 'react'
import PopularStoryComponent from '@/components/story/PopularStoryComponent';
import { ArrowLeft, ArrowRight, Dot } from 'lucide-react';
import { Heart, MessageCircle, Share2, BookmarkPlus } from 'lucide-react';
import Link from 'next/link';
import BookmarkComponent from '@/components/shared/BookmarkComponent';
import CommentBtnComponent from '@/components/shared/CommentBtnComponent';
import ShareBtnComponent from '@/components/shared/ShareBtnComponent';
import RatingBtnComponent from '@/components/shared/RatingBtnComponent';
import GenrePillsComponent from '@/components/shared/GenrePillsComponent';
import Image from "next/image";
import { UserAvatarComponent } from '../shared/UserAvatarComponent';

const ReadStoryComponent = () => {
    return (
        <div className=" bg-white rounded-2xl p-5 ">
            <div className="flex items-center justify-between">
                <h2 className='text-gray-400 text-sm font-semibold italic'>Reading...</h2>

                <div className='bg-[#F5F5F5] text-xs flex items-center justify-center rounded-full h-11 w-11 p-2 cursor-pointer'>
                    10%
                </div>
            </div>

            <div className='mt-6 flex items-center justify-between'>
                <div className="flex items-center">         
                    <UserAvatarComponent
                        width={36} 
                        height={36} 
                        borderRadius='rounded-full' 
                        isDouble={false} 
                        imageMargin='mr-3' 
                        imageUrl="/avatar/male_avatar2.svg"
                    /> 
                    <div className='text-[10px]'>
                        <span className="text-gray-600">By </span>
                        <span className="font-semibold">Cole Palmer </span>
                        {/* <span className="text-gray-600">Ft </span>
                        <span className="font-semibold">John Kwame</span> */}
                    </div>
                </div>
                <div className="flex items-center text-gray-500 text-[10px]">
                    <span className="font-bold">5min read</span>
                    <Dot />
                    <span className="font-light">20m ago</span>
                </div>
            </div>

            <div className="relative w-full h-[400px] mt-5 rounded-2xl overflow-hidden">
                <Image
                    src={`/img/placeholder.png`}
                    alt="The deathly hallows of North Seria"
                    fill
                    className="object-cover w-full"
                />
            </div>

            <div className="flex items-center justify-between mt-5">
                {/* Interaction Buttons */}
                <div className="flex items-center flex-wrap gap-3">
                    <BookmarkComponent />

                    <CommentBtnComponent />

                    <ShareBtnComponent />

                    <RatingBtnComponent />
                </div>

                {/* Tags */}
                <>
                    <GenrePillsComponent />
                </>
            </div>

            {/* CHAPTERS */}
            <div className='mt-7'>
                <h1 className="font-bold text-3xl mb-1">Vol 1</h1>
                <h4 className='font-light text-xs text-gray-600 mb-5'>Four Chapters</h4>

                <div>
                    <p className="text-gray-600 leading-7">
                        No one expected the ground to open that day.  It started as a low, distant rumble—a sound that might have been mistaken for heavy machinery or the distant roll of thunder. People in Veridian went about their usual business, barely sparing a glance at the cloudless sky. The Rhysos River shimmered in the sunlight, cutting a blue-green line through the heart of the valley. But as the minutes passed, the rumble grew louder, deeper, and more ominous.  Jake Ellison, a civil engineer for the city, was out near the riverbank, inspecting the new pedestrian bridge. His team had been working on it for months, and it was almost ready for the public. He had noticed the strange vibration in the ground beneath his feet, but it didn't register as anything more than a mild annoyance. Construction crews often felt the earth shudder beneath them—so many machines, so much digging.  But when the bridge began to tremble, Jake knew something was wrong.  He dropped his clipboard and scanned the horizon. The mountains to the south of Veridian, which had always loomed like sentinels over the valley, seemed to be shifting—moving in a way that didn't make sense. It was subtle at first, but then the ground beneath him jolted with a force that nearly knocked him to the ground. The shaking didn't stop. Buildings shuddered. The air filled with the sounds of breaking glass, the grinding of steel, and the panicked shouts of people caught off guard. And then, the mountain began to rise.  Lena Rivers stood in her kitchen, making lunch for her two children, when the shaking started. Her husband had joked about earthquakes before—“We live near fault lines, honey. You never know when the big one might hit.” She'd laughed it off at the time. But now, with the dishes rattling in the cupboards and her hands gripping the edge of the counter for balance, she wished she'd taken his words more seriously.  She grabbed the kids, pulling them away from the large bay window that overlooked the backyard. Outside, the trees were swaying violently, and her neighbor's dog was barking like mad. The floor rolled beneath her feet, sending waves of nausea through her stomach. She held her children close, waiting for the shaking to stop.
                    </p>
                </div>

                <div className="flex items-center justify-between mt-7">
                    <div className="flex items-center flex-wrap gap-3">                                                            
                        <BookmarkComponent />

                        <CommentBtnComponent />

                        <ShareBtnComponent />

                        <RatingBtnComponent />
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex rounded-xl bg-gray-100 cursor-pointer border border-gray-300 justify-center items-center">
                            <ArrowLeft className='text-gray-400' size={15}  />
                        </div>
                        <div className="w-10 h-10 flex rounded-xl bg-gray-100 cursor-pointer border border-gray-300 justify-center items-center">
                            <ArrowRight className='text-gray-400' size={15}  />
                        </div>
                    </div>

                    <GenrePillsComponent />                            

                </div> 
            </div>
        </div>
    )
}

export default ReadStoryComponent
