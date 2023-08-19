'use client'

import { useState } from 'react';

export default function Gallery() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const images = [
        '/portfolio/fotografia_portretowa/kaki-mikolajki.jpg',
        '/portfolio/fotografia_portretowa/_DSC0498-kopia.jpg',
        '/portfolio/fotografia_portretowa/_DSC929.jpg',
        '/portfolio/fotografia_portretowa/_DSC0504-(1).jpg',
        '/portfolio/fotografia_portretowa/_DSC1980.jpg',
        '/portfolio/fotografia_portretowa/_DSC9323-kopia.jpg',
        '/portfolio/fotografia_portretowa/kaki-z-gitara,.jpg',
    ];

    function handleImageClick(imagePath: string) {
        setCurrentImage(imagePath);
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
            <div className="grid lg:grid-cols-3 md:grid-cold-2 sm:grid-cols-1 gap-8 mx-8">
                {images.map((path, idx) => (
                    <div key={idx} className="relative h-[44rem] cursor-pointer" onClick={() => handleImageClick(path)}> 
                        <img src={path} alt={`Gallery Image ${idx + 1}`} className="object-cover w-full h-full object-top" />
                    </div>
                ))}
            </div>
            
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={handleBackdropClick}>
                    <div className="relative">
                        <img src={currentImage} alt="Enlarged Image" style={{ transform: 'scale(0.9)' }} className='rounded'/>
                        <button className="absolute top-16 right-16 p-4 rounded-full text-white bg-black bg-opacity-50 hover:bg-opacity-100" onClick={handleCloseModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}
