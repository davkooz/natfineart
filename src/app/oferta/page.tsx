'use client'

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const Oferta = () => {
    return (
        <main className="bg-white overflow-x-hidden min-h-screen flex flex-col">
            <Navbar />
            <div className="flex mb-8 w-full md:w-[44rem] self-center px-4">
                <p className="text-center text-l sm:text-s">
                    Zdjęcia są w formie elektronicznej + wydruki 15×21 cm na papierze jedwabistym.
                    <br />Istnieje możliwość dokupienia dodatkowych ujęć 50 zł/sztuka.
                    <br />Sesje fotograficzne odbywają się w profesjonalnie wyposażonym studio lub w plenerze i trwają – w
                    zależności od wybranego pakietu – od 30 min. do ok. 2h
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 px-4">
                {[
                    { title: "Pakiet Podstawowy", price: "700,00 zł", items: ["10 zdjęć w wersji elektronicznej", "10 odbitek"] },
                    { title: "Pakiet Rozszerzony", price: "800,00 zł", items: ["15 zdjęć w wersji elektronicznej", "15 odbitek"] },
                    { title: "Pakiet MAX", price: "1000,00 zł", items: ["25 zdjęć w wersji elektronicznej", "25 odbitek"] },
                    { title: "Film z Sesji", price: "1500,00 zł", items: ["Czas trwania filmu to 3-4 minuty"] },
                    { title: "Klip/Reels", price: "500,00 zł", items: ["Idealny do social media"] }
                ].map((pakiet, index) => (
                    <motion.div 
                        whileHover={{ y: 6, transition: { duration: 0.3 } }} 
                        key={index} 
                        className="flex flex-col items-center w-full md:w-96 border-2 border-black rounded-2xl gap-6 p-4 md:p-8 m-2"
                    >
                        <h1 className="font-bold text-2xl md:text-3xl text-black text-center">{pakiet.title}</h1>
                        <hr className="border-black border-1 rounded-full w-32" />
                        <h2 className="font-bold text-xl md:text-2xl">{pakiet.price}</h2>
                        <ul className="list-disc space-y-1 text-left">
                            {pakiet.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-lg md:text-xl">{item}</li>
                            ))}
                        </ul>
                        <div className="flex justify-center">
                            <Link href="/kontakt">
                                <p className="p-2 w-36 text-center rounded-2xl border-2 border-black bg-black text-white hover:text-black hover:bg-white">Kontakt</p>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
            <Footer />
        </main>
    )
}

export default Oferta;
