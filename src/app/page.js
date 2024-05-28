import HeroSection from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex mx-auto min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 py-12">
        <HeroSection />
      </div>
    </main>
  );
}
