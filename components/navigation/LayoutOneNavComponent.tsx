"use client"

import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import SearchBoxComponent from './SearchBoxComponent';
import { UserAvatarComponent } from '../shared/UserAvatarComponent';

const LayoutOneNavComponent = () => {
    return (
        <div className='flex justify-center w-full'>
            <div className='flex relative items-center justify-between gap-20 bg-white p-4 rounded-3xl'>
                <div className="flex items-center gap-7">
                    <Link href="/">
                        <Image src="/logo/fable_new_logo.svg" alt="Fable logo" className=" " width={90} height={90} />
                    </Link>
                    <SearchBoxComponent />
                </div>

                <div className="flex items-center gap-3">
                    <div className='flex cursor-pointer items-center gap-3 bg-[#f9f9f9] rounded-xl p-3'>
                        <Image src="/icon/feather.svg" alt="feather icon" className=" " width={13} height={13} />
                        <p className='text-xs'>Write</p>
                    </div>

                    <UserAvatarComponent
                        width={40} 
                        height={40} 
                        borderRadius='rounded-xl' 
                        isDouble={false}             
                        imageUrl="/avatar/male_avatar2.svg"
                    /> 
                </div>
            </div>
        </div>
    )
}

export default LayoutOneNavComponent
