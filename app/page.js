import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-purple-500 selection:text-white">
       <Navbar />
       <Hero />
       <BentoGrid />
       <Footer />
    </main>
  );
}