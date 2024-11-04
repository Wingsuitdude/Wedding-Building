import React, { useEffect, useState } from 'react';
import { Heart, Plane, FileCheck, Home, Mail, Phone, Thermometer, Wallet, Smartphone } from 'lucide-react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [headerText, setHeaderText] = useState('');
  const englishText = 'Our Thailand Wedding';
  const thaiText = 'งานแต่งงานของเราที่เมืองไทย';
  const [isTyping, setIsTyping] = useState(true);
  const [isThai, setIsThai] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentText = isThai ? thaiText : englishText;
    let currentIndex = 0;
    
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex < currentText.length) {
          setHeaderText(prev => currentText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setIsThai(!isThai);
          }, 1000);
          clearInterval(typingInterval);
        }
      }, 150);

      return () => clearInterval(typingInterval);
    }
  }, [isTyping, isThai]);

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2025-04-20T17:00:00+07:00');
      const now = new Date();
      const difference = weddingDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Fixed Header Title */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-rose-900/20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-rose-500 text-center py-4 md:py-6 px-2">
          <span className="inline-block min-w-[1ch]">{headerText}</span>
          <span className="animate-blink text-rose-400">|</span>
        </h1>
      </header>

      <main className="pt-24 md:pt-32">
        {/* Hero Section with YouTube Background */}
        <section className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="relative w-full h-full">
              <iframe
                className="absolute w-[300%] h-[300%] top-[-100%] left-[-100%]"
                src="https://www.youtube.com/embed/fSf3Ls1MbN0?autoplay=1&mute=1&controls=0&loop=1&playlist=fSf3Ls1MbN0&playsinline=1&rel=0&showinfo=0&modestbranding=1"
        title="Bangkok Aerial Background"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>

          {/* Content */}
          <div className="relative z-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-rose-400 mb-6 md:mb-8 drop-shadow-lg">
              We're getting married!
            </h2>
            <div className="text-xl sm:text-2xl md:text-3xl font-light mb-6 md:mb-8 text-gray-300">
              Jennifer <Heart className="inline text-rose-500" size={24} /> David
            </div>
            <div className="text-xl md:text-2xl text-rose-400 mb-4">4 · 20 · 25</div>
            <div className="text-base md:text-xl font-mono text-rose-300">{timeLeft}</div>
            <div className="mt-8 md:mt-12 animate-bounce">
              <span className="text-rose-400 text-sm md:text-base">Scroll to explore our journey</span>
            </div>
          </div>
        </section>

       {/* Our Story Section */}
<section className="min-h-screen bg-gray-800 py-12 md:py-20 px-4">
  <div className="max-w-4xl mx-auto"> {/* Increased max width for larger images */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-400 mb-8 md:mb-16">Our Story</h2>
    <div className="space-y-8 md:space-y-12">
      <div className="bg-gray-900/50 p-6 md:p-8 rounded-xl border border-rose-900/20">
        <div className="mb-6 w-full">
          <img 
            src="/Skydivepic.jpg" 
            alt="Our first skydiving date" 
            className="w-full rounded-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-rose-400 mb-3 md:mb-4">First Meeting</h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Our love story began with an adrenaline rush in the summer of 2022 in Lompoc, California. 
          As a skydiving instructor at Skydive Santa Barbara, David took Jennifer on their very first date.
        </p>
      </div>
      
      <div className="bg-gray-900/50 p-6 md:p-8 rounded-xl border border-rose-900/20">
        <div className="mb-6 w-full">
          <img 
            src="/tokyopic.jpg" 
            alt="Our adventures in Japan" 
            className="w-full rounded-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-rose-400 mb-3 md:mb-4">Our Adventures</h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          That winter, we embarked on a 3-week adventure to Japan and Thailand. It was during this trip 
          that Jennifer fell in love with Thailand, the Land of Smiles, just as deeply as David had on 
          his previous visits.
        </p>
      </div>

      <div className="bg-gray-900/50 p-6 md:p-8 rounded-xl border border-rose-900/20">
        <div className="mb-6 w-full">
          <img 
            src="/proposalpic.png" 
            alt="The proposal at our favorite beach" 
            className="w-full rounded-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-rose-400 mb-3 md:mb-4">The Proposal</h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          I proposed at our favorite spot in Thailand - our Thai best friends' private beach bar, 
          where we've shared countless sunsets. With our toes in the sand and surrounded by our 
          Thai family, she said yes and made me the happiest man alive.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Wedding Details Section */}
        <section className="min-h-screen py-12 md:py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-400 mb-8 md:mb-16">Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20">
                <h3 className="text-xl md:text-2xl font-bold text-rose-400 mb-4 md:mb-6">Ceremony</h3>
                <div className="space-y-3 md:space-y-4 text-gray-300">
                  <p className="flex items-center gap-2">
                    Date: April 20, 2025
                  </p>
                  <p className="flex items-center gap-2">
                    Time: 5:00 PM
                  </p>
                  <p className="flex items-center gap-2">
                    Location: The Green Lung, Bangkok
                  </p>
                  <p className="flex items-center gap-2">
                    Dress Code: Casual
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20">
                <h3 className="text-xl md:text-2xl font-bold text-rose-400 mb-4 md:mb-6">Travel Info</h3>
                <div className="space-y-3 md:space-y-4 text-gray-300">
                  <p className="flex items-center gap-2">
                    <Plane className="text-rose-400" size={20} />
                    Suvarnabhumi Airport (BKK)
                  </p>
                  <p className="flex items-center gap-2">
                    <FileCheck className="text-rose-400" size={20} />
                    eVISA required before arrival
                  </p>
                  <p className="flex items-center gap-2">
                    <FileCheck className="text-rose-400" size={20} />
                    Passport valid for 6+ months
                  </p>
                  <p className="ml-7">Arrive by April 18th</p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20">
                <h3 className="text-xl md:text-2xl font-bold text-rose-400 mb-4 md:mb-6">Accommodation</h3>
                <div className="space-y-3 md:space-y-4 text-gray-300">
                  <p className="flex items-center gap-2">
                    <Home className="text-rose-400" size={20} />
                    Limited villa space available
                  </p>
                  <p className="flex items-center gap-2">
                    <Home className="text-rose-400" size={20} />
                    Areas: Silom, Sukhumvit
                  </p>
                  <p className="flex items-center gap-2">
                    <Home className="text-rose-400" size={20} />
                    Hotels: Coming Soon
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20">
                <h3 className="text-xl md:text-2xl font-bold text-rose-400 mb-4 md:mb-6">Thailand Tips</h3>
                <div className="space-y-3 md:space-y-4 text-gray-300">
                  <p className="flex items-center gap-2">
                    <Thermometer className="text-rose-400" size={20} />
                    Hot and humid (30-35°C)
                  </p>
                  <p className="flex items-center gap-2">
                    <Wallet className="text-rose-400" size={20} />
                    Bring cash for exchange
                  </p>
                  <p className="flex items-center gap-2">
                    <Smartphone className="text-rose-400" size={20} />
                    Consider eSIM or local SIM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 md:mt-20 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-rose-400 mb-4 md:mb-6">Contact Us</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                <a href="mailto:[Your email]" className="flex items-center text-rose-400 hover:text-rose-300 transition-colors">
                  <Mail className="mr-2" size={20} /> Email us
                </a>
                <a href="tel:[Your phone]" className="flex items-center text-rose-400 hover:text-rose-300 transition-colors">
                  <Phone className="mr-2" size={20} /> Call us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;