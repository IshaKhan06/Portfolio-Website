import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="shadow-md py-4 fixed top-0 w-full z-10 bg-[#2e213b]">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-white">Isha's Portfolio</h1>
          <div className=" text-white font-bold space-x-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/project">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Spacer for Navbar */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-gradient-to-r from-yellow-500 to-gray-600 text-white flex-grow">
        <h2 className="text-6xl font-bold text-black mb-4 uppercase"> Weclome To My Website</h2>
        <p className='text-2xl mb-4 text-black'> Hi, I'm Isha</p>
        <p className="text-2xl mb-8 text-black">Frontend Developer | Next.js | Tailwind CSS | HTML 
          | Javascript Enthusiast.</p>
        
      </section>

      {/* Footer */}
      <footer className="bg-[#1b1422] text-white text-center py-6 font-bold">
        <p>© 2025 Portfoilo. All rights reserved by Isha Khan</p>
      </footer>
    </div>
  );
} 
