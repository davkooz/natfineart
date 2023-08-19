import Navbar from '../components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';

const Omnie = () => {
    return (
        <main className="bg-white min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col md:flex-row justify-center items-center p-4">
                <div className="mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                    <Image src="/profilowe2.jpg" alt='profilowe' className='rounded' width={400} height={400} />
                </div>
                <div className='text-center px-4 md:px-0 max-w-2xl'>
                    <h1 className='font-bold text-xl mb-4'>Witam Ciebie serdecznie na mojej stronie!</h1>
                    <p>
                        <br />
                        Pozwól, że opowiem Ci kilka słów o mnie i mojej pasji.<br /><br />
                        Mam na imię Natallia.<br /><br />
                        Od najmłodszych lat uwielbiałam fotografię - mieszanka dziecięcej ciekawości, czarno-białych wspomnień i odziedziczonej po Ojcu pasji.<br /><br />
                        Wciąż widzę Tatę z Zenitem w rękach w plenerach dzieciństwa, umorusanego wywoływaczem w swojej ciemni umieszczonej w łazience.<br /><br />
                        Pamiętam mój zachwyt nad cudownym, bajkowym efektem jego magicznych sztuczek - te wspomnienia pozostały do dzisiaj dodając kolory do mojego dorosłego życia.<br /><br />
                        Teraz kolej na mnie - bajka staje się rzeczywistością...
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Omnie;
