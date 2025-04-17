"use client"

import React, { useState } from 'react'
import Image from 'next/image';


interface Props {
    setCurrentOnboardingStep: React.Dispatch<React.SetStateAction<number>>;   
}

const SetupUserProfileComponent: React.FC<Props> = ({
    setCurrentOnboardingStep
}) => {
    const [formData, setFormData] = useState({
		username: '',
		dateOfBirth: '',
		email: '',
		profileImage: null
	});

	const [imagePreview, setImagePreview] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setImagePreview(e.target.result);
			};
			reader.readAsDataURL(file);
			setFormData(prev => ({ ...prev, profileImage: file }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Form submitted:", formData);
		// Proceed to next step
	};
    
    return (
        <div className="w-full max-w-6xl flex rounded-2xl overflow-hidden ">

            {/* Left side - Form */}
            <div className="w-1/2 p-12 flex flex-col items-start">
                {/* Profile picture upload */}
                <div className="relative mb-10">
                    <div className="w-24 h-24 rounded-4xl overflow-hidden flex items-center justify-center">
                        {imagePreview ? (
                            <img
                                src={imagePreview}
                                alt="Profile"
                                // layout="fill"
                                // objectFit="cover"
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-3xl bg-purple-900 flex items-center justify-center">
                                <Image
                                    src="/avatar/default-avatar.png"
                                    alt="Default profile"
                                    width={96}
                                    height={96}
                                />
                            </div>
                        )}
                    </div>
                    <label htmlFor="upload-profile" className="cursor-pointer">
                        <div className="flex items-center mt-3 text-purple-900 bg-gray-50 px-5 py-3 rounded-xl">
                            <span className="text-xs mr-2">Upload Picture</span>
                            <Image
                                src="/icon/edit.svg"
                                alt="default avatar"
                                className=""
                                width={20}
                                height={20}
                            />
                        </div>
                        <input
                            id="upload-profile"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                    </label>
                </div>

                {/* Form fields */}
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm text-gray-600">Username</label>
                        <div className="flex items-center p-3 rounded-lg bg-gray-100">
                            <Image
                                src="/icon/user.svg"
                                alt="user icon"
                                className="mr-2"
                                width={20}
                                height={20}
                            />
                            <input
                                type="text"
                                name="username"
                                placeholder="@Username"
                                className="w-full bg-transparent text-xs focus:outline-none text-gray-500"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm text-gray-600">Date of birth</label>
                        <div className="flex items-center p-3 rounded-lg bg-gray-100">
                            <Image
                                src="/icon/calendar.svg"
                                alt="calendar icon"
                                className="mr-2"
                                width={20}
                                height={20}
                            />
                            <input
                                type="text"
                                name="dateOfBirth"
                                placeholder="April, 4th 1998"
                                className="w-full bg-transparent text-xs focus:outline-none text-gray-500"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm text-gray-600">Email</label>
                        <div className="flex items-center p-3 rounded-lg bg-gray-100">
                            <Image
                                src="/icon/email.svg"
                                alt="email icon"
                                className="mr-2"
                                width={20}
                                height={20}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                className="w-full bg-transparent focus:outline-none text-xs text-gray-500"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                        <button
                            onClick={() => setCurrentOnboardingStep(2)}
                            type="submit"
                            className="flex items-center gap-3 py-3 px-5 cursor-pointer transition-all bg-[#33164C] hover:bg-purple-800 text-white text-xs rounded-2xl"
                        >
                            <span>Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Progress indicators */}
                        <div className="flex justify-center space-x-2 pt-4">
                            <div className="w-8 h-1 bg-[#33164C] rounded"></div>
                            <div className="w-8 h-1 bg-gray-200 rounded"></div>
                            <div className="w-8 h-1 bg-gray-200 rounded"></div>
                            <div className="w-8 h-1 bg-gray-200 rounded"></div>
                        </div>

                    </div>

                </form>
            </div>

            {/* Right side - Image */}
            <div className="w-1/2  flex items-center justify-center p-6">
                <div className="rounded-3xl overflow-hidden w-full h-full relative">
                    <Image
                        src="/img/background-2.png"
                        alt="Registration artwork"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-3xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default SetupUserProfileComponent
