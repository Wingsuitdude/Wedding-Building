import React, { useState, useEffect } from "react";

function App() {
  const weddingDate = new Date("2025-04-20T00:00:00Z").getTime();
  const [isHovered, setIsHovered] = useState(false);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-body flex flex-col items-center justify-center">
      <header className="text-center py-10">
        <h1 className="text-5xl md:text-7xl font-heading text-pink-300 animate-bounce">
          💕 David O'Neil & Jennifer Leighton 💕
        </h1>
        <p className="text-3xl md:text-4xl mt-4 text-yellow-300 animate-fade-in">
          Are Getting Married!
        </p>
        <p className="text-2xl md:text-3xl mt-2 text-pink-200 animate-fade-in">
          🌸 4/20/25 - Bangkok, Thailand 🌸
        </p>
      </header>

      <section className="py-16 bg-gray-800 text-center rounded-xl shadow-lg mx-4">
        <h2 className="text-4xl md:text-5xl font-heading text-pink-300 animate-slide-in">
          You're Invited! 🌷
        </h2>
        <p className="text-2xl md:text-3xl mt-6 max-w-2xl mx-auto text-gray-200">
          Join us digitally as we live stream the ceremony from Bang Kachao, the Green Lung of Bangkok. We can't wait to celebrate with you!
        </p>
        <div className="mt-6 text-4xl">
          🌸 🏯 🌸
        </div>
      </section>

      <section className="py-20 bg-green-900 text-center rounded-xl shadow-lg mx-4 mt-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-floral-pattern opacity-20 animate-spin-slow"></div>
        <h2 className="text-4xl md:text-5xl font-heading text-green-200 animate-slide-in">
          Save the Date 🌸
        </h2>
        <p className="text-2xl md:text-3xl mt-6 text-yellow-300">
          April 20th, 2025
        </p>
        <div 
          className="mt-10 flex justify-center items-center cursor-pointer transition-transform transform hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-48 h-48 bg-thai-flag rounded-full flex items-center justify-center text-3xl font-bold text-white animate-pulse relative">
            {isHovered ? (
              <div className="absolute inset-0 flex items-center justify-center text-yellow-300">
                {countdown}
              </div>
            ) : (
              "💌 Live Stream 💌"
            )}
          </div>
        </div>
      </section>

      <footer className="py-10 bg-gray-700 text-center text-white rounded-xl shadow-lg mx-4 mt-12">
        <p className="text-xl md:text-2xl">
          We hope to see you there! Invitations have been sent to friends and family.
        </p>
        <p className="mt-4 text-lg md:text-xl">
          💕
          <a href="#" className="text-pink-400 underline hover:text-pink-600 transition-all mx-2">
            More Details
          </a>
          💕
        </p>
      </footer>
    </div>
  );
}

export default App;
