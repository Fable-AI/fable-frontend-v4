"use client"

import React from 'react'
import { BookmarkPlus } from 'lucide-react';

const BookmarkComponent = () => {
    return (
        <div className='bg-[#F5F5F5] rounded-xl p-2 cursor-pointer border border-[#F5F5F5] text-gray-500 hover:text-red-700 hover:border-red-100 '>
            <BookmarkPlus size={14} />
        </div>
    )
}

export default BookmarkComponent
