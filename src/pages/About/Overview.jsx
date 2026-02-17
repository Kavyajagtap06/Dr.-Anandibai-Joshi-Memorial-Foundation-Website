import React from "react";
import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <div className="overflow-x-hidden">

      {/* Breadcrumb Section */}
      <section className="bg-gray-100 py-4 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-sm text-gray-600 flex items-center gap-2">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link to="/about" className="hover:underline">About Us</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Overview</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-[#1A2B4C] text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Column */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Continuing a Legacy: From Dr. Anandibai Joshi to a Healthier Future for Women
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Inspired by the pioneering spirit of India’s first female physician, our foundation advances women’s wellness
              through health, education, research, and service—empowering lives today, shaping a better tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/donate"
                className="bg-[#C6A43F] text-[#1A2B4C] font-semibold px-6 py-3 rounded-lg hover:bg-[#b59435] transition"
              >
                Donate
              </Link>
              <Link
                to="/get-involved/membership"
                className="border-2 border-[#C6A43F] text-[#C6A43F] font-semibold px-6 py-3 rounded-lg hover:bg-[#C6A43F] hover:text-[#1A2B4C] transition"
              >
                Fellowships
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <div className="bg-gray-300 w-full h-64 md:h-96 flex items-center justify-center rounded-xl">
              <i className="fas fa-user text-6xl text-gray-500"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 px-6 md:px-16 text-center">
  <div className="max-w-3xl mx-auto">
    
    <div className="h-1 w-16 bg-[#C6A43F] mx-auto mb-8"></div>

    <p className="text-lg text-gray-800 mb-6 leading-relaxed">
      Dr. Anandibai Joshi broke barriers over a century ago, proving that courage and vision can change the world. 
      Her journey from a small town in India to becoming the first Indian woman physician in the West stands as a powerful testament to determination and resilience.
    </p>

    <p className="text-lg text-gray-800 mb-6 leading-relaxed">
      Today, her legacy continues to inspire and drive meaningful change. It fuels a foundation committed to improving women’s lives globally through health, education, and empowerment.
    </p>

    <p className="text-lg text-gray-800 leading-relaxed">
      At the Dr. Anandibai Joshi Memorial Foundation, we strive to honor her vision by nurturing a supportive and inclusive community where women can grow, lead, and thrive with confidence and dignity.
    </p>

    <div className="h-1 w-16 bg-[#C6A43F] mx-auto mt-8"></div>

  </div>
</section>


      {/* Four Pillars Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Health */}
          <div className="bg-gray-100 p-6 rounded-xl text-left">
            <div className="text-4xl mb-4">🧪</div>
            <h3 className="text-xl font-semibold mb-2">Health</h3>
            <p>Promoting preventive care, stage-of-life wellness, and equity in healthcare access, addressing women-specific health challenges.</p>
          </div>

          {/* Education */}
          <div className="bg-gray-100 p-6 rounded-xl text-left">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>Providing transformative learning opportunities, fellowships, and mentorship programs to empower women leaders in medicine and research.</p>
          </div>

          {/* Service */}
          <div className="bg-gray-100 p-6 rounded-xl text-left">
            <div className="text-4xl mb-4">🫂</div>
            <h3 className="text-xl font-semibold mb-2">Service</h3>
            <p>Mobilizing volunteers and professionals to deliver real-world impact through outreach programs, workshops, and advocacy initiatives.</p>
          </div>

          {/* Research */}
          <div className="bg-gray-100 p-6 rounded-xl text-left">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Research</h3>
            <p>Funding studies that uncover critical insights about women’s health, from lab breakthroughs to community-based interventions.</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
<section className="py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Left Image */}
    <div className="flex-1 flex justify-center md:justify-start">
      <div className="bg-gray-300 w-48 md:w-64 h-auto rounded-xl overflow-hidden">
        <img
          src="/src/assets/Suresh_Joshi-Drexel-1.jpg.jpeg"
          alt="Founder"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>

    {/* Right Text */}
    <div className="flex-1">
      <h2 className="text-3xl font-serif font-bold mb-4">Meet Our Founder</h2>
      <p className="text-gray-800 mb-4">
        Founded in December 2024 by Prof. Dr. Suresh G. Joshi, an internationally recognized physician-scientist,
        the foundation operates with a small but highly effective infrastructure. Every effort is directed toward women’s
        health, education, and research, creating outsized impact through focused programs, fellowships, and advocacy.
      </p>
      <span className="inline-block bg-[#C6A43F] text-[#1A2B4C] px-4 py-1 rounded-lg font-semibold">Founded 2024</span>
    </div>
  </div>
</section>



    </div>
  );
}
