import Navbar from '../components/Navbar';
import SocialSidebar from '../components/SocialSidebar';
import Background from '../components/Background'; // Import the new Background
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import Experience from '../components/Experience';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative selection:bg-blue-500/30 selection:text-white">
       <Background /> {/* This sits behind everything */}
       <div className="relative z-10">
         <Navbar />
         <SocialSidebar />
         <Hero />
         <TechMarquee />
         <Experience />
         <BentoGrid />
         <Footer />
       </div>
    </main>
  );
}