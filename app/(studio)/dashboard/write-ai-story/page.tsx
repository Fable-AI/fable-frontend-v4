"use client"

import { Check, ChevronUp, Mic, X } from 'lucide-react';
import React, { useState } from 'react'
import { storyGenres } from "@/data/genres";
import Image from 'next/image';
import StepperComponent from '@/components/dashboard/StepperComponent';
import { useRouter, useSearchParams } from 'next/navigation';
import IdeationComponent from '@/components/story/ai/IdeationComponent';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import TestCarousel from '@/components/story/TestCarousel';
import ModalBoxComponent from '@/components/shared/ModalBoxComponent';


const steps = [
	{
		id: 1,
		title: "Idea",
		description: "Generate idea."
	},
	{
		id: 2,
		title: "Framework",
		description: "Generate framework."
	},
	{
		id: 3,
		title: "Outline",
		description: "Set story outline."
	},
	{
		id: 4,
		title: "Write Story",
		description: "Write the masterpiece!"
	}
];

const WriteAiStoryPage = () => {
	const step = useSearchParams().get('current-step');
	const storyId = useSearchParams().get('story-id');

	const [currentStep, setCurrentStep] = useState(step ? Number(step) : 1);
	const [openCreditsModal, setOpenCreditsModal] = useState<boolean>(true);
	const [storyType, setStoryType] = useState('novel');

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [modalSize, setModalSize] = useState('md');

	const openModal = (size) => {
		setModalSize(size);
		setIsModalOpen(true);
	};


	return (
		<div className='px-5 grid grid-cols-12'>
			<div className="col-span-9">
				<IdeationComponent />
			</div>
			<div className="col-span-3">
				<StepperComponent setCurrentStep={setCurrentStep} currentStep={currentStep} steps={steps} />
			</div>




			{/* <ModalBoxComponent
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title="Example Modal"
				width={modalSize}
				useDefaultHeader={false}
			>
				<TestCarousel storyType={storyType === 'novel' ? 'novel' : 'short'} />
			</ModalBoxComponent> */}




		</div>
	)
}

export default WriteAiStoryPage
