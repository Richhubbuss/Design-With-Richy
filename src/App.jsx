import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-inherit z-50">
        <h1 className="text-2xl font-bold">Richmond</h1>
        <div className="space-x-6 hidden sm:flex">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4">Hi, I'm Agyei Richmond 👋</h2>
        <p className="text-lg sm:text-2xl mb-6 max-w-xl">
          A creative flyer designer turning ideas into stunning visuals that grab
          attention and tell powerful stories.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          View My Designs
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p>
          I’m a passionate flyer and graphic designer with an eye for detail and a love
          for creativity. My goal is to design flyers that don’t just look good but also
          deliver results — whether it’s for events, businesses, or personal branding.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow">Photoshop</div>
          <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow">Illustrator</div>
          <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow">Canva</div>
          <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow">Creative Direction</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">My Flyer Designs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold mb-2">Event Flyer</h3>
            <p>A bold and stylish flyer created for a music concert.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold mb-2">Business Promo</h3>
            <p>Professional flyer designed to promote a local business.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold mb-2">Church Program</h3>
            <p>Creative and inspiring flyer for a church event.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-4">
          Let’s work together! Email me at{" "}
          <a href="mailto:your@email.com" className="text-blue-600 hover:underline">
            agyeirich.designs@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-blue-600">Instagram</a>
          <a href="#" className="hover:text-blue-600">Behance</a>
          <a href="#" className="hover:text-blue-600">Facebook</a>
        </div>
      </section>
    </div>
  );
}          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold mb-2">Portfolio Website</h3>
            <p>My personal portfolio built with React & TailwindCSS.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold mb-2">Project 2</h3>
            <p>A short description about the project.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-4">
          Email me at{" "}
          <a href="mailto:your@email.com" className="text-blue-600 hover:underline">
            agyeirich.designs@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-blue-600">LinkedIn</a>
          <a href="#" className="hover:text-blue-600">GitHub</a>
          <a href="#" className="hover:text-blue-600">Twitter</a>
        </div>
      </section>
    </div>
  );
      }
