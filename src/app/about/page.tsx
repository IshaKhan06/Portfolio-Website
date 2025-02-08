import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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

      {/* About Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-yellow-500 to-gray-600 flex-grow">
        <h2 className="text-5xl font-extrabold mb-6 uppercase text-black">About Me</h2>
        <p className="text-xl max-w-3xl mb-8 leading-relaxed text-black">
          Hello! I'm <span className="text-black font-extrabold">Isha Khan</span>, a passionate Frontend Developer with a strong interest in creating intuitive and dynamic user experiences. I specialize in <span className="text-black font-extrabold">Next.js</span> and <span className="text-black font-extrabold">Tailwind CSS</span>, combining modern technologies with elegant design principles. I aim to build responsive, high-performance websites. When I'm not coding, I enjoy exploring new design trends and enhancing my development skills.
        </p>
        
        <Link href="/project">
          <button className="mt-8 bg-[#1b1422] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#422d55] transition duration-300">
            Explore My Projects
          </button>
        </Link>
      </section>

     {/* Footer */}
     <footer className="bg-[#1b1422] text-white text-center py-6 font-bold">
        <p>© 2025 Portfoilo. All rights reserved by Isha Khan</p>
      </footer>
    </div>
  );
} 
