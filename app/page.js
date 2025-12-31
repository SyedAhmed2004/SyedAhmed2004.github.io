import Navbar from '../components/Navbar';
import SocialSidebar from '../components/SocialSidebar';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee'; // The running symbols
import Experience from '../components/Experience';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
       <Navbar />
       <SocialSidebar />
       <Hero />
       <TechMarquee />
       <Experience />
       <BentoGrid />
       <Footer />
    </main>
  );
}