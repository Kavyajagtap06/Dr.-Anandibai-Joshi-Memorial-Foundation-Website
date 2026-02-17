import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="overflow-x-hidden">

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-sm text-gray-600 flex items-center gap-2">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Contact Us</span>
        </div>
      </section>


      {/* Hero Section */}
      <section className="bg-[#1A2B4C] text-white py-20 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Get in Touch
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            We welcome your questions, ideas, and support. Connect with us to learn more about our mission, programs, and how you can make a difference.
          </p>
        </div>
      </section>


      {/* Contact Info + Form */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 text-gray-700">

              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p>
                  Dr. Anandibai Joshi Memorial Foundation <br />
                  Pennsylvania, United States
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p>info@ajfoundation.org</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p>+1 (000) 000-0000</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Working Hours</h3>
                <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
              </div>

            </div>
          </div>


          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">
              Send us a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C6A43F]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C6A43F]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C6A43F]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C6A43F]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#C6A43F] text-[#1A2B4C] font-semibold px-6 py-3 rounded-lg hover:bg-[#b59435] transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>


      {/* Map Section (Optional placeholder) */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl font-serif font-bold mb-6 text-center">
            Our Location
          </h2>

          <div className="bg-gray-300 w-full h-80 rounded-xl flex items-center justify-center">
            <span className="text-gray-600">
              Map will be embedded here
            </span>
          </div>

        </div>
      </section>
    </div>
  );
}
