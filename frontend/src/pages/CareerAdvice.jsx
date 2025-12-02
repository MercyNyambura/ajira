import React from "react";

export default function CareerAdvice() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4">
      <div className="mx-auto max-w-4xl prose prose-lg dark:prose-invert">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold">Career Advice</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Practical tips and resources to help you find gigs and grow your
            career.
          </p>
        </header>

        <section>
          <h2>Build a Strong Profile</h2>
          <p>
            Use a clear profile photo, craft a focused bio, highlight key
            skills, and add samples or a portfolio link. Keep it up to date.
          </p>
        </section>

        <section>
          <h2>Write Winning Proposals</h2>
          <ol>
            <li>Personalize each pitch — show you understand the brief.</li>
            <li>Explain how you’ll deliver value and include relevant samples.</li>
            <li>Be concise and set realistic timelines and expectations.</li>
          </ol>
        </section>

        <section>
          <h2>Deliver Quality & Get Reviews</h2>
          <p>
            Communicate early and often, deliver on time, and ask for feedback —
            positive reviews dramatically improve discoverability.
          </p>
        </section>

        <section>
          <h2>Upskill Strategically</h2>
          <p>
            Focus on high-demand skills in your niche. Use short courses and
            micro-credentials to show proof of competence.
          </p>
        </section>

        <section>
          <h2>Manage Your Workload & Earnings</h2>
          <ul>
            <li>Set clear boundaries and working hours.</li>
            <li>Price competitively but sustainably.</li>
            <li>Track invoices and set aside emergency savings.</li>
          </ul>
        </section>

        <section>
          <h2>Helpful Resources</h2>
          <ul>
            <li><a className="text-blue-600 dark:text-blue-400" href="https://www.coursera.org">Coursera</a></li>
            <li><a className="text-blue-600 dark:text-blue-400" href="https://www.udemy.com">Udemy</a></li>
            <li><a className="text-blue-600 dark:text-blue-400" href="https://www.freecodecamp.org">freeCodeCamp</a></li>
          </ul>
        </section>

        <footer className="mt-8 border-t pt-6 text-sm text-gray-600 dark:text-gray-400">
          <p>
            Need tailored advice? Visit <a className="text-blue-600 dark:text-blue-400" href="/help">Help Center</a> or contact support.
          </p>
        </footer>
      </div>
    </main>
  );
}
