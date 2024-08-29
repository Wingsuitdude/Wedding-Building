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
          Jennifer 💕 David 
        </h1>
        <p className="text-3xl md:text-4xl mt-4 text-yellow-300 animate-fade-in">
          Are Getting Married!
        </p>
        <p className="text-2xl md:text-3xl mt-2 text-pink-200 animate-fade-in">
           4/20/25 - Bangkok, Thailand
        </p>
      </header>

      <section className="py-16 bg-gray-800 text-center rounded-xl shadow-lg mx-4">
        <h2 className="text-4xl md:text-5xl font-heading text-pink-300 animate-slide-in">
        🌷You're Invited!🌷
        </h2>
        <p className="text-2xl md:text-3xl mt-6 max-w-2xl mx-auto text-gray-200">
          Everyone is invited to join us digitally as we live stream the ceremony from Sri Nakhon Botanical Garden in Bang Kachao, the Green Lung of Bangkok.
        </p>

        <p className="text-2xl md:text-3xl mt-6 max-w-2xl mx-auto text-gray-200">
          Friends and family will recieve invitation with information on joining us at our private Villa where the reception will take place!
        </p>
        <div className="mt-6 text-4xl">
        💐💍👫💍💐
        </div>
      </section>

    </div>
  );
}

export default App;
