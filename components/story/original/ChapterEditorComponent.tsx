import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { StoryInterface } from '@/interfaces/StoryInterface';
import { ChapterInterface } from '@/interfaces/ChapterInterface';
import StoryEditorHeader from './StoryEditorHeader';
import axiosInterceptorInstance from '@/axiosInterceptorInstance';
import GettingStartedFooterComponent from './GettingStartedFooterComponent';

interface Props {    
    story: StoryInterface | null;    
    prevStep: () => void;
    nextStep: () => void;
    refetch: () => void;
}

const ChapterEditorComponent: React.FC<Props> = ({
    prevStep,
    nextStep,
    story,
    refetch
}) => {
    // const [chapters, setChapters] = useState<Chapter[]>([
    //     { id: '1', title: 'Chapter One', content: '' },
    // ]);

    const [chapters, setChapters] = useState<ChapterInterface[]>([]);
    const [activeChapter, setActiveChapter] = useState<string>('');
    const [isChapterListOpen, setIsChapterListOpen] = useState<boolean>(false);

    const chapterListRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (story && story?.chapters?.length > 0) {            
            let result = story?.chapters?.length > 0 ? story.chapters.sort((a, b) => a.index - b.index) : []
            setChapters(result);

            let lastChapterIndex = story?.chapters?.length - 1;
            setActiveChapter(result?.[lastChapterIndex]?.id)
        }
    }, [story]);

    useEffect(() => {
        // Focus the textarea when component mounts
        if (textareaRef.current) {
            textareaRef.current.focus();
        }

        // Close chapter list when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (chapterListRef.current && !chapterListRef.current.contains(event.target as Node)) {
                setIsChapterListOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleChapterList = () => {
        setIsChapterListOpen(!isChapterListOpen);
    };

    const selectChapter = (id: string) => {
        setActiveChapter(id);
        setIsChapterListOpen(false);
    };

    const handleContentChange = (content: string) => {
        setChapters(prevChapters => {
            return prevChapters.map(chapter => {

                if (chapter.id === activeChapter) {
                    return {
                        ...chapter,
                        content: content
                    };
                }

                return chapter;
            });
        });
    };

    const activeChapterData = chapters.find(chapter => chapter.id === activeChapter) || chapters[chapters.length - 1];

    const handleAddChapterClick = async () => {
        try {            
            const updated = await axiosInterceptorInstance.post(`/v2/chapters`, { 
                index: chapters.length + 1,
                storyId: story?.id
            });
            refetch();
        } catch (error) {
            console.log(error);            
        }
    }

    return (
        <>
            <StoryEditorHeader
                prevStep={prevStep} 
                prevLabel="Get Started" 
                story={story} 
                hideAddChapterBtn={false} 
                handleAddChapterClick={handleAddChapterClick}
            />

            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Chapter Title with Dropdown */}
                    <div
                        className="flex items-center cursor-pointer mb-1"
                        onClick={toggleChapterList}
                    >
                        <h1 className="text-xl font-bold text-gray-800">Chapter {activeChapterData?.index}</h1>
                        <ChevronDown className={`ml-2 h-5 w-5 text-gray-600 transition-transform ${isChapterListOpen ? 'transform rotate-180' : ''}`} />
                    </div>

                    {/* Chapter List Dropdown */}
                    {isChapterListOpen && (
                        <div
                            ref={chapterListRef}
                            className="absolute left-0 top-10 bg-white shadow-lg rounded-lg z-10 overflow-hidden"
                        >
                            <div className="p-2">
                                {chapters?.map(chapter => (
                                    <div
                                        key={chapter.id}
                                        className={`flex items-center p-3 rounded-md cursor-pointer ${chapter?.id === activeChapter ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                                        onClick={() => selectChapter(chapter?.id)}
                                    >
                                        <div className={`w-4 h-4 rounded-full border ${chapter?.id === activeChapter ? 'border-[#D45C51] bg-[#D45C51]' : 'border-gray-300'} mr-3 flex items-center justify-center`}>
                                            {chapter?.id === activeChapter && (
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                            )}
                                        </div>
                                        <span className="text-gray-800 text-xs">Chapter {chapter?.index}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Editor Area */}
                    <div className="mt-4 flex bg-white p-3 rounded-xl">
                        {/* <button className="h-8 w-8 flex items-center justify-center cursor-pointer bg-gray-100 rounded-md mr-3 text-gray-600 hover:bg-gray-200">
                            <Plus size={20}/>
                        </button> */}
                        <textarea
                            ref={textareaRef}
                            value={activeChapterData?.content}
                            onChange={(e) => handleContentChange(e.target.value)}
                            // onKeyUp={(e) => handleContentChange(e.target.value)}
                            // placeholder="Start writing, click the &quot;+&quot; for more tools"
                            placeholder="Start writing..."
                            className="flex-1 resize-none outline-none text-gray-700 placeholder:italic placeholder-gray-400 min-h-[500px]"
                        />
                    </div>
                </div>
                
            </div>


            <GettingStartedFooterComponent nextStep={nextStep} activeChapter={activeChapter} story={story} />
        </>
    );
};

export default ChapterEditorComponent;