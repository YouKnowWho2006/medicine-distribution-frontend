function Cart({ cart, removeFromCart }) {

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-700 mb-10">
        Your Cart
      </h1>

      {cart.length === 0 ? (

        <p className="text-xl text-gray-600">
          Your cart is empty.
        </p>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {cart.map((medicine, index) => (

            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-lg"
            >

              <img
                src={medicine.image}
                alt={medicine.name}
                className="w-full h-52 object-contain"
              />

              <h2 className="text-xl font-bold mt-4 text-center">
                {medicine.name}
              </h2>

              <button
                onClick={() => removeFromCart(index)}
                className="mt-5 w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default Cart;