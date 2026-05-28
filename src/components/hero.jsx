function Hero() {
  return (
    <section className="bg-blue-50 min-h-[80vh] flex items-center justify-center px-10">

      <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h1 className="text-5xl font-bold leading-tight text-gray-800">

            Connecting Doctors, Pharmacists & Medicine Distributors

          </h1>

          <p className="mt-6 text-lg text-gray-600">

            A centralized medicine ordering and communication platform
            for healthcare professionals and distributors.

          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">

              Get Started

            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100">

              Learn More

            </button>

          </div>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88"
            alt="medical"
            className="rounded-2xl shadow-xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;