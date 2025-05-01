"use client"

import { useEffect, useState } from 'react';
import StepperComponent from '@/components/dashboard/StepperComponent';
import GetStartedComponent from '@/components/story/original/GetStartedComponent';
import StartWritingComponent from '@/components/story/original/StartWritingComponent';
import PublishOriginalComponent from '@/components/story/original/PublishOriginalComponent';

import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInterceptorInstance from '@/axiosInterceptorInstance';
import { StoryInterface } from '@/interfaces/StoryInterface';


const steps = [
    {
        id: 1,
        title: "Get Started",
        description: "Setting the tone"
    },
    {
        id: 2,
        title: "Write It!",
        description: "Pour out your creativity."
    },
    {
        id: 3,
        title: "Publish It!",
        description: "Send your masterpiece live."
    }
];

const WriteOriginalStoryPage = () => {    
    const step = useSearchParams().get('current-step');
    const storyId = useSearchParams().get('story-id');

    const [currentStep, setCurrentStep] = useState(step ? Number(step) : 1);
    const [story, setStory] = useState<StoryInterface | null>(null);

    useEffect(() => {
        setCurrentStep(step ? Number(step) : 1)
    }, [])
    

    const { data: storyData, isFetching, isError, refetch } = useQuery({
        queryKey: ['storyFromScratchFormData', storyId],
        queryFn: async () => {
            let url = `${process.env.NEXT_PUBLIC_BASE_URL}/v2/stories/${storyId}`;

            const response = await axiosInterceptorInstance.get(url);
            if (response?.data?.story) {
                setStory(response?.data?.story);
                setCurrentStep(response?.data?.story?.currentStep);                
            }
            return response?.data?.story;
        },
        enabled: !!storyId  
    });


    // Function to handle moving to the next step
    const nextStep = () => {
        let stepLength = 3;
        if (currentStep < stepLength) {
            setCurrentStep(currentStep + 1);
        }
    };

    // Function to handle moving to the previous step
    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className='px-5 grid grid-cols-12'>
            <div className="col-span-9">        
                { !storyId && 
                    <div>
                        { currentStep === 1 && <GetStartedComponent nextStep={nextStep} setStory={setStory} currentStep={currentStep} /> }                
                    </div>
                }

                { storyId && 
                    <div>                                  
                        { currentStep === 1 && <GetStartedComponent nextStep={nextStep} story={story} setStory={setStory} currentStep={currentStep} />  }
                        { currentStep === 2 && <StartWritingComponent nextStep={nextStep}  prevStep={prevStep} story={story} refetch={refetch} />  }
                        { currentStep === 3 && <PublishOriginalComponent prevStep={prevStep} isFree={false} story={story} refetch={refetch}/> }
                    </div>
                }
            </div>
            <div className="col-span-3">
                <StepperComponent setCurrentStep={setCurrentStep} currentStep={currentStep} steps={steps} />
            </div>
        </div>
    )
}

export default WriteOriginalStoryPage
