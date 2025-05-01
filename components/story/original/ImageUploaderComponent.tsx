"use client"

import { useState, useRef } from 'react';
import Image from 'next/image';

const ImageUploaderComponent = () => {
    const [bannerImage, setBannerImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const bannerInputRef = useRef(null);
    const coverInputRef = useRef(null);

    const handleBannerUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setBannerImage(imageUrl);
        }
    };

    const handleCoverUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setCoverImage(imageUrl);
        }
    };

    const triggerBannerUpload = () => {
        bannerInputRef.current.click();
    };

    const triggerCoverUpload = () => {
        coverInputRef.current.click();
    };

    return (
        <div className="flex flex-col md:flex-row justify-between gap-8 p-6 bg-white rounded-xl mb-10">
            {/* Banner Section */}
            <div className="w-full md:w-3/5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Banner</h2>
                <p className="text-gray-500 text-xs mb-4">Upload or create featured image</p>

                <div
                    className={`relative border-2 h-[150px] border-dashed rounded-lg overflow-hidden ${bannerImage ? 'border-transparent' : 'border-gray-300'}`}
                    // style={{ aspectRatio: '16/9' }}
                >
                    {bannerImage ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={bannerImage}
                                alt="Banner Preview"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-lg"
                            />
                            <button
                                onClick={triggerBannerUpload}
                                className="absolute inset-0 m-auto w-30 h-8 text-xs bg-white/80 cursor-pointer backdrop-blur-sm hover:bg-white font-medium rounded-md transition-all duration-200 flex items-center justify-center"
                            >
                                Change Image
                            </button>
                        </div>
                    ) : (
                        <div
                            className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
                            onClick={triggerBannerUpload}
                        >
                            <button
                                className="bg-[#D8D1DE29] text-xs hover:bg-gray-50 cursor-pointer font-medium py-2 px-4 rounded-md transition-all duration-200"
                            >
                                Upload Image
                            </button>
                        </div>
                    )}
                    <input
                        type="file"
                        ref={bannerInputRef}
                        onChange={handleBannerUpload}
                        accept="image/jpeg,image/png,image/gif"
                        className="hidden"
                    />
                </div>

                <p className="text-gray-500 mt-3 text-[10px] leading-4">
                    For best display, please upload a high-quality image in a 16:9 landscape aspect ratio with a resolution of
                    1080 x 1920 pixels. Supported file formats include JPG, PNG, and GIF.
                </p>

                <button
                    className="flex items-center gap-2 mt-4 bg-[#FFE2DF29] p-2 rounded-lg font-medium cursor-pointer hover:bg-[#fbbbb429]"
                    onClick={() => {/* Implement AI creation logic */ }}
                >
                    <Image src="/icon/generate.svg" alt="coins icon" width={13} height={13} />            
                    <span className="text-[#33164C] text-xs">Create With AI</span>
                </button>
            </div>

            {/* Cover Image Section */}
            <div className="w-full md:w-2/5">
                <h2 className="text-md font-semibold text-gray-800 mb-2">Cover Image</h2>
                <p className="text-gray-500 mb-4 text-xs">Display for story card thumbnail</p>

                <div
                    className={`relative border-2 h-[150px] w-[150px] border-dashed rounded-lg overflow-hidden ${coverImage ? 'border-transparent' : 'border-gray-300'}`}
                    // style={{ aspectRatio: '4/3' }}
                >
                    {coverImage ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={coverImage}
                                alt="Cover Preview"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-lg"
                            />
                            <button
                                onClick={triggerCoverUpload}
                                className="absolute inset-0 text-[#33164C] m-auto cursor-pointer w-28 h-8 bg-white/80 backdrop-blur-sm hover:bg-white text-xs font-medium rounded-md transition-all duration-200 flex items-center justify-center"
                            >
                                Change Image
                            </button>
                        </div>
                    ) : (
                        <div
                            className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
                            onClick={triggerCoverUpload}
                        >
                            <button
                                className="bg-[#D8D1DE29] text-[#33164C] text-xs font-medium py-2 px-4 rounded-md transition-all duration-200"
                            >
                                Upload Image
                            </button>
                        </div>
                    )}
                    <input
                        type="file"
                        ref={coverInputRef}
                        onChange={handleCoverUpload}
                        accept="image/jpeg,image/png,image/gif"
                        className="hidden"
                    />
                </div>

                <button
                    className="flex items-center gap-2 mt-4 bg-[#FFE2DF29] p-2 rounded-lg font-medium cursor-pointer hover:bg-[#fbbbb429]"
                    onClick={() => {/* Implement AI creation logic */ }}
                >
                    <Image src="/icon/generate.svg" alt="coins icon" width={13} height={13} />            
                    <span className="text-[#33164C] text-xs">Create With AI</span>
                </button>
            </div>
        </div>
    );
};

export default ImageUploaderComponent;