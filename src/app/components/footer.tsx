'use client';

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <main className="bg-white overflow-x-hidden flex flex-col mt-8 border-t-2 pt-8">
            <div className="flex justify-between px-4 md:px-12">
                <div className="flex flex-row gap-2 md:gap-4">
                    <Link href="https://www.facebook.com/NatalliaFineArtPhotography" target='_blank'>
                    <Image src="/icons/facebook.svg" alt="facebookicon" width={32} height={32} className="md:w-6 md:h-6"/>
                    </Link>
                    <Link href="https://www.instagram.com/natallia.wyszkowska/" target='_blank'>
                    <Image src="/icons/instagram.svg" alt="instagramicon" width={32} height={32} className="md:w-6 md:h-6"/>
                    </Link>
                    <Link href="https://www.tiktok.com/@natalliawyszkowska" target='_blank'>
                    <Image src="/icons/tiktok.svg" alt="tiktokicon" width={32} height={32} className="md:w-6 md:h-6"/>
                    </Link>
                </div>
                <div className="flex flex-row gap-2 md:gap-4">
                    <Link href="/regulamin">
                        <p className="text-s block text-black hover:text-gray-400 underline underline-offset-1">
                            Regulamin
                        </p>
                    </Link>
                    <Link href="/politykaprywatnosci">
                        <p className="text-s block text-black hover:text-gray-400 underline underline-offset-1">
                            Polityka prywatności
                        </p>
                    </Link>
                </div>
            </div>
            <div className="flex pt-4 justify-center">
                <p className=" text-black text-center text-xs">&copy;NATALLIAWYSZKOWSKA.COM | 2023 | PROJEKT: DAWID KUZMICZ</p>
            </div>
        </main>
    );
};

export default Footer;
