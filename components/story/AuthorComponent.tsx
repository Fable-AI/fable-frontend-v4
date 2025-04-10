"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import AuthorBioCardComponent from './AuthorBioCardComponent';

const AuthorComponent = ({ count }: { count: number }) => {
    const [showBio, setShowBio] = useState<boolean>(false);
    const authorNameRef = useRef<HTMLSpanElement>(null);
    const bioCardRef = useRef<HTMLDivElement>(null);
    
    // Handle clicks outside the bio card to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (showBio && 
                bioCardRef.current && 
                authorNameRef.current && 
                !bioCardRef.current.contains(event.target as Node) && 
                !authorNameRef.current.contains(event.target as Node)) {
                setShowBio(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showBio]);

    return (
        <div className="flex items-center relative mb-4">
            {count > 1 ? (
                <>
                    <div className="flex -space-x-2 mr-3">
                        <Image 
                            src="/avatar/male_avatar1.svg" 
                            alt="Cole Palmer"
                            width={36}
                            height={36}
                            className="rounded-full border-2 border-white"
                        />
                        <Image 
                            src="/avatar/male_avatar2.svg" 
                            alt="John Kwame"
                            width={36}
                            height={36}
                            className="rounded-full border-2 border-white"
                        />
                    </div>
                    <div className='text-[10px]'>
                        <span className="text-gray-600">By </span>
                        <span className="font-semibold">Cole Palmer </span>
                        <span className="text-gray-600">Ft </span>
                        <span className="font-semibold">John Kwame</span>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex mr-3">
                        <Image 
                            src="/avatar/male_avatar1.svg" 
                            alt="Cole Palmer"
                            width={36}
                            height={36}
                            className="rounded-full border-2 border-white"
                        />
                    </div>
                    <div className='text-[10px] relative'>
                        <span className="text-gray-600">By </span>
                        <span 
                            ref={authorNameRef}
                            className="font-semibold hover:underline cursor-pointer" 
                            onClick={() => setShowBio(!showBio)}
                            onMouseEnter={() => setShowBio(true)}
                        >
                            Cole Palmer
                        </span>
                    </div>
                </>
            )}
            
            <div className="ml-auto text-gray-500 text-[10px]">5min ago</div>

            {showBio && (
                <AuthorBioCardComponent 
                    setShowBio={setShowBio} 
                    bioCardRef={bioCardRef}
                />
            )}
        </div>
    );
};

export default AuthorComponent;