"use client"

import Image from 'next/image'
import React from 'react'


export const UserAvatarComponent = ({
    width,
    height,
    imageUrl,
    borderRadius,
    isDouble = false,
    imageMargin
}: {
    width: number,
    height: number,
    imageUrl?: string,
    borderRadius?: string,
    isDouble?: boolean,
    imageMargin?: string,
}) => {
    return (
        <>
            { isDouble &&
                <>
                    <div className={`flex -space-x-2 ${imageMargin}`}>
                        <Image 
                            src="/avatar/male_avatar1.svg" 
                            alt="User avatar"
                            width={width}
                            height={height}
                            className={`border-2 border-white ${borderRadius ?? 'rounded-xl'}`}
                        />
                        <Image 
                            src="/avatar/male_avatar2.svg" 
                            alt="User avatar"
                            width={width}
                            height={height}
                            className={`border-2 border-white ${borderRadius ?? 'rounded-xl'}`}
                        />
                    </div>
                </>
            }
            {!isDouble && <Image
                src={imageUrl ?? `/avatar/male_avatar1.svg`} 
                alt="User avatar"
                width={width}
                height={height}
                className={`${borderRadius ?? 'rounded-xl'} ${imageMargin}`}
            />}
        </>
    )
}

export const UserAvatarAndNameComponent = ({ 
    name, 
    username,
    nameTextSize, 
    usernameTextSize, 
    imageWidth,
    imageHeight,
}: { 
    name: string, 
    username: string, 
    nameTextSize?: string, 
    usernameTextSize?: string, 
    imageWidth?: number,
    imageHeight?: number,
}) => {
    return (
        <div className="flex items-center gap-2">
            <UserAvatarComponent width={imageWidth ?? 40} height={imageHeight ?? 40} />

            <div className="flex flex-col">
                <p className={`text-gray-900 font-semibold ${nameTextSize ?? 'text-xs'} `}>{name}</p>
                <p className={`text-gray-700 font-light ${usernameTextSize ?? 'text-[10px]'} `}>@{username}</p>
            </div>
        </div>
    )
}

