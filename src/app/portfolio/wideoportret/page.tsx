import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import Image from "next/image"
import React from 'react';
import GalleryVideos from "@/app/components/galleryvideos";
import Link from "next/link";

const Wideoportret = () => {
    return (
        <main className="bg-white min-h-screen overflow-x-hidden flex flex-col">
            <Navbar />
            <div className="flex flex-col items-center justify-center mb-4">
                <h1 className="font-bold text-4xl text-black">Wideoportret</h1>
                <hr className="border-black border-1 rounded-full w-96 mt-2" />
            </div>
            <GalleryVideos />
            <div className="flex justify-center mt-8">
                <Link href="/portfolio"><p className="p-2 w-36 text-center rounded-2xl border-2 border-black bg-black text-white hover:text-black hover:bg-white">Powrót</p></Link>
            </div>
            <Footer />
        </main>
    )
}

export default Wideoportret