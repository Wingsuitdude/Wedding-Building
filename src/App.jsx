import React, { useEffect, useState } from 'react';
import { Heart, Plane, FileCheck, Home, Mail, Phone, Thermometer, Wallet, Smartphone, Calendar } from 'lucide-react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [headerText, setHeaderText] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null); // 'adventures' or 'bangkok' or null
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

  // Handle video activation
  const handleVideoPlay = (videoId) => {
    setActiveVideo(videoId);
    if (videoId === 'adventures') {
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Fixed Header Title */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-rose-900/20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-rose-500 text-center py-4 md:py-6 px-2">
          <span className="inline-block min-w-[1ch]">{headerText}</span>
          <span className="animate-blink text-rose-400">|</span>
        </h1>
      </header>

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-400 mb-6 md:mb-8 drop-shadow-lg">
              We're getting married!
            </h2>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-300">
              Jennifer <Heart className="inline text-rose-500" size={32} /> David
            </div>
            <div className="text-2xl md:text-3xl font-bold text-rose-400 mb-4">4 · 20 · 25</div>
            <div className="text-xl md:text-2xl font-bold font-mono text-rose-300">{timeLeft}</div>
            <div className="mt-8 md:mt-12 animate-bounce">
              <span className="text-lg md:text-xl font-semibold text-rose-400">Scroll to explore our journey</span>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="min-h-screen bg-gray-800 py-12 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-400 mb-8 md:mb-16">Our Story</h2>
            <div className="space-y-8 md:space-y-12">
              {/* First Meeting */}
              <div className="bg-gray-900/50 p-6 md:p-8 rounded-xl border border-rose-900/20">
                <div className="mb-6 w-full">
                  <img 
                    src="/Skydivepic.jpg" 
                    alt="Our first skydiving date" 
                    className="w-full rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-3 md:mb-4">First Meeting</h3>
                <p className="text-lg md:text-xl font-semibold text-gray-300 leading-relaxed">
                  Our love story began with an adrenaline rush in the summer of 2022 in Lompoc, California. 
                  As a skydiving instructor at Skydive Santa Barbara, David took Jennifer on their very first date.
                </p>
              </div>
              
              {/* Our Adventures */}
              <div className="bg-gray-900/50 p-6 md:p-8 rounded-xl border border-rose-900/20">
                <div 
                  className="mb-6 w-full relative cursor-pointer" 
                >
                  {/* Image and Play Button */}
                  {!isVideoPlaying && (
                    <div onClick={() => handleVideoPlay('adventures')}>
                      <img 
                        src="/tokyopic.jpg" 
                        alt="Our adventures in Japan" 
                        className="w-full rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors rounded-lg">
                        <div className="bg-rose-500/80 rounded-full p-4 hover:bg-rose-600/80 transition-colors">
                          <svg 
                            className="w-12 h-12 text-white" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                            />
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Video */}
                  {isVideoPlaying && (
                    <div className="w-full rounded-lg overflow-hidden aspect-video">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/2TywDd4w-wg?autoplay=${activeVideo === 'adventures' ? '1' : '0'}&mute=0&controls=1&loop=1&playlist=2TywDd4w-wg&playsinline=1&rel=0&showinfo=0&modestbranding=1`}
                        title="Our Thailand Adventures"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-3 md:mb-4">Our Adventures</h3>
                <p className="text-lg md:text-xl font-semibold text-gray-300 leading-relaxed">
                  That winter, we embarked on a 3-week adventure to Japan and Thailand. It was during this trip 
                  that Jennifer fell in love with Thailand, the Land of Smiles, just as deeply as David had on 
                  his previous visits.
                </p>
              </div>

              {/* The Proposal */}
              <div className="bg-gray-900/50 p-6 md:p-8 rounded-xl border border-rose-900/20">
                <div className="mb-6 w-full">
                  <img 
                    src="/proposalpic.png" 
                    alt="The proposal at our favorite beach" 
                    className="w-full rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-3 md:mb-4">The Proposal</h3>
                <p className="text-lg md:text-xl font-semibold text-gray-300 leading-relaxed">
                  I proposed at our favorite spot in Thailand - our Thai best friends' private beach bar, 
                  where we've shared countless sunsets. With our toes in the sand and surrounded by our 
                  Thai family, she said yes and made me the happiest man alive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Details Section */}
        <section className="min-h-screen py-12 md:py-20 px-4 bg-gray-900 relative">
          {/* Bangkok Video Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative w-full rounded-xl overflow-hidden aspect-video mb-8 md:mb-12 border border-rose-900/20">
              <iframe
                className="absolute w-full h-full top-0 left-0"
                src={`https://www.youtube.com/embed/NFw-WizIt50?start=42&autoplay=${activeVideo === 'bangkok' ? '1' : '0'}&mute=0&controls=1&loop=1&playlist=NFw-WizIt50&playsinline=1&rel=0&showinfo=0&modestbranding=1`}
                title="Bangkok Travel Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onPlay={() => handleVideoPlay('bangkok')}
              ></iframe>
            </div>
            <p className="text-lg md:text-xl text-center font-semibold text-gray-300 mb-12">
            We're thrilled to welcome you to the vibrant city of Bangkok for our special celebration! This guide will help you navigate your arrival and first days in Thailand's magnificent capital.
            </p>
          </div>
         
        {/* Content */}
<div className="max-w-4xl mx-auto relative z-20">
  <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-400 mb-8 md:mb-16">Details</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    {/* Ceremony */}
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20">
      <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-4 md:mb-6">Ceremony & Reception</h3>
      <div className="space-y-3 md:space-y-4 text-gray-300">
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          Date: April 20, 2025
        </p>
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          Time: 5:00 PM
        </p>
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          Location: Punntara Botanic Home Villa 'Nan'
        </p>
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          Area: Bang Kachao (The Green Lung of Bangkok)
        </p>
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          Dress Code: Casual
        </p>
      </div>
    </div>

    {/* Travel Info */}
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20">
      <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-4 md:mb-6">Travel Info</h3>
      <div className="space-y-3 md:space-y-4 text-gray-300">
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Plane className="text-rose-400" size={20} />
          Suvarnabhumi Airport (BKK)
        </p>
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <FileCheck className="text-rose-400" size={20} />
          eVISA required before arrival
        </p>
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <FileCheck className="text-rose-400" size={20} />
          Passport valid for 6+ months
        </p>
      </div>
    </div>

    {/* Accommodation */}
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20">
      <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-4 md:mb-6">Accommodation</h3>
      <div className="space-y-3 md:space-y-4 text-gray-300">
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Home className="text-rose-400" size={20} />
          Villa Stay Available (Apr 18-22)
        </p>
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Home className="text-rose-400" size={20} />
          6 spots remaining - RSVP ASAP!
        </p>
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Home className="text-rose-400" size={20} />
          Nearby options on Agoda/Airbnb/Booking.com
        </p>
      </div>
    </div>

    {/* Thailand Tips */}
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20">
      <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-4 md:mb-6">Thailand Tips</h3>
      <div className="space-y-3 md:space-y-4 text-gray-300">
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Thermometer className="text-rose-400" size={20} />
          Hot and humid (30-35°C)
        </p>
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Wallet className="text-rose-400" size={20} />
          Bring cash for exchange
        </p>
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Smartphone className="text-rose-400" size={20} />
          Consider eSIM or local SIM
        </p>
      </div>
    </div>
  </div>

  {/* Timeline Section */}
  <div className="mt-12 md:mt-20">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-400 mb-8 md:mb-16">Timeline of Events</h2>
    
    {/* Pre-Wedding Activities */}
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20 mb-6">
      <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-4 md:mb-6"> Arrival & Initial Preparations (April 2-8)</h3>
      <div className="space-y-3 md:space-y-4 text-gray-300">
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Calendar className="text-rose-400" size={20} />
          Busy week of essential preparations, shopping, and planning before we all escape to the island paradise of Koh Samet, followed by the excitement of Songkran.
        </p>
      </div>
    </div>

    {/* Koh Samet Trip */}
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20 mb-6">
      <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-4 md:mb-6">Koh Samet Trip (April 9-12)</h3>
      <div className="space-y-3 md:space-y-4 text-gray-300">
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Calendar className="text-rose-400" size={20} />
          Koh Samet is a pristine island paradise just 3 hours from Bangkok, known for its powdery white sand beaches, crystal-clear waters, and legendary fire-twirling shows at sunset beach parties.
        </p>
  
      </div>
    </div>

    {/* Songkran Festival */}
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20 mb-6">
      <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-4 md:mb-6">Songkran Festival (April 13-15)</h3>
      <div className="space-y-3 md:space-y-4 text-gray-300">
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Calendar className="text-rose-400" size={20} />
          Songkran is Thailand's most important festival celebrating the traditional Thai New Year with joyous city-wide water fights, traditional ceremonies, and cultural festivities.
        </p>
      </div>
    </div>

    {/* Final Wedding Prep */}
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20 mb-6">
      <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-4 md:mb-6">Final Wedding Prep (April 16-19)</h3>
      <div className="space-y-3 md:space-y-4 text-gray-300">
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Calendar className="text-rose-400" size={20} />
          The final countdown to our wedding brings everyone together at our beautiful villa for relaxing spa days, temple blessings, night market adventures, and putting the finishing touches on our celebration.
        </p>
       
      </div>
    </div>

    {/* The Main Events */}
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-rose-900/20 mb-6">
      <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-4 md:mb-6">The Main Event (April 20-22)</h3>
      <div className="space-y-3 md:space-y-4 text-gray-300">
        <p className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <Calendar className="text-rose-400" size={20} />
          Our celebration culminates with an intimate villa wedding in Bangkok's Green Lung, followed by a day of relaxation with our closest friends and family before we set off on our honeymoon adventure.
        </p>
      </div>
    </div>
  </div>

  {/* Ultimate Bangkok Guide Section */}
  <div className="mt-12 md:mt-20">
    <h3 className="text-2xl md:text-3xl font-bold text-rose-400 mb-6 text-center">Ultimate Bangkok Travel Guide</h3>
    <div className="w-full aspect-video rounded-xl overflow-hidden border border-rose-900/20 shadow-lg">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/VlOvCuMsjZw?start=35&autoplay=${activeVideo === 'guide' ? '1' : '0'}&mute=0&controls=1&loop=0&playsinline=1&rel=0&showinfo=0&modestbranding=1`}
        title="Ultimate Bangkok Travel Guide"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onPlay={() => handleVideoPlay('guide')}
      ></iframe>
    </div>
    <div className="mt-6 space-y-3 text-center">
      <p className="text-lg md:text-xl font-semibold text-gray-300">
        A comprehensive 3-hour guide covering everything you need to know about Bangkok! 🌟
      </p>
      <p className="text-base md:text-lg text-gray-400">
        Explore the city's best attractions, hidden gems, local customs, food spots, and travel tips. This in-depth guide covers many of the places and activities we'll be experiencing together during the wedding week! 
      </p>
      <p className="text-sm md:text-base text-rose-400 font-semibold">
        Pro tip: Use the video chapters to jump to specific topics that interest you!
      </p>
    </div>
  </div>
</div>
</section>
</main>
</div>
);
};

export default App;