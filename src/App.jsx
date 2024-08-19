import React from 'react';
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 text-gray-800 font-sans">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Jennifer & David</h1>
        <p className="text-xl">Are getting married!</p>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-12 text-center">
          <FaHeart className="text-5xl text-pink-500 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold mb-4">Save the Date</h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <FaCalendarAlt className="text-pink-500" />
            <p className="text-xl">April 20th, 2025</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FaMapMarkerAlt className="text-pink-500" />
            <p className="text-xl">Bangkok, Thailand</p>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Story</h2>
          <p className="text-center">
            We're excited to celebrate our love with you! More details about our journey and the wedding will be coming soon.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Tuned</h2>
          <p>
            We'll be updating this site with more information about the wedding, travel details, and our registry. Check back soon!
          </p>
        </section>
      </main>

      <footer className="mt-12 py-4 text-center text-sm text-gray-600">
        <p>&copy; 2024 Jennifer Leighton & David O'Neil</p>
      </footer>
    </div>
  );
};

export default App;