'use client'

import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"


const Portfolio = () => {
    return (
        <main className="bg-white min-h-screen flex flex-col">
            <Navbar />
            <div className="grid grid-cols-4 gap-8 mx-4">
                <div className="flex relative">
                    <Link href="/portfolio/fotografia_portretowa">
                        <motion.button
                            whileHover={{ y: 8, transition: { duration: 0.3 } }}
                            className="relative"
                        >
                            <div className="image-container blur transition duration-300 ease-in-out blur-sm h-[44rem] hover:blur-none">
                                <img src="/portfolio/fotografia_portretowa/_DSC9323-kopia.jpg" alt="portretowa" className="object-cover w-full h-full object-top" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black text-2xl p-4 rounded-2xl bg-white border-4 border-black hover:opacity-0">
                                Portret
                            </div>
                        </motion.button>

                    </Link>
                </div>
                <div className="flex relative">
                    <Link href="/portfolio/fotografia_rodzinna_i_dziecieca">
                        <motion.button
                            whileHover={{ y: 8, transition: { duration: 0.3 } }} className="relative">
                            <div className="image-container blur transition duration-300 ease-in-out blur-sm h-[44rem] hover:blur-none">
                                <img src="/portfolio/fotografia_dziecieca-rodzinna/_DSC9014,,.jpg" alt="dzieciecarodzinna" className="object-cover w-full h-full object-top" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black text-2xl w-64 p-4 rounded-2xl bg-white border-4 border-black hover:opacity-0">
                                Rodzina i Dzieci
                            </div>
                        </motion.button>
                    </Link>
                </div>
                <div className="flex relative">
                    <Link href="/portfolio/fotografia_fineart">
                        <motion.button
                            whileHover={{ y: 8, transition: { duration: 0.3 } }} className="relative">
                            <div className="image-container blur transition duration-300 ease-in-out relative blur-sm h-[44rem] hover:blur-none">
                                <img src="/portfolio/fotografia_fineart/_DSC0387-Poprawione-NR.jpg" alt="fineart" className="object-cover w-full h-full object-top" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black text-2xl p-4 rounded-2xl bg-white border-4 border-black hover:opacity-0">
                                Fineart
                            </div>
                        </motion.button>
                    </Link>
                </div>
                <div className="flex relative">
                    <Link href="/portfolio/wideoportret">
                        <motion.button
                            whileHover={{ y: 8, transition: { duration: 0.3 } }} className="relative">
                            <div className="image-container blur transition duration-300 ease-in-out blur-sm h-[44rem] hover:blur-none">
                                <img src="/portfolio/fotografia_portretowa/_DSC1980.jpg" alt="wideo" className="object-cover w-full h-full object-top" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black text-2xl p-4 rounded-2xl bg-white border-4 border-black hover:opacity-0">
                                Wideoportret
                            </div>
                        </motion.button>
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Portfolio