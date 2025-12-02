export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        About Ajirio
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Ajirio is a modern gig marketplace designed to connect skilled talent
        with employers looking for flexible, reliable expertise. We make gig
        hiring seamless, trusted, and accessible to everyone.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Empowering individuals with gig opportunities that support financial
            freedom and professional growth.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To become Africa’s most trusted platform for short-term and freelance work.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Our Values</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Transparency, trust, opportunity, and excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
