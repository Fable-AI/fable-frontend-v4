
"use client"

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, Info } from 'lucide-react';

// Story structures data
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

const StoryStructureCarousel = ({ storyType = 'novel' }) => {
    const structures = storyType === 'novel' ? NOVEL_STRUCTURES : SHORT_STORY_STRUCTURES;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const maxIndex = structures.length - 1;
    const carouselRef = useRef(null);

    // For smaller screens, show only one item
    const [itemsToShow, setItemsToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex >= maxIndex - itemsToShow + 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex <= 0 ? maxIndex - itemsToShow + 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextSlide();
        }

        if (touchStart - touchEnd < -50) {
            prevSlide();
        }
    };

    const visibleStructures = [];
    for (let i = 0; i < itemsToShow; i++) {
        const index = (currentIndex + i) % structures.length;
        visibleStructures.push(structures[index]);
    }

    return (
        <div className="w-full">
            <h2 className="text-2xl text-gray-600 font-bold text-center mb-6">
                Choose Your {storyType === 'novel' ? 'Novel' : 'Short Story'} Structure
            </h2>

            <div className="relative">
                {/* Carousel Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Previous"
                >
                    <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Next"
                >
                    <ChevronRightIcon className="h-6 w-6 text-gray-700" />
                </button>

                {/* Carousel Container */}
                <div
                    ref={carouselRef}
                    className="flex"
                    // className="flex overflow-hidden"                    
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="flex transition-transform duration-300 ease-in-out" style={{
                        transform: `translateX(0%)`,
                        width: `${100 * structures.length / itemsToShow}%`
                    }}>
                        {visibleStructures.map((structure, index) => (
                            <div
                                key={structure.id}
                                className={`px-2 flex-shrink-0`}
                                style={{ width: `${100 / itemsToShow}%` }}
                            >
                                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-48 sm:h-56 w-full bg-white overflow-hidden">
                                        <img
                                            src={structure.image}
                                            alt={structure.title}
                                            // layout="fill"
                                            // objectFit="contain"
                                            // className="p-2"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-gray-800">{structure.title}</h3>
                                            <Link href={structure.learnMoreUrl}>
                                                <span className="text-gray-400 transition-all hover:text-gray-700">
                                                    <Info className="h-5 w-5" />
                                                </span>
                                            </Link>
                                        </div>

                                        <p className="text-xs text-gray-600 mb-2">
                                            {storyType === 'novel' ? `${structure.chapters} chapters` : `${structure.chapters} chapters`}
                                        </p>

                                        <p className="text-gray-700 text-sm mb-4 flex-grow">
                                            {structure.description}
                                        </p>

                                        <div className="mt-auto">
                                            <p className="text-xs text-gray-600">
                                                <span className="font-medium">Examples:</span> {structure.examples}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Select Button */}
                                    <div className="px-4 pb-4">
                                        <button
                                            className="w-full py-2 bg-[#5D4076] text-white cursor-pointer rounded-lg hover:bg-[#735989] transition-colors"
                                            aria-label={`Select ${structure.title}`}
                                        >
                                            Choose
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6">
                {structures.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 mx-1 cursor-pointer rounded-full ${index === currentIndex ? 'bg-[#5D4076]' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default StoryStructureCarousel;