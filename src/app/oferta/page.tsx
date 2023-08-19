'use client'

import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Link from "next/link"
import { motion } from "framer-motion"

const Oferta = () => {
    return (
        <main className="bg-white min-h-screen flex flex-col">
            <Navbar />
            <div className="flex mb-8 w-[44rem] self-center">
                <p className="text-center text-l">Zdjęcia są w formie elektronicznej + wydruki 15×21 cm na papierze jedwabistym.
                    <br />Istnieje możliwość dokupienia dodatkowych ujęć 50 zł/sztuka.
                    <br />Sesje fotograficzne odbywają się w profesjonalnie wyposażonym studio lub w plenerze i trwają – w
                    zależności od wybranego pakietu – od 30 min. do ok. 2h</p>
            </div>
            <div className="flex flex-row space-x-16 justify-center mb-8">
                <motion.button
                    whileHover={{ y: 6, transition: { duration: 0.3 } }}

                >
                    <div className="flex flex-col items-center w-96 h-96 border-2 border-black rounded-2xl gap-6 p-8">
                        <h1 className="font-bold text-3xl color-black text-center">Pakiet Podstawowy</h1>
                        <hr className="border-black border-1 rounded-full w-32" />
                        <h2 className="font-bold text-2xl">700,00 zł</h2>
                        <ul className="list-disc space-y-1 text-left">
                            <li className="text-xl">10 zdjęć w wersji elektronicznej</li>
                            <li className="text-xl">10 odbitek</li>
                        </ul>
                        <div className="flex justify-center">
                            <Link href="/kontakt"><p className="p-2 w-36 text-center rounded-2xl border-2 border-black bg-black text-white hover:text-black hover:bg-white">Kontakt</p></Link>
                        </div>
                    </div>
                </motion.button>
                <motion.button
                    whileHover={{ y: 6, transition: { duration: 0.3 } }}

                >
                    <div className="flex flex-col items-center w-96 h-96 border-2 border-black rounded-2xl gap-6 p-8">
                        <h1 className="font-bold text-3xl color-black text-center">Pakiet Rozszerzony</h1>
                        <hr className="border-black border-1 rounded-full w-32" />
                        <h2 className="font-bold text-2xl">800,00 zł</h2>
                        <ul className="list-disc space-y-1 text-left">
                            <li className="text-xl">15 zdjęć w wersji elektronicznej</li>
                            <li className="text-xl">15 odbitek</li>
                        </ul>
                        <div className="flex justify-center">
                            <Link href="/kontakt"><p className="p-2 w-36 text-center rounded-2xl border-2 border-black bg-black text-white hover:text-black hover:bg-white">Kontakt</p></Link>
                        </div>
                    </div>
                </motion.button>
                <motion.button
                    whileHover={{ y: 6, transition: { duration: 0.3 } }}

                >
                    <div className="flex flex-col items-center w-96 h-96 border-2 border-black rounded-2xl gap-6 p-8">
                        <h1 className="font-bold text-3xl color-black text-center">Pakiet MAX</h1>
                        <hr className="border-black border-1 rounded-full w-32" />
                        <h2 className="font-bold text-2xl">1000,00 zł</h2>
                        <ul className="list-disc space-y-1 text-left">
                            <li className="text-xl">25 zdjęć w wersji elektronicznej</li>
                            <li className="text-xl">25 odbitek</li>
                        </ul>
                        <div className="flex justify-center">
                            <Link href="/kontakt"><p className="p-2 w-36 text-center rounded-2xl border-2 border-black bg-black text-white hover:text-black hover:bg-white">Kontakt</p></Link>
                        </div>
                    </div>
                </motion.button>
            </div>

            <div className="flex flex-row space-x-16 justify-center">
                <motion.button
                    whileHover={{ y: 6, transition: { duration: 0.3 } }}

                >
                    <div className="flex flex-col items-center w-96 h-96 border-2 border-black rounded-2xl gap-6 p-8">
                        <h1 className="font-bold text-3xl color-black text-center">Film z Sesji</h1>
                        <hr className="border-black border-1 rounded-full w-32" />
                        <h2 className="font-bold text-2xl">1500,00 zł</h2>
                        <ul className="list-disc space-y-1 text-left">
                            <li className="text-xl">Czas trwania filmu to 3-4 minuty</li>
                        </ul>
                        <div className="flex justify-center">
                            <Link href="/kontakt"><p className="p-2 w-36 text-center rounded-2xl border-2 border-black bg-black text-white hover:text-black hover:bg-white">Kontakt</p></Link>
                        </div>
                    </div>
                </motion.button>
                <motion.button
                    whileHover={{ y: 6, transition: { duration: 0.3 } }}

                >
                    <div className="flex flex-col items-center w-96 h-96 border-2 border-black rounded-2xl gap-6 p-8">
                        <h1 className="font-bold text-3xl color-black text-center">Klip/Reels</h1>
                        <hr className="border-black border-1 rounded-full w-32" />
                        <h2 className="font-bold text-2xl">500,00 zł</h2>
                        <ul className="list-disc space-y-1 text-left">
                            <li className="text-xl">Idealny do social media</li>
                        </ul>
                        <div className="flex justify-center">
                            <Link href="/kontakt"><p className="p-2 w-36 text-center rounded-2xl border-2 border-black bg-black text-white hover:text-black hover:bg-white">Kontakt</p></Link>
                        </div>
                    </div>
                </motion.button>
            </div>
            <Footer />
        </main>
    )
}

export default Oferta