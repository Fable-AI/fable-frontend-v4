"use client"

import React from 'react'
import ChapterEditorComponent from './ChapterEditorComponent';
import { StoryInterface } from '@/interfaces/StoryInterface';

interface Props {
    nextStep: () => void;
    prevStep: () => void;
    story: StoryInterface | null;    
    refetch: () => void;
}


const StartWritingComponent: React.FC<Props> = ({
    nextStep,
    prevStep,
    story,
    refetch
}) => {

    return (
        <div>

            <ChapterEditorComponent 
                story={story} 
                prevStep={prevStep} 
                nextStep={nextStep} 
                refetch={refetch}
            />


        </div>
    )
}

export default StartWritingComponent
