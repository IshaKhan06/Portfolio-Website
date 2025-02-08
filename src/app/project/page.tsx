import Link from "next/link";

const ProjectPage = () => {
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

      {/* Project Header Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 to-gray-600 text-white text-center">
        <h1 className="text-5xl font-extrabold text-black tracking-tight uppercase">Projects</h1>
        <p className="mt-10 text-2xl text-black max-w-6xl mx-auto">
          This project addresses a specific problem by providing a solution that enhances functionality using modern technologies.
          It is designed to improve user experience and ensure seamless interaction.
        </p>
      </section>

      {/* Project Screenshots Section */}
      <section className="py-12 bg-gradient-to-r from-yellow-500 to-gray-600 text-center">
        <h2 className="text-4xl font-semibold text-black uppercase mt-32">Explore Projects</h2>
        <p className="mt-8 text-2xl text-black max-w-6xl mx-auto">
          "Exploring a new project is an exciting journey that begins with a clear idea and structured planning.
          <p className="text-2xl text-black max-w-6xl mx-auto">Click to view more.</p>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">

          <div className="bg-[#1b1422] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">E-commerce Website</h2>
            <p className="text-lg text-white">using Next.js, Tailwind CSS and Typescript
              <Link href="/your-target-page">
                <p className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </p>
              </Link>
            </p>
          </div>


          <div className="bg-[#1b1422] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Portfolio Website</h2>
            <p className="text-lg text-white">using Next.js, Tailwind CSS and Typescript
              <Link href="/your-target-page">
                <p className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </p>
              </Link>
            </p>
          </div>


          <div className="bg-[#1b1422] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Blog Website</h2>
            <p className="text-lg text-white">using Next.js, Tailwind CSS and Typescript
              <Link href="https://blog-website-jade-tau.vercel.app/">
                <p className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </p>
              </Link>
            </p>
          </div>

          <div className="bg-[#1b1422] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Resume Builder</h2>
            <p className="text-lg text-white">using HTML, CSS and Typescript
              <Link href="/your-target-page">
                <p className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </p>
              </Link>
            </p>
          </div>

          <div className="bg-[#1b1422] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Spotify Clone</h2>
            <p className="text-lg text-white">using HTML, CSS and JavaScript
              <Link href="https://spotify-website-azure.vercel.app/">
                <p className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </p>
              </Link>
            </p>
          </div>

          <div className="bg-[#1b1422] py-10 rounded-xl overflow-hidden shadow-lg">
            <h2 className="font-bold text-3xl text-white uppercase mb-8 underline">Netflix Clone</h2>
            <p className="text-lg text-white">using HTML and CSS
              <Link href="https://netflix-website-kappa.vercel.app/">
                <p className="text-white hover:underline block mt-8 font-semibold text-xl cursor-pointer">
                  CLICK HERE
                </p>
              </Link>
            </p>
          </div>

        </div>
      </section>





      {/* Call to Action - Live Demo & GitHub Section */}
      <section className="py-10 text-center bg-gradient-to-r from-yellow-500 to-gray-600 ">
        <h3 className="text-4xl font-semibold text-black">Explore the Project</h3>
        <div className="mt-6 flex justify-center gap-8">
          <Link
            href="https://vercel.com/isha-khans-projects"
            target="_blank"
            rel="link"
            className="inline-block px-8 py-3 bg-[#1b1422] hover:bg-[#422d55] text-white rounded-lg shadow-lg  transform hover:scale-105 transition-all duration-300"
          >
            View Live Vercel
          </Link>

          <Link
            href="https://github.com/IshaKhan06"
            target="_blank"
            rel="link"
            className="inline-block px-8 py-3 bg-[#1b1422] hover:bg-[#422d55] text-white rounded-lg shadow-lg  transform hover:scale-105 transition-all duration-300"
          >
            View on GitHub
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1b1422] text-white text-center py-6 font-bold">
        <p>© 2025 Portfoilo. All rights reserved by Isha Khan</p>
      </footer>
    </div>
  );
};

export default ProjectPage;
