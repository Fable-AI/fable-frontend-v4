


"use client"

import React from 'react'
import StoryGridViewComponent from './StoryGridViewComponent';
import StoryListViewComponent from './StoryListViewComponent';

const StoryCardComponent = ({ activeControl }: { activeControl: string }) => {
    return (
        <>
            { activeControl === "list" && 
                <div className='max-h-[800px] overflow-y-auto'>
                    <StoryListViewComponent image="/img/placeholder.png" authorCount={1} />
                    <StoryListViewComponent image="/img/placeholder2.png" authorCount={2} />
                    <StoryListViewComponent image="/img/placeholder3.png" authorCount={2} />
                    <StoryListViewComponent image="/img/placeholder.png" authorCount={1} />
                    <StoryListViewComponent image="/img/placeholder2.png" authorCount={1} />
                </div> 
            }

            { activeControl === "grid" && 
                <div className='grid grid-cols-2 gap-5 max-h-[1000px] overflow-y-auto'>
                    <StoryGridViewComponent />
                    <StoryGridViewComponent />
                    <StoryGridViewComponent />
                    <StoryGridViewComponent />
                    <StoryGridViewComponent />
                    <StoryGridViewComponent />
                    <StoryGridViewComponent />
                </div> 
            }
        </>
    )
}

export default StoryCardComponent
