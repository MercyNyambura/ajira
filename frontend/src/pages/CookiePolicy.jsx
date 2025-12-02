import React from "react";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4">
      <div className="mx-auto max-w-3xl prose prose-lg dark:prose-invert">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold">Cookie Policy</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            Last updated: January 2025
          </p>
        </header>

        <section>
          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device that help
            websites remember preferences and improve user experience.
          </p>
        </section>

        <section>
          <h2>Types of Cookies We Use</h2>
          <ul>
            <li>
              <strong>Essential:</strong> Required for authentication, security,
              and core functionality.
            </li>
            <li>
              <strong>Performance:</strong> Help us analyze usage and improve
              the site (e.g. Google Analytics).
            </li>
            <li>
              <strong>Functional:</strong> Save preferences like language and
              display settings.
            </li>
            <li>
              <strong>Advertising/Targeting:</strong> Used to show relevant
              content and measure campaign performance.
            </li>
          </ul>
        </section>

        <section>
          <h2>Third-party cookies</h2>
          <p>
            We may use trusted third parties (analytics, payment providers)
            that set their own cookies. Their practices are governed by their
            privacy policies.
          </p>
        </section>

        <section>
          <h2>Managing Cookies</h2>
          <p>
            You can control or delete cookies through your browser settings.
            Disabling cookies may limit features of the platform.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            We may update this Cookie Policy; the effective date will be
            updated. Check this page for the latest version.
          </p>
        </section>

        <footer className="mt-8 border-t pt-6 text-sm text-gray-600 dark:text-gray-400">
          <p>
            If you have questions about cookies, email{" "}
            <a className="text-blue-600 dark:text-blue-400" href="mailto:privacy@ajirio.com">privacy@ajirio.com</a>.
          </p>
        </footer>
      </div>
    </main>
  );
}
