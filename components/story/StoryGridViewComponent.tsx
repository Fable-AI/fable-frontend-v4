"use client"

import React from 'react'
import Image from 'next/image';
import AuthorComponent from './AuthorComponent';
import GenrePillsComponent from '../shared/GenrePillsComponent';
import BookmarkComponent from '../shared/BookmarkComponent';
import CommentBtnComponent from '../shared/CommentBtnComponent';
import ShareBtnComponent from '../shared/ShareBtnComponent';
import RatingBtnComponent from '../shared/RatingBtnComponent';
import Link from 'next/link';

const StoryGridViewComponent = () => {
    return (
        <div className="w-full mb-5">
            <AuthorComponent count={1} />

            <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">        
                <Image 
                src={`/img/placeholder2.png`} 
                alt="The deathly hallows of North Seria"
                fill
                className="object-cover w-full"
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
                <BookmarkComponent />
                <CommentBtnComponent />
                <ShareBtnComponent />
                <RatingBtnComponent />
            </div>
        </div>
    )
}

export default StoryGridViewComponent
