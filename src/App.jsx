export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="p-6 bg-white dark:bg-gray-800 shadow">
        <nav className="flex justify-between items-center max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I'm Richmond</h2>
        <p className="text-lg">A passionate Flyer Designer</p>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p>
          I’m a creative flyer designer with experience crafting bold, stylish, and professional
          designs for events, businesses, and organizations. My goal is to help brands stand out
          with unique visual storytelling.
        </p>
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
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p>
          Interested in working together? Let’s connect!  
          <br />
          <a
            href="mailto:your-email@example.com"
            className="text-blue-500 hover:underline"
          >
            your-email@example.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-white dark:bg-gray-800 text-center">
        <p>&copy; {new Date().getFullYear()} Richmond. All rights reserved.</p>
      </footer>
    </div>
  );
}
