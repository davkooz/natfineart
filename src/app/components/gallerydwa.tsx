'use client'

import { useState } from 'react';

export default function Gallerydwa() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const images = [
        '/portfolio/fotografia_dziecieca-rodzinna/_DSC0537.jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/_DSC0692.jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/_DSC0724.jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/_DSC3112-Edit-Edit-(2).jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/_DSC4873-1-(1).jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/_DSC5337.jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/_DSC5591,poprawione.jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/_DSC5959.jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/_DSC6235-(2).jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/_DSC9014,,.jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/129.jpg',
        '/portfolio/fotografia_dziecieca-rodzinna/konrovyj-svet-v-polden.jpg',
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
                        <img src={currentImage} alt="Enlarged Image" style={{ transform: 'scale(0.9)' }} className='rounded' />
                        <button className="absolute top-16 right-16 p-4 rounded-full text-white bg-black bg-opacity-50 hover:bg-opacity-100" onClick={handleCloseModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}
