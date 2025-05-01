"use client"

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { Info } from 'lucide-react';
import Link from "next/link";

const NOVEL_STRUCTURES = [
    {
        id: 'three-act',
        title: 'Three-Act Structure',
        chapters: 9,
        description: 'A classic beginning, middle, and end structure divided into setup, confrontation, and resolution. Perfect for traditional storytelling with clear dramatic arcs.',
        examples: 'Star Wars, The Hunger Games, Harry Potter',
        image: '/img/story-structures/three-act2.png',
        learnMoreUrl: '/learn/three-act-structure'
    },
    {
        id: 'heros-journey',
        title: 'Hero\'s Journey',
        chapters: 12,
        description: 'A circular story path where the hero leaves ordinary life, faces trials, and returns transformed. Ideal for character-driven epics and adventures.',
        examples: 'Lord of the Rings, The Lion King, The Matrix',
        image: '/img/story-structures/hero-journey2.png',
        learnMoreUrl: '/learn/heros-journey'
    },
    {
        id: 'seven-point',
        title: 'Seven-Point Structure',
        chapters: 7,
        description: 'A focused approach with hook, plot turn, pinch points, midpoint, and resolution. Great for paced narratives with clear turning points.',
        examples: 'Jurassic Park, The Martian, Gone Girl',
        image: '/img/story-structures/seven-point.png',
        learnMoreUrl: '/learn/seven-point-structure'
    },
    {
        id: 'freytags-pyramid',
        title: 'Freytag\'s Pyramid',
        chapters: 7,
        description: 'A symmetrical structure with rising action, climax, and falling action. Works best for dramatic stories with a clear peak moment.',
        examples: 'Romeo and Juliet, The Great Gatsby, Titanic',
        image: '/img/story-structures/freytag-pyramid.png',
        learnMoreUrl: '/learn/freytags-pyramid'
    },
    {
        id: 'five-act',
        title: 'Five-Act Structure',
        chapters: 9,
        description: 'A traditional dramatic structure with exposition, rising action, climax, falling action, and resolution. Ideal for complex narratives with multiple plot threads.',
        examples: 'Hamlet, Pride and Prejudice, Inception',
        image: '/img/story-structures/five-act.png',
        learnMoreUrl: '/learn/five-act-structure'
    }
];

const SHORT_STORY_STRUCTURES = [
    {
        id: 'three-act-short',
        title: 'Three-Act Structure',
        chapters: '3-5',
        description: 'A concise beginning, middle, and end that focuses on a single conflict. Perfect for efficient storytelling with clear resolution.',
        examples: 'The Gift of the Magi, The Lottery, The Tell-Tale Heart',
        image: '/img/story-structures/three-act2.png',
        learnMoreUrl: '/learn/three-act-structure'
    },
    {
        id: 'freytags-pyramid-short',
        title: 'Freytag\'s Pyramid',
        chapters: '1-3',
        description: 'A compact version focusing on buildup, climax, and resolution. Great for emotional stories with a powerful central moment.',
        examples: 'Hills Like White Elephants, The Necklace, The Most Dangerous Game',
        image: '/img/story-structures/freytag-pyramid.png',
        learnMoreUrl: '/learn/freytags-pyramid'
    },
    {
        id: 'single-effect',
        title: 'Single-Effect Structure',
        chapters: '1-3',
        description: 'Everything in the story works toward creating one powerful emotional impact. Perfect for atmospheric stories with lingering effects.',
        examples: 'The Fall of the House of Usher, The Yellow Wallpaper, The Monkey\'s Paw',
        image: '/img/story-structures/single-effect.png',
        learnMoreUrl: '/learn/single-effect-structure'
    },
    {
        id: 'in-medias-res',
        title: 'In Medias Res',
        chapters: '1-3',
        description: 'Starts in the middle of action, then fills in context through flashbacks. Great for engaging readers immediately with excitement or intrigue.',
        examples: 'Slaughterhouse-Five, The Usual Suspects, Fight Club',
        image: '/img/story-structures/in-medias-res.png',
        learnMoreUrl: '/learn/in-medias-res'
    }
];


const TestCarousel = ({ storyType = 'novel' }) => {
    const structures = storyType === 'novel' ? NOVEL_STRUCTURES : SHORT_STORY_STRUCTURES;

    return (
        <div className='px-10'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {
                        structures.map(structure => (
                            <CarouselItem key={structure.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="responsive h-full">
                                    <div className='flex relative h-full flex-col rounded-xl bg-white'>
                                        {/* Image Section */}
                                        <div className='relative overflow-hidden h-[200px]'>
                                            <Image
                                                fill={true}
                                                src={structure.image}
                                                alt={structure.title}
                                                className='w-full rounded-t-xl h-full object-cover object-center'
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
                                            />
                                            <div className="flex absolute bottom-2 right-2">
                                                <p className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">
                                                    {storyType === 'novel' ? `${structure.chapters} chapters` : `${structure.chapters} chapters`}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Content Section with Fixed Layout */}
                                        <div className="content-box flex flex-col p-4 h-[270px] border border-gray-100 rounded-b-xl">
                                            {/* Header - Fixed Height */}
                                            <div className="flex justify-between items-center mb-3">
                                                <h3 className="text-xl font-bold text-gray-800">{structure.title}</h3>
                                                <Link href={structure.learnMoreUrl}>
                                                    <span className="text-gray-400 transition-all hover:text-gray-700">
                                                        <Info className="h-5 w-5" />
                                                    </span>
                                                </Link>
                                            </div>

                                            {/* Description - Scrollable if too long */}
                                            <div className="flex-grow overflow-y-auto mb-3">
                                                <p className="text-gray-600 font-light text-sm">
                                                    {structure.description}
                                                </p>
                                            </div>

                                            {/* Examples - Fixed at Bottom */}
                                            <div className="mb-4">
                                                <p className="text-[10px] text-gray-600">
                                                    <span className="font-medium">Examples:</span> <span className="text-[#5D4076]">{structure.examples}</span>
                                                </p>
                                            </div>

                                            {/* Button - Fixed at Bottom */}
                                            <button
                                                className="w-full py-2 bg-[#5D4076] text-white cursor-pointer rounded-lg hover:bg-[#735989] transition-colors mt-auto"
                                                aria-label={`Select ${structure.title}`}
                                            >
                                                Choose
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default TestCarousel
