"use client"

import StoryStructureCarousel from '@/components/story/StoryStructureCarousel';
import TestCarousel from '@/components/story/TestCarousel';
// pages/story-structure-selection.jsx
import { useState } from 'react';
// import StoryStructureCarousel from '../components/StoryStructureCarousel';

export default function StoryStructureSelectionPage() {
	const [storyType, setStoryType] = useState('novel');

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
			<div className="container mx-auto px-4 py-12">
				<h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
					Create Your Story
				</h1>

				<div className="max-w-md mx-auto mb-10">
					<div className="bg-white rounded-lg shadow overflow-hidden">
						<div className="flex">
							<button
								className={`flex-1 py-4 font-medium text-center ${storyType === 'novel'
										? 'bg-[#5D4076] text-white'
										: 'bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200'
									} transition-colors`}
								onClick={() => setStoryType('novel')}
							>
								Novel
							</button>
							<button
								className={`flex-1 py-4 font-medium text-center ${storyType === 'short'
										? 'bg-[#5D4076] text-white'
										: 'bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200'
									} transition-colors`}
								onClick={() => setStoryType('short')}
							>
								Short Story
							</button>
						</div>
					</div>
				</div>

				<div className="mt-8">
					{/* <StoryStructureCarousel storyType={storyType === 'novel' ? 'novel' : 'short'} /> */}
					<TestCarousel storyType={storyType === 'novel' ? 'novel' : 'short'} />
				</div>

				<div className="mt-12 text-center">
					<button className="px-8 py-3 bg-[#5D4076] text-white rounded-lg shadow hover:bg-[#735989] transition-colors font-medium">
						Decide for me
					</button>
				</div>


			</div>
		</div>
	);
}