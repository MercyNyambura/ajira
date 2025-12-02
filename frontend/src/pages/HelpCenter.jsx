export default function HelpCenter() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Help Center
      </h1>

      <div className="space-y-4">
        <details className="p-5 bg-white dark:bg-gray-800 shadow rounded-lg">
          <summary className="font-semibold cursor-pointer">
            How do I create an Ajirio account?
          </summary>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Simply click "Sign Up" and follow the instructions.
          </p>
        </details>

        <details className="p-5 bg-white dark:bg-gray-800 shadow rounded-lg">
          <summary className="font-semibold cursor-pointer">
            How do I post a gig?
          </summary>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Go to the dashboard → Post a Gig and fill in the required details.
          </p>
        </details>
      </div>
    </div>
  );
}
