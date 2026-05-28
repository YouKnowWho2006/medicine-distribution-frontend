import Navbar from "../components/Navbar";

import {
  FaPills,
  FaTruck,
  FaUserMd,
  FaHospital,
} from "react-icons/fa";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-24 px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h1 className="text-6xl font-bold leading-tight">

              Modern Medicine Distribution Platform

            </h1>

            <p className="mt-6 text-lg text-blue-100">

              Connecting Doctors, Pharmacists, Medical Representatives,
              and Distributors through one smart healthcare ecosystem.

            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="/login"
                className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100"
              >
                Login
              </a>

              <a
                href="/register"
                className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600"
              >
                Register
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div>

            

          </div>

        </div>

      </section>

      {/* Features Section */}
      <section className="py-24 px-10">

        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Platform Features
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <FaPills className="text-5xl text-blue-600 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Medicine Ordering
            </h3>

            <p className="text-gray-600">
              Place and manage medicine orders quickly and efficiently.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <FaTruck className="text-5xl text-green-600 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Order Tracking
            </h3>

            <p className="text-gray-600">
              Track pending, approved, and shipped orders in real time.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <FaUserMd className="text-5xl text-red-500 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Doctor Network
            </h3>

            <p className="text-gray-600">
              Seamless communication between healthcare professionals.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <FaHospital className="text-5xl text-purple-600 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Inventory Management
            </h3>

            <p className="text-gray-600">
              Manage medicine stock and distributor inventory efficiently.
            </p>

          </div>

        </div>

      </section>


      {/* Contact Section */}

<section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-10">

  <h2 className="text-5xl font-bold text-center mb-16">
    Contact Us
  </h2>

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

    {/* Address */}
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition">

      <div className="flex justify-center mb-6">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-red-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/>
        </svg>

      </div>

      <h3 className="text-2xl font-bold mb-4">
        Find Us
      </h3>

      <p className="text-blue-100 leading-8">
        MED SINGH PHARMA
        <br />
        93/1A, Lucas Tower,
        <br />
        Bengaluru - 560083
      </p>

    </div>

    {/* Phone */}
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition">

      <div className="flex justify-center mb-6">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-green-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1z"/>
        </svg>

      </div>

      <h3 className="text-2xl font-bold mb-4">
        Call Us
      </h3>

      <p className="text-blue-100 leading-8">
        +91 9606674340
        <br />
        +91 9066854340
      </p>

    </div>

    {/* Email */}
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition">

      <div className="flex justify-center mb-6">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z"/>
        </svg>

      </div>

      <h3 className="text-2xl font-bold mb-4">
        Email Us
      </h3>

      <p className="text-blue-100 break-words">
        medsinghpharma@gmail.com
      </p>

    </div>

    {/* Working Hours */}
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition">

      <div className="flex justify-center mb-6">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-pink-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1a11 11 0 1011 11A11 11 0 0012 1zm1 11.59l3.3 3.3-1.42 1.41L11 13V6h2z"/>
        </svg>

      </div>

      <h3 className="text-2xl font-bold mb-4">
        Working Hours
      </h3>

      <p className="text-blue-100 leading-8">
        Monday - Saturday
        <br />
        09:00 AM - 08:00 PM
      </p>

    </div>

  </div>

</section>

      

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-10">

        <h1 className="text-3xl font-bold">
          MedConnect
        </h1>

        <p className="mt-3 text-gray-400">
          Medicine Distribution & Healthcare Communication Platform
        </p>

        <p className="mt-6 text-gray-500 text-sm">
          © 2026 All Rights Reserved
        </p>

      </footer>

    </div>
  );
}

export default Home;