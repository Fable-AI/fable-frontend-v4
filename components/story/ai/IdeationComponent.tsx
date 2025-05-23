"use client"

import { Check, ChevronUp, Mic, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { storyGenres } from "@/data/genres";
import Image from 'next/image';
import StepperComponent from '@/components/dashboard/StepperComponent';
import { useRouter, useSearchParams } from 'next/navigation';

import { toast } from "sonner"
import axios from 'axios';
import { GenreInterface } from '@/interfaces/GenreInterface';
import MultiSelectDropdownComponent from '@/components/shared/MultiSelectDropdownComponent';
import { hidePageLoader, showPageLoader } from '@/lib/helper';
import axiosInterceptorInstance from '@/axiosInterceptorInstance';
import { StoryGenreInterface, StoryInterface, TargetAudienceInterface } from '@/interfaces/StoryInterface';

const IdeationComponent = () => {
    const [selectedTargetAudience, setSelectedTargetAudience] = useState<string[]>([]);
    const [genres, setGenres] = useState<GenreInterface[]>([]);
    const [targetAudiences, setTargetAudiences] = useState<{id: string, name: string, value?: string, label?: string }[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<any>([]);
    const [description, setDescription] = useState<string>("");
        
    useEffect(() => {
        fetchStoryGenres();
        fetchTargetAudiences();

        // let audiences = story?.storyAudiences?.map((item: TargetAudienceInterface) => (item?.targetAudienceId)) ?? [];
        // setSelectedTargetAudience(audiences);            

        // let storyGenres = story?.storyGenres?.map((item: StoryGenreInterface) => (item?.storyGenreId)) ?? [];
        // setSelectedGenres(storyGenres);            

        // setDescription(story?.projectDescription ?? "");
        
    }, [
        // story
    ]);

    const fetchStoryGenres = async () => {
        try {
            let url = `${process.env.NEXT_PUBLIC_BASE_URL}/genres`;
            const response = await axios.get(url);
            if (response?.data?.genres) {
                let formattedGenres = response?.data?.genres.map((genre: { id: number, name: string }) => {
                    return { value: genre.id, label: genre.name }
                })
                setGenres(formattedGenres)            
            }
        } catch (error) {
            console.error(error);            
        }
    }

    const fetchTargetAudiences = async () => {
        try {
            let url = `${process.env.NEXT_PUBLIC_BASE_URL}/target-audiences`;
            const response = await axios.get(url);
            if (response?.data?.targetAudiences) {
                let formattedTargetAudiences = response?.data?.targetAudiences.map((item: { id: string, name: string }) => {
                    return { value: item.id, label: item.name }
                })
                setTargetAudiences(formattedTargetAudiences)            
            }
        } catch (error) {
            console.error(error);            
        }
    }


    const handleAudienceChange = (audienceValue: string) => {
        setSelectedTargetAudience(prev => {
            if (prev.includes(audienceValue)) {
                return prev.filter(g => g !== audienceValue);
            } else {
                return [...prev, audienceValue];
            }
        });
    };

    return (
        <>
            <div className="">
                    <h1 className='capitalize text-2xl mb-2'>Ideation.</h1>
                    <p className='text-xs mb-2'>Fill in the details below</p>
                </div>

                <div className="mt-12">
                    <h1 className='capitalize text-md mb-1 font-bold'>Description</h1>
                    <p className='mb-3 text-xs'>Tell us what you'd like to create</p>

                    <div className='flex flex-col gap-1 rounded-xl bg-white p-1'>
                        <textarea className='text-xs w-full p-3 bg-white outline-0 resize-none' rows={4}></textarea>
                        <div className='flex justify-end'>
                            <button className='text-white cursor-pointer flex items-center justify-center p-2 rounded-lg m-2 bg-gradient-to-r from-[#AA4A41] to-[#33164C] hover:to-[#AA4A41] hover:from-[#33164C] transition-all'>
                                <Mic size={16}/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl mt-7 ">

                    <div className="">
                        <div>
                            <h1 className='capitalize text-md mb-1 font-bold'>Target Audience</h1>
                            <p className='text-xs'>Who are you writing for?</p>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-3 overflow-y-auto max-h-[300px] ">
    
                            {targetAudiences.map((vibe, index) => (
                                <div
                                    key={index}
                                    className={`inline-flex items-center px-4 py-2 bg-[#F5F5F5] rounded-lg cursor-pointer ${selectedTargetAudience.includes(vibe?.value) ? 'border border-[#FF877B]' : ''
                                        }`}
                                    onClick={() => handleAudienceChange(vibe?.value)}
                                >
                                    <label
                                        htmlFor={`checkbox-${index}`}
                                        className="mr-2 text-gray-600 text-xs font-medium cursor-pointer"
                                    >
                                        {vibe?.label}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            id={`checkbox-${index}`}
                                            checked={selectedTargetAudience.includes(vibe.value)}
                                            onChange={() => handleAudienceChange(vibe.value)}
                                            className="sr-only peer"
                                        />
                                        <div
                                            className="w-5 h-5 border border-gray-300 rounded-md bg-white peer-checked:bg-[#FF877B] peer-checked:border-[#FF877B] flex items-center justify-center cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent double triggering from parent's onClick
                                                handleAudienceChange(vibe.value);
                                            }}
                                        >
                                            {selectedTargetAudience.includes(vibe.value) && (
                                                <Check size={14} color="white" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <MultiSelectDropdownComponent
                            options={genres}
                            selectedValues={selectedGenres}
                            onChange={setSelectedGenres}
                            placeholder="Select Genre"
                            maxSelections={4}
                            title="Genre"
                            className="w-full"
                        />                
                    </div>

                    
                </div>

                <div className="bg-white p-4 rounded-xl mt-7">
                    <h1 className='capitalize text-md mb-1 font-bold'>Save</h1>
                    <p className='mb-4 text-xs'>Click "start writing" to save parameters</p>
                    <div className="flex items-center gap-5">
                        <button className="flex items-center cursor-pointer bg-[#33164C] text-white px-7 py-3 gap-2 rounded-xl ">
                            <Image src="/icon/feather-white.svg" alt="feather icon" className=" " width={13} height={13} />
                            <p className='text-xs'>Start Writing</p>
                        </button>

                        <button className="flex items-center cursor-pointer bg-[#F5F5F5]  px-4 py-3 gap-2 rounded-xl ">
                            <p className='text-xs'>Discard</p>
                            <Image src="/icon/waste.svg" alt="feather icon" className=" " width={13} height={13} />
                        </button>
                    </div>
                </div>

        </>
    )
}

export default IdeationComponent
