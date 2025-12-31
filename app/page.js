import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] selection:bg-blue-500/30 selection:text-blue-200">
       <Navbar />
       <Hero />
       <Experience />
       <BentoGrid />
       <Footer />
    </main>
  );
}