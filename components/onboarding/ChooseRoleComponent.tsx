"use client";

import React, { useState } from 'react';
import { ChevronUp, Check } from 'lucide-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';


interface Props {
    setCurrentOnboardingStep: React.Dispatch<React.SetStateAction<number>>;
}

const UserTypeSelection: React.FC<Props> = ({
    setCurrentOnboardingStep
}) => {
    const [selectedType, setSelectedType] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCreatorTypes, setSelectedCreatorTypes] = useState([]);

    const creatorTypes = [
        { id: 'hobbyist', label: 'Hobbyist' },
        { id: 'student', label: 'Student' },
        { id: 'novelist', label: 'Novelist' },
        { id: 'educator', label: 'Educator' },
        { id: 'journalist', label: 'Journalist' },
    ];

    const handleTypeSelect = (type) => {
        setSelectedType(type);
        if (type !== 'creator') {
            setIsDropdownOpen(false);
        }
    };

    const toggleCreatorType = (typeId) => {
        setSelectedCreatorTypes(prev => {
            if (prev.includes(typeId)) {
                return prev.filter(id => id !== typeId);
            } else {
                return [...prev, typeId];
            }
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="max-w-2xl mx-auto pb-12 px-4">
            <h1 className="text-5xl font-bold text-center text-gray-800 my-10">
                Are you a creator, reader or both?
            </h1>

            <div className="flex justify-center items-center gap-3 mb-8">
                <button
                    className={`flex items-center gap-2 py-2 px-4 border rounded-xl cursor-pointer bg-[#F5F5F5] ${selectedType === 'creator'
                            ? 'border-[#FF877B]'
                            : 'border-[#F5F5F5]'
                        }`}
                    onClick={() => handleTypeSelect('creator')}
                >
                    <span className="text-gray-700 text-xs">Creator</span>
                    {selectedType === 'creator' && (
                        <div className="flex items-center justify-center w-5 h-5 bg-[#FF877B] rounded-md">
                            <Check size={16} color="white" />
                        </div>
                    )}
                    {selectedType !== 'creator' && (
                        <div className="flex items-center justify-center w-5 h-5 border border-[#CFD3D4] rounded-md"></div>
                    )}
                </button>

                <button
                    className={`flex items-center gap-2 py-2 px-4 border rounded-xl cursor-pointer bg-[#F5F5F5] ${selectedType === 'reader'
                            ? 'border-[#FF877B]'
                            : 'border-[#F5F5F5]'
                        }`}
                    onClick={() => handleTypeSelect('reader')}
                >
                    <span className="text-gray-700 text-xs">Reader</span>
                    {selectedType === 'reader' && (
                        <div className="flex items-center justify-center w-5 h-5 bg-[#FF877B] rounded-md">
                            <Check size={16} color="white" />
                        </div>
                    )}
                    {selectedType !== 'reader' && (
                        <div className="flex items-center justify-center w-5 h-5 border border-[#CFD3D4]  rounded-md"></div>
                    )}
                </button>

                <span className="text-gray-500">or</span>

                <button
                    className={`flex items-center gap-2 py-2 px-4 border rounded-xl cursor-pointer bg-[#F5F5F5] ${selectedType === 'both'
                            ? 'border-[#FF877B]'
                            : 'border-[#F5F5F5]'
                        }`}
                    onClick={() => handleTypeSelect('both')}
                >
                    <span className="text-gray-700 text-xs">Both</span>
                    {selectedType === 'both' && (
                        <div className="flex items-center justify-center w-5 h-5 bg-[#FF877B] rounded-md">
                            <Check size={16} color="white" />
                        </div>
                    )}
                    {selectedType !== 'both' && (
                        <div className="flex items-center justify-center w-5 h-5 border border-[#CFD3D4]  rounded-md"></div>
                    )}
                </button>
            </div>

            {(selectedType === 'creator' || selectedType === 'both') && (
                <div className="mt-6 w-1/2 mx-auto">
                    <button
                        className="flex items-center cursor-pointer justify-between w-full p-4 bg-[#F5F5F5] rounded-md"
                        onClick={toggleDropdown}
                    >
                        <span className="text-gray-600 text-xs">Select what type of creator you are</span>
                        <ChevronUp
                            className={`transform transition-transform ${isDropdownOpen ? '' : 'rotate-180'}`}
                            size={20}
                        />
                    </button>

                    {isDropdownOpen && (
                        <div className="mt-2 space-y-2">
                            {creatorTypes.map((type) => (
                                <div key={type.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                                    <span className="text-gray-700 text-xs">{type.label}</span>
                                    <div
                                        className={`w-6 h-6 rounded-md border ${selectedCreatorTypes.includes(type.id)
                                                ? 'bg-[#FF877B] border-[#FF877B]'
                                                : 'border-gray-300'
                                            } flex items-center justify-center cursor-pointer`}
                                        onClick={() => toggleCreatorType(type.id)}
                                    >
                                        {selectedCreatorTypes.includes(type.id) && (
                                            <Check size={16} color="white" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div className="mt-16 flex items-center justify-between">
                <div className="flex items-center gap-3">

                    <button
                        onClick={() => setCurrentOnboardingStep(3)}
                        className="flex items-center gap-3 py-3 px-5 cursor-pointer transition-all bg-gray-100 hover:bg-gray-200  text-xs rounded-2xl"
                    >
                        <ArrowLeft size={16} />
                    </button>

                    <Link href="/stories">
                        <button
                            onClick={() => setCurrentOnboardingStep(4)}
                            className="flex items-center gap-3 py-3 px-5 cursor-pointer transition-all bg-[#33164C] hover:bg-purple-800 text-white text-xs rounded-2xl"
                        >
                            <span>Get in</span>
                            <ArrowRight size={16} />
                        </button>
					</Link>

                </div>

                {/* Progress indicators */}
                <div className="flex justify-center space-x-2 pt-4">
                    <div className="w-8 h-1 bg-[#33164C] rounded"></div>
                    <div className="w-8 h-1 bg-[#33164C] rounded"></div>
                    <div className="w-8 h-1 bg-[#33164C] rounded"></div>
                    <div className="w-8 h-1 bg-[#33164C] rounded"></div>
                </div>

            </div>
        </div>
    );
};

export default UserTypeSelection;