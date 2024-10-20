import React, { useState, useEffect } from 'react';
import { CalendarDays, Plane, Hotel, MapPin, Info, Camera, Menu, X } from 'lucide-react';

const WeddingWebsite = () => {
  const weddingDate = new Date("2025-04-20T00:00:00Z").getTime();
  const [countdown, setCountdown] = useState("");
  const [activeTab, setActiveTab] = useState("story");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  }, []);

  const TabButton = ({ value, icon, children, onClick }) => (
    <button
      onClick={() => {
        setActiveTab(value);
        onClick?.();
      }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors w-full md:w-auto
        ${activeTab === value 
          ? 'bg-pink-500 text-white' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
    >
      {icon}
      {children}
    </button>
  );

  const TabPanel = ({ value, children }) => (
    <div className={`${activeTab === value ? 'block' : 'hidden'}`}>
      {children}
    </div>
  );

  const navigation = [
    { value: "story", label: "Our Story", icon: <Camera className="h-4 w-4" /> },
    { value: "details", label: "Details", icon: <CalendarDays className="h-4 w-4" /> },
    { value: "travel", label: "Travel", icon: <Plane className="h-4 w-4" /> },
    { value: "activities", label: "Activities", icon: <MapPin className="h-4 w-4" /> },
    { value: "info", label: "Info", icon: <Info className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-gray-800 rounded-lg"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 bg-gray-900/95 z-40 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:hidden
      `}>
        <div className="flex flex-col items-stretch p-8 pt-16 space-y-4">
          {navigation.map((item) => (
            <TabButton
              key={item.value}
              value={item.value}
              icon={item.icon}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </TabButton>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-7xl font-bold text-pink-300 mb-4">
          Jennifer 💕 David
        </h1>
        <p className="text-2xl md:text-3xl text-yellow-300 mb-2">Are Getting Married!</p>
        <p className="text-xl md:text-2xl text-pink-200">4/20/25 - Bangkok, Thailand</p>
        <div className="mt-8 text-2xl md:text-4xl font-mono bg-gray-800 inline-block px-4 md:px-6 py-2 md:py-3 rounded-lg">
          {countdown}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 mb-8">
          {navigation.map((item) => (
            <TabButton
              key={item.value}
              value={item.value}
              icon={item.icon}
            >
              {item.label}
            </TabButton>
          ))}
        </div>

        {/* Content Panels */}
        <div className="bg-gray-800/50 rounded-lg p-4 md:p-6">
          <TabPanel value="story">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-4">Our Story</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p className="text-gray-200">
                Our love story began with an adrenaline rush in the summer of 2022 in Lompoc, California. As a skydiving instructor at Skydive Santa Barbara, David took Jennifer, a Central Coast born college girl, on a tandem skydive for their very first date. It was a leap of faith that led to love, with David falling head over heels for Jennifer right from the start.
              </p>
              <p className="text-gray-200">
                That winter, we embarked on a 3-week adventure to Japan and Thailand. It was during this trip that Jennifer fell in love with Thailand, the Land of Smiles, just as deeply as David had on his previous visits. The following year, we returned to Thailand for an extended 2-month stay, further cementing our connection to this beautiful country.
              </p>
            </div>
          </TabPanel>

          <TabPanel value="details">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-4">Wedding Details</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p className="text-lg md:text-xl"><strong>Date:</strong> April 20, 2025 (4-20-25)</p>
              <p className="text-lg md:text-xl"><strong>Location:</strong> Bang Krachao, the "Green Lung" of Bangkok</p>
              
              <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mt-6">Schedule</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>4:00 PM: Pre-ceremony drinks and Thai food at the villa</li>
                <li>6:00 PM: Ceremony at Sri Nakhon Khuean Khan Park And Botanical Garden</li>
                <li>Following the ceremony: Reception at the villa</li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel value="travel">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-4">Travel Information</h2>
            <div className="space-y-6 text-sm md:text-base">
              <ul className="space-y-4">
                <li><strong>Flights:</strong> Book round-trip to Bangkok</li>
                <li><strong>Visa:</strong> eVISA required BEFORE arrival</li>
                <li><strong>Passport:</strong> Must be valid for 6+ months beyond stay</li>
                <li><strong>Recommended Arrival:</strong> April 9th</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mt-6">Accommodation</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Limited villa space available - contact us to inquire</li>
                <li>Recommended areas: Silom, Sukhumvit, or Riverside</li>
                <li>Hotel recommendations coming soon</li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel value="activities">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-300 mb-4">Pre-Wedding Activities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
              <li className="bg-gray-700/50 p-4 rounded-lg">Explore Bangkok city</li>
              <li className="bg-gray-700/50 p-4 rounded-lg">Experience the Songkran water festival</li>
              <li className="bg-gray-700/50 p-4 rounded-lg">Visit ancient Ayutthaya</li>
              <li className="bg-gray-700/50 p-4 rounded-lg">Explore Lopburi (Monkey Town)</li>
              <li className="bg-gray-700/50 p-4 rounded-lg">Shop at Asia's best malls</li>
              <li className="bg-gray-700/50 p-4 rounded-lg">Experience Khao San Road</li>
              <li className="bg-gray-700/50 p-4 rounded-lg">Visit stunning temples</li>
              <li className="bg-gray-700/50 p-4 rounded-lg">Enjoy rooftop bars</li>
            </ul>
          </TabPanel>

          <TabPanel value="info">
            <div className="space-y-8 text-sm md:text-base">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-4">Practical Tips</h3>
                  <ul className="space-y-2">
                    <li><strong>Weather:</strong> Hot and humid (30-35°C/86-95°F)</li>
                    <li><strong>Money:</strong> Bring cash for exchange</li>
                    <li><strong>Communication:</strong> Consider eSIM or local SIM</li>
                    <li><strong>Insurance:</strong> Travel insurance recommended</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-4">Cultural Tips</h3>
                  <ul className="space-y-2">
                    <li>Dress modestly at temples</li>
                    <li>Remove shoes when required</li>
                    <li>Respect the Royal Family</li>
                    <li>No tipping necessary</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-4">Contact Us</h3>
                <p>If you have any questions, please don't hesitate to reach out:</p>
                <p className="mt-2">Email: [Your email address]</p>
                <p>Phone: [Your phone number]</p>
              </div>
            </div>
          </TabPanel>
        </div>
      </main>
    </div>
  );
};

export default WeddingWebsite;