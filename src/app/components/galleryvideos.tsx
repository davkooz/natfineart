'use client'

import { useState } from 'react';

export default function GalleryVideos() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');

    const videos = [
        '/portfolio/wideoportret/Synek.mp4',
        '/portfolio/wideoportret/Tosieńka.mp4',
        '/portfolio/wideoportret/współpraca.mp4',
        '/portfolio/wideoportret/zachod_kaki.mp4',
    ];

    function handleVideoClick(videoPath : string) {
        setCurrentVideo(videoPath);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    function handleBackdropClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (event.target === event.currentTarget) {
            handleCloseModal();
        }
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-8 mx-4">
                {videos.map((path, idx) => (
                    <div key={idx} className="relative h-[44rem] cursor-pointer" onClick={() => handleVideoClick(path)}>
                        <video controls className="w-full h-full">
                            <source src={path} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        
        </div>
    );
}
