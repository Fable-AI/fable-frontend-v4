"use client"

import React from 'react'
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { StoryInterface } from '@/interfaces/StoryInterface';

interface Props {
    prevStep: () => void;
    prevLabel: string;
    story: StoryInterface | null;
    hideAddChapterBtn: boolean;
    handleAddChapterClick?: () => void;
}

const StoryEditorHeader: React.FC<Props> = ({
    prevStep,
    prevLabel,
    story,
    hideAddChapterBtn = true,
    handleAddChapterClick
}) => {
    return (
        <div className="bg-white p-4 rounded-xl mb-10">
            <div className="flex items-center justify-between mb-2">
                <div onClick={prevStep} className="flex items-center gap-1 cursor-pointer bg-[#F9F9F9] py-2 px-3 rounded-xl">
                    <i className='bx bx-chevron-left text-xl'></i>
                    <span className="text-xs font-semibold text-[#33164C]">{prevLabel}</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 cursor-pointer bg-[#F9F9F9] py-2 px-3 rounded-xl">
                        <Eye size={16} />
                        <span className="text-xs">Preview</span>
                    </div>
                    {hideAddChapterBtn === false &&
                        <div onClick={handleAddChapterClick} className="flex items-center gap-2 cursor-pointer bg-black text-white py-2 px-3 rounded-xl">
                            <Image src="/icon/book-edit.svg" alt="book-edit icon" width={13} height={13} />
                            <span className="text-xs">Add Chapter</span>
                        </div>
                    }
                </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
                <h1 className="text-3xl font-bold">{story?.projectTitle}</h1>
                {!story?.isFree &&
                    <div className="flex items-center gap-2">
                        <Image src="/icon/coins-red.svg" alt="coins icon" width={13} height={13} />
                        <span className="text-sm text-[#AA4A41] font-bold">{story?.price ?? 0}</span>
                    </div>
                }
                {story?.isFree &&
                    <div className="flex items-center gap-2">
                        <Image src="/icon/coins-green.svg" alt="coins icon" width={13} height={13} />
                        <span className="text-sm text-[#249000] font-bold">Free</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default StoryEditorHeader;

