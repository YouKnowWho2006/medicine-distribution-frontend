function Features() {

  const features = [
    {
      title: "Medicine Ordering",
      description: "Place and manage medicine orders easily.",
    },

    {
      title: "Order Tracking",
      description: "Track pending, approved, and shipped orders.",
    },

    {
      title: "Communication System",
      description: "Connect doctors, pharmacists, and distributors.",
    },

    {
      title: "Inventory Management",
      description: "Manage medicine stock efficiently.",
    },
  ];

  return (
    <section className="py-20 bg-white px-10">

      <h2 className="text-4xl font-bold text-center mb-14">
        Platform Features
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {features.map((feature, index) => (

          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;