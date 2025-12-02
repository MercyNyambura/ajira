import React from "react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4">
      <div className="mx-auto max-w-4xl prose prose-lg dark:prose-invert">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Last updated: January 2025 — Please read these terms carefully.
          </p>
        </header>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Ajirio, you agree to be bound by these Terms
            of Service. If you do not agree, do not use the platform.
          </p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use Ajirio. By registering you
            confirm your information is accurate and that you have the right to
            enter into these terms.
          </p>
        </section>

        <section>
          <h2>3. User Accounts & Security</h2>
          <ul>
            <li>Keep account credentials secure and private.</li>
            <li>Notify Ajirio immediately of any unauthorized use.</li>
            <li>Ajirio is not liable for losses from compromised accounts.</li>
          </ul>
        </section>

        <section>
          <h2>4. Acceptable Use</h2>
          <p>
            Users must not post illegal, fraudulent, discriminatory, or
            abusive content. Violations may result in content removal,
            account suspension, or termination.
          </p>
        </section>

        <section>
          <h2>5. Gig Listings & Payments</h2>
          <p>
            Employers guarantee accuracy of gig listings. Ajirio is not
            responsible for payment disputes between users; payment is handled
            by third-party processors and governed by their terms.
          </p>
        </section>

        <section>
          <h2>6. Intellectual Property</h2>
          <p>
            All Ajirio content (branding, UI, text, images) is owned by Ajirio.
            Users may not reproduce or distribute platform content without
            written permission.
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            Ajirio is not liable for indirect, incidental, or consequential
            damages arising from use of the platform. Use the service at your
            own risk.
          </p>
        </section>

        <section>
          <h2>8. Termination</h2>
          <p>
            Ajirio may suspend or terminate accounts for violations of these
            terms or for legal reasons.
          </p>
        </section>

        <section>
          <h2>9. Changes to These Terms</h2>
          <p>
            We may update these Terms. Continued use after changes means you
            accept the new version — check back periodically.
          </p>
        </section>

        <footer className="mt-8 border-t pt-6 text-sm text-gray-600 dark:text-gray-400">
          <p>
            Questions? Contact <a className="text-blue-600 dark:text-blue-400" href="mailto:support@ajirio.com">support@ajirio.com</a>.
          </p>
        </footer>
      </div>
    </main>
  );
}
