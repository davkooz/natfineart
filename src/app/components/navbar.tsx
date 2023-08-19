// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center min-w-screen justify-between flex-wrap bg-white border-b-2 mb-8">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
        <Image src="/logo2.png" alt="Natallia Wyszkowska Logo" width={400} height={284} />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={handleToggle}
          className="flex items-center px-3 py-2 border rounded text-gray-400 border-black hover:text-gray-400 hover:border-gray-400"
        >
          <svg
            className="fill-black h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="ml-4 text-md lg:flex-grow">
          <Link href="/">
            <p className="block mt-4 lg:inline-block text-gray-400 hover:text-black mr-4">
              Strona główna
            </p>
          </Link>
          <Link href="/omnie">
            <p className="block mt-4 lg:inline-block text-gray-400 hover:text-black mr-4">
              O mnie
            </p>
          </Link>
          <Link href="/oferta">
            <p className="block mt-4 lg:inline-block text-gray-400 hover:text-black mr-4">
              Oferta
            </p>
          </Link>
          <Link href="/portfolio">
            <p className="block mt-4 lg:inline-block text-gray-400 hover:text-black mr-4">
              Portfolio
            </p>
          </Link>
          <Link href="/kontakt">
            <p className="block mt-4 mb-4 lg:inline-block text-gray-400 hover:text-black mr-4">
              Kontakt
            </p>
          </Link>
        </div>
        <div className="flex flex-row gap-8 mr-8">
                    <Link href="https://www.facebook.com/NatalliaFineArtPhotography" target='_blank'>
                    <Image src="/icons/facebook.svg" alt="facebookicon" width={28} height={28}/>
                    </Link>
                    <Link href="https://www.instagram.com/natallia.wyszkowska/" target='_blank'>
                    <Image src="/icons/instagram.svg" alt="instagramicon" width={28} height={28}/>
                    </Link>
                    <Link href="https://www.tiktok.com/@natalliawyszkowska" target='_blank'>
                    <Image src="/icons/tiktok.svg" alt="tiktokicon" width={28} height={28}/>
                    </Link>
                </div>
      </div>
    </nav>
  );
};

export default Navbar;