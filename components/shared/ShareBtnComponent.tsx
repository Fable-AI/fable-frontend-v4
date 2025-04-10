"use client"

import { Share2 } from 'lucide-react'
import React from 'react'

const ShareBtnComponent = () => {
    return (
        <div className='bg-[#F5F5F5] rounded-xl p-2 cursor-pointer border border-[#F5F5F5] text-gray-500 hover:text-red-700 hover:border-red-100 '>
            <Share2 size={14} />
        </div>
    )
}

export default ShareBtnComponent
