'use client'

import { useState } from 'react';

export default function Gallerytrzy() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const images = [
        '/portfolio/fotografia_fineart/_DSC0366-tosia-las.jpg',
        '/portfolio/fotografia_fineart/_DSC0387-Poprawione-NR.jpg',
        '/portfolio/fotografia_fineart/_DSC2497.jpg',
        '/portfolio/fotografia_fineart/_DSC9351-kopia.jpg',
        '/portfolio/fotografia_fineart/054-(1).jpg',
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
            <div className="grid grid-cols-3 gap-8 mx-8" >
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
