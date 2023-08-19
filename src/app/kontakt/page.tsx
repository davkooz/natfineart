import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUs from "../components/contactus";
import Link from "next/link";

const Kontakt: React.FC = () => {
    return (
        <main className="bg-white overflow-x-hidden min-h-screen flex flex-col px-4">
            <Navbar />
            
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 justify-center items-center mt-6">
                <div className="flex flex-col space-y-6 md:space-y-8">
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <Image src="/icons/email.svg" alt="emailicon" width={32} height={32} />
                        <Link href="mailto:natalliafineart@gmail.com">
                            <div className="text-lg md:text-xl cursor-pointer text-black">natalliafineart@gmail.com</div>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <Image src="/icons/phone.svg" alt="phoneicon" width={32} height={32} />
                        <div className="text-lg md:text-xl text-black">+48 690 976 993</div>
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <Image src="/icons/location.svg" alt="locationicon" width={32} height={32} />
                        <div className="text-lg md:text-xl text-black">Warszawa - Mińsk Mazowiecki</div>
                    </div>
                    <Link href="https://www.instagram.com/natallia.wyszkowska/" target='_blank'>
                        <div className="flex items-center space-x-4 md:space-x-8 cursor-pointer">
                            <Image src="/icons/instagram.svg" alt="instagramicon" width={32} height={32} />
                            <div className="text-lg md:text-xl text-black">natallia.wyszkowska</div>
                        </div>
                    </Link>
                    <Link href="https://www.facebook.com/NatalliaFineArtPhotography" target='_blank'>
                        <div className="flex items-center space-x-4 md:space-x-8 cursor-pointer">
                            <Image src="/icons/facebook.svg" alt="facebookicon" width={32} height={32} />
                            <div className="text-lg md:text-xl text-black">Natallia Wyszkowska - Fotografia Film</div>
                        </div>
                    </Link>
                </div>
                
                <div className="mt-8 md:mt-0">
                    <Image src="/tosialod.jpg" alt="tosialod" width={300} height={300} className="rounded md:w-[600px] md:h-[600px]" />
                </div>
            </div>
            
            <ContactUs />
            <Footer />
        </main>
    )
}

export default Kontakt;
