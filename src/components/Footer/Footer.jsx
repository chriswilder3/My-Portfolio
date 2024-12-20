import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-6 mt-16">
      <div className="container mx-auto text-center">
        {/* Author Section */}
        <p className="text-lg font-semibold text-gray-300">
          Designed by <span className="text-sky-400">Sachin Doddamani</span>
        </p>

        {/* Technologies Section */}
        <p className="mt-2 text-sm text-gray-400">
          Built with <span className="text-sky-300">React</span>, <span className="text-teal-300">Tailwind CSS</span>, and ❤️.
        </p>

        {/* Divider */}
        <div className="h-0.5 bg-gray-700 my-4 mx-auto w-2/3"></div>

        {/* Year & Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Sachin Doddamani. All rights reserved.
        </p>
      </div>
    </footer>

  )
}

export default Footer