export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Contact Us
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Have questions? Need help? We’d love to hear from you.
      </p>

      <form className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
          ></textarea>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
