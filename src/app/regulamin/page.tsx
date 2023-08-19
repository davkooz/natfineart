import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Regulamin() {
  return (
    <main className="bg-white min-w-screen min-h-screen flex flex-col">
      <Navbar />

      <div className="p-8 max-w-screen-lg mx-auto flex-grow">
        <h1 className="text-2xl font-bold mb-6">Regulamin Firmy NAT FINEART SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</h1>

        <h2 className="text-xl font-semibold mt-6 mb-4">Postanowienia Ogólne</h2>
        <p>1.1. Niniejszy regulamin określa zasady świadczenia usług fotograficznych, obróbki zdjęć oraz wideo przez firmę NAT FINEART SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ.</p>
        <p>1.2. Akceptacja niniejszego regulaminu jest równoznaczna z zawarciem umowy pomiędzy Klientem a Firmą.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Oferta Usługowa</h2>
        <p>2.1. Firma oferuje różne rodzaje sesji oraz pakiety, w tym:
          <br/>- Pakiet standardowy,
          <br/>- Pakiet rozszerzony,
          <br/> - Pakiet MAX,
          <br/> - Film z sesji,
          <br/> - Klip/Reels;</p>
        <p>2.2. Szczegółowy zakres usług oraz ich ceny określone są w cenniku dostępnym na stronie internetowej firmy lub w siedzibie firmy.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Rezerwacja i Płatności</h2>
        <p>3.1. Aby zarezerwować termin sesji zdjęciowej, Klient powinien skontaktować się z Firmą telefonicznie, mailowo lub osobiście oraz poinformować o wybranym rodzaju sesji i pakiecie.</p>
        <p>3.2. Przy rezerwacji sesji pobierany jest bezzwrotny zadatek w wysokości 100,00 zł. W wyjątkowych sytuacjach istnieje możliwość zmiany terminu, po uprzedniej konsultacji z fotografem.</p>
        <p>3.3. Płatność za sesję następuje niezwłocznie po niej.</p>
        <p>3.4. Jeden pakiet może być wykorzystany maksymalnie przez jedną rodzinę (rodzice + dzieci). W przypadku chęci uwzględnienia większej liczby osób, należy poprosić o wycenę indywidualną.</p>
        <p>3.5. Na sesję przychodzimy punktualnie. W przypadku spóźnienia, sesja jest skracana o ten czas.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Prawa Autorskie i Obróbka</h2>
        <p>4.1. Wszelkie prawa autorskie do wykonanych zdjęć i materiałów wideo należą do Firmy, chyba że postanowiono inaczej na piśmie.</p>
        <p>4.2. Firma zastrzega sobie prawo do wykorzystania wykonanych materiałów w celach promocyjnych i reklamowych, chyba że Klient wyrazi na to sprzeciw na piśmie.</p>
        <p>4.3. Zdjęcia poddawane są autorskiej obróbce. Decydując się na sesje u fotografika, klient w pełni akceptuje jego styl pracy i poczucie estetyki. Nie ma możliwości naniesienia poprawek czy zmiany kolorystyki. Surowe pliki RAW nie są udostępniane.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Odbiór Materiałów</h2>
        <p>5.1. Po zakończonej sesji fotograficznej, w przeciągu 14 dni roboczych, klient otrzymuje kompletny zestaw gotowych fotografii w formie elektronicznej. Do 20 dni roboczych otrzymuje wydruki.</p>
        <p>5.2. Wydruki można odbierać osobiście lub są one dostarczane za pośrednictwem paczkomatu (koszt 13,00 zł).</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Reklamacje</h2>
        <p>6.1. W przypadku zastrzeżeń co do jakości wykonanych usług, Klient ma prawo zgłosić reklamację w ciągu 7 dni od daty odbioru materiałów.</p>
        <p>6.2. Firma zobowiązuje się rozpatrzyć reklamację w ciągu 14 dni od jej otrzymania i poinformować Klienta o jej wyniku.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Odpowiedzialność</h2>
        <p>7.1. Firma nie ponosi odpowiedzialności za niepowodzenia wynikające z przyczyn niezależnych od Firmy, takich jak warunki pogodowe, awarie sprzętu nie wynikające z jej winy, czy zachowanie osób trzecich.</p>
        <p>7.2. Za szkody wyrządzone przez dzieci w czasie sesji odpowiadają ich rodzice/opiekunowie.</p>
        <p>7.3. Firma nie bierze odpowiedzialności za jakość wydruków dokonanych w przypadkowych laboratoriach. Jeżeli klient potrzebuje innych wydruków, powinien zamówić je bezpośrednio w firmie.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Pozostałe postanowienia</h2>
        <p>8.1. W sprawach nieuregulowanych niniejszym regulaminem mają zastosowanie przepisy Kodeksu Cywilnego.</p>
        <p>8.2. Ewentualne spory wynikające z realizacji usług będą rozstrzygane przez sąd właściwy dla siedziby Firmy.</p>
      </div>

      <Footer />
    </main>
  )
}

