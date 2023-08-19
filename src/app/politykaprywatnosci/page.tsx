import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function PolitykaPrywatnosci() {
  return (
    <main className="overflow-x-hidden bg-white min-h-screen flex flex-col">
      <Navbar/>

      <div className="p-8 max-w-screen-lg mx-auto flex-grow">
        <h1 className="text-2xl font-bold mb-6">Polityka Prywatności firmy NAT FINEART SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</h1>

        <h2 className="text-xl font-semibold mt-6 mb-4">Wprowadzenie</h2>
        <p>1.1. Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych uzyskanych przez firmę NAT FINEART SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ w związku z korzystaniem przez Klientów z oferty firmy.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Administrator Danych Osobowych</h2>
        <p>2.1. Administratorem danych osobowych jest firma NAT FINEART SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, adres siedziby: UL. PUŁAWSKA 12 /3, NIP: 5252924812, REGON: 52319329600000.</p>
        <p>2.2. W sprawach dotyczących ochrony danych osobowych można kontaktować się mailowo pod adresem: natalliafineart@gmail.com lub telefonicznie pod numerem: +48 690 976 993.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Zakres przetwarzanych danych</h2>
        <p>3.1. Firma przetwarza następujące kategorie danych osobowych: - Dane identyfikacyjne: imię i nazwisko, adres, numer telefonu, adres e-mail. - Dane związane z realizacją usługi: zdjęcia, nagrania wideo.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Cel i podstawa przetwarzania</h2>
        <p>4.1. Dane są przetwarzane w celu realizacji zawartej umowy, a także w celach marketingowych i archiwalnych.</p>
        <p>4.2. Podstawą przetwarzania danych jest zgoda Klienta lub konieczność wykonania umowy.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Prawa osoby, której dane dotyczą</h2>
        <p>5.1. Każda osoba, której dane dotyczą (Klient), ma prawo do dostępu do swoich danych, ich poprawienia, usunięcia lub ograniczenia przetwarzania, a także prawo do wniesienia sprzeciwu wobec przetwarzania.</p>
        <p>5.2. Klient ma prawo cofnięcia zgody na przetwarzanie danych w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Okres przechowywania danych</h2>
        <p>6.1. Dane osobowe Klientów są przechowywane przez okres niezbędny do realizacji usług, a po tym okresie przez czas niezbędny dla ochrony praw firmy NAT FINEART SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, a także zgodnie z obowiązującymi przepisami prawa.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Udostępnienie danych</h2>
        <p>7.1. Dane osobowe mogą być udostępniane podmiotom uprawnionym do ich otrzymania na podstawie obowiązujących przepisów prawa.</p>
        <p>7.2. Dane nie są przekazywane poza obszar Unii Europejskiej.</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Cookies i podobne technologie</h2>
        <p>8.1. Jeżeli firma posiada stronę internetową, może używać plików cookies w celu dostosowania treści strony do preferencji użytkowników oraz optymalizacji korzystania ze stron internetowych. Pliki cookies można w każdej chwili zablokować za pomocą ustawień przeglądarki.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Zmiany w Polityce Prywatności</h2>
        <p>9.1. Firma NAT FINEART SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. O wszelkich zmianach i nowościach osoby, których dane dotyczą, będą informowane w odpowiedni sposób.</p>
      </div>

      <Footer/>
    </main>
  )
}
