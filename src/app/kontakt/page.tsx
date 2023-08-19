import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUs from "../components/contactus";
import Link from "next/link";

const Kontakt: React.FC = () => {
    return (
        <main className="bg-white min-w-screen min-h-screen flex flex-col px-4">
            <Navbar />
            
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 justify-center items-center mt-6">
                <div className="flex flex-col space-y-8">
                    <div className="flex items-center space-x-8">
                        <Image src="/icons/email.svg" alt="emailicon" width={32} height={32} />
                        <Link href="mailto:natalliafineart@gmail.com">
                            <p className="text-xl cursor-pointer">natalliafineart@gmail.com</p>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-8">
                        <Image src="/icons/phone.svg" alt="phoneicon" width={32} height={32} />
                        <p className="text-xl">+48 690 976 993</p>
                    </div>
                    <div className="flex items-center space-x-8">
                        <Image src="/icons/location.svg" alt="locationicon" width={32} height={32} />
                        <p className="text-xl">Warszawa - Mińsk Mazowiecki</p>
                    </div>
                    <Link href="https://www.instagram.com/natallia.wyszkowska/" target='_blank'>
                        <div className="flex items-center space-x-8 cursor-pointer">
                            <Image src="/icons/instagram.svg" alt="instagramicon" width={32} height={32} />
                            <p className="text-xl">natallia.wyszkowska</p>
                        </div>
                    </Link>
                    <Link href="https://www.facebook.com/NatalliaFineArtPhotography" target='_blank'>
                        <div className="flex items-center space-x-8 cursor-pointer">
                            <Image src="/icons/facebook.svg" alt="facebookicon" width={32} height={32} />
                            <p className="text-xl">Natallia Wyszkowska - Fotografia Film</p>
                        </div>
                    </Link>
                </div>
                
                <div className="mt-8 md:mt-0">
                    <Image src="/tosialod.jpg" alt="tosialod" width={600} height={600} className="rounded" />
                </div>
            </div>
            
            <ContactUs />
            <Footer />
        </main>
    )
}

export default Kontakt;
