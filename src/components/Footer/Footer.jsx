'use client'
import Link from "next/link";

// Get the current year for the copyright notice
const date = new Date();

/**
 * Footer Component
 *
 * A reusable footer component with links and social media icons.
 *
 * @returns {ReactNode} The rendered footer component.
 */

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900">
      <div className="mx-auto w-full container p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                React Template
              </span>
            </Link>
          </div>
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Link 1
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Link 2
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Link 3
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Link 4
                  </Link>
                </li>
              </ul>
            </div>
            {/* Follow us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" target="_blank" className="hover:underline">
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="/" target="_blank" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auhref dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {date.getFullYear()}{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              React Template
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {/* Social media icons */}
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              {/* Facebook icon */}
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* More social media icons */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
