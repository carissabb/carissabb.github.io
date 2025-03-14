import React from 'react';

export const Contact = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Let's connect and discuss potential opportunities.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <a
              href="mailto:carissab@vt.edu"
              className="text-lg font-semibold text-indigo-600 hover:text-indigo-500"
            >
              carissab@vt.edu
            </a>
            <div className="flex gap-4">
              <a
                href="http://www.linkedin.com/in/carissabostian/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-indigo-600 hover:text-indigo-500"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                  alt="LinkedIn Logo"
                  className="w-6 h-6 inline-block"
                />
              </a>
              <a
                href="https://github.com/carissabb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-indigo-600 hover:text-indigo-500"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub Logo"
                  className="w-6 h-6 inline-block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
