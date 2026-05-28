import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= IMPORT IMAGES ================= */

import qnox40 from "../assets/medicines/qnox40.png";
import qnox60 from "../assets/medicines/qnox60.png";
import qhep25000 from "../assets/medicines/qhep25000.png";
import qhep5000 from "../assets/medicines/qhep5000.png";
import noredge4 from "../assets/medicines/noredge4.png";

import darson from "../assets/medicines/darson.png";
import qtranz500 from "../assets/medicines/qtranz500.png";
import magnexforte from "../assets/medicines/magnexforte.png";
import qpactz from "../assets/medicines/qpactz.png";
import qeropen1000 from "../assets/medicines/qeropen1000.png";

import qeropen500 from "../assets/medicines/qeropen500.png";
import quclin300 from "../assets/medicines/quclin300.png";
import quclin600 from "../assets/medicines/quclin600.png";
import cetgesic from "../assets/medicines/cetgesic.png";
import asproliv from "../assets/medicines/asproliv.png";

import suciron100 from "../assets/medicines/suciron100.png";
import sucironfcm from "../assets/medicines/sucironfcm.png";
import getpred40 from "../assets/medicines/getpred40.png";
import qucort from "../assets/medicines/qucort.png";
import xonesb from "../assets/medicines/xonesb.png";

import xofisul from "../assets/medicines/xofisul.png";
import stypen from "../assets/medicines/stypen.png";
import glyolet from "../assets/medicines/glyolet.png";
import magistigg from "../assets/medicines/magistigg.png";
import atrapure25 from "../assets/medicines/atrapure25.png";

import lidotrust2 from "../assets/medicines/lidotrust2.png";
import ignoladr from "../assets/medicines/ignoladr.png";
import sedonac from "../assets/medicines/sedonac.png";
import ondased from "../assets/medicines/ondased.png";
import amised250 from "../assets/medicines/amised250.png";

import amised100 from "../assets/medicines/amised100.png";
import amised500 from "../assets/medicines/amised500.png";
import trised40mg from "../assets/medicines/trised40mg.png";
import brodcfe1gm from "../assets/medicines/brodcfe1gm.png";
import conesb from "../assets/medicines/conesb.png";

import criticef15 from "../assets/medicines/criticef15.png";
import fytopenem1gm from "../assets/medicines/fytopenem1gm.png";
import fytopenem500mg from "../assets/medicines/fytopenem500mg.png";
import joyclav12g from "../assets/medicines/joyclav12g.png";
import pt225gm from "../assets/medicines/pt225gm.png";

import pt45 from "../assets/medicines/pt45.png";
import amikafic250mg from "../assets/medicines/amikafic250mg.png";
import guficefta1g from "../assets/medicines/guficefta1g.png";
import guficeftas15gm from "../assets/medicines/guficeftas15gm.png";
import guficefta500mg from "../assets/medicines/guficefta500mg.png";

import gufired100mg from "../assets/medicines/gufired100mg.png";
import drotin40mg from "../assets/medicines/drotin40mg.png";
import zocifix30mg from "../assets/medicines/zocifix30mg.png";
import medzol10ml from "../assets/medicines/medzol10ml.png";
import mucomix1gm from "../assets/medicines/mucomix1gm.png";

import potram from "../assets/medicines/potram.png";
import taxemic from "../assets/medicines/taxemic.png";
import monotax1g from "../assets/medicines/monotax1g.png";
import gleecol from "../assets/medicines/gleecol.png";
import supridol from "../assets/medicines/supridol.png";

/* ================= MEDICINES ================= */

const medicines = [

  { id: 1, name: "QNOX 40", image: qnox40 },
  { id: 2, name: "QNOX 60", image: qnox60 },
  { id: 3, name: "QHEP 25000", image: qhep25000 },
  { id: 4, name: "QHEP 5000", image: qhep5000 },
  { id: 5, name: "NOREDGE 4", image: noredge4 },

  { id: 6, name: "DARSON", image: darson },
  { id: 7, name: "QTRANZ 500", image: qtranz500 },
  { id: 8, name: "MAGNEX FORTE", image: magnexforte },
  { id: 9, name: "QPACTZ", image: qpactz },
  { id: 10, name: "QEROPEN 1000", image: qeropen1000 },

  { id: 11, name: "QEROPEN 500", image: qeropen500 },
  { id: 12, name: "QUCLIN 300", image: quclin300 },
  { id: 13, name: "QUCLIN 600", image: quclin600 },
  { id: 14, name: "CETGESIC", image: cetgesic },
  { id: 15, name: "ASPROLIV", image: asproliv },

  { id: 16, name: "SUCIRON 100", image: suciron100 },
  { id: 17, name: "SUCIRON FCM", image: sucironfcm },
  { id: 18, name: "GETPRED 40", image: getpred40 },
  { id: 19, name: "QUCORT", image: qucort },
  { id: 20, name: "XONE SB", image: xonesb },

  { id: 21, name: "XOFISUL", image: xofisul },
  { id: 22, name: "STYPEN", image: stypen },
  { id: 23, name: "GLYOLET", image: glyolet },
  { id: 24, name: "MAGISTIGG", image: magistigg },
  { id: 25, name: "ATRAPURE 25", image: atrapure25 },

  { id: 26, name: "LIDOTRUST 2%", image: lidotrust2 },
  { id: 27, name: "IGNOL-ADR", image: ignoladr },
  { id: 28, name: "SEDONAC", image: sedonac },
  { id: 29, name: "ONDASED", image: ondased },
  { id: 30, name: "AMISED 250", image: amised250 },

  { id: 31, name: "AMISED 100", image: amised100 },
  { id: 32, name: "AMISED 500", image: amised500 },
  { id: 33, name: "TRISED 40MG", image: trised40mg },
  { id: 34, name: "BRODCFE 1GM", image: brodcfe1gm },
  { id: 35, name: "C-ONE SB", image: conesb },

  { id: 36, name: "CRITICEF 1.5", image: criticef15 },
  { id: 37, name: "FYTOPENEM 1GM", image: fytopenem1gm },
  { id: 38, name: "FYTOPENEM 500MG", image: fytopenem500mg },
  { id: 39, name: "JOYCLAV 1.2G", image: joyclav12g },
  { id: 40, name: "P&T 2.25GM", image: pt225gm },

  { id: 41, name: "P&T 4.5", image: pt45 },
  { id: 42, name: "AMIKAFIC 250MG", image: amikafic250mg },
  { id: 43, name: "GUFICEFTA 1G", image: guficefta1g },
  { id: 44, name: "GUFICEFTA-S 1.5GM", image: guficeftas15gm },
  { id: 45, name: "GUFICEFTA 500MG", image: guficefta500mg },

  { id: 46, name: "GUFIRED 100MG", image: gufired100mg },
  { id: 47, name: "DROTIN 40MG", image: drotin40mg },
  { id: 48, name: "ZOCIFIX 30MG", image: zocifix30mg },
  { id: 49, name: "MEDZOL 10ML", image: medzol10ml },
  { id: 50, name: "MUCOMIX 1GM", image: mucomix1gm },

  { id: 51, name: "POTRAM", image: potram },
  { id: 52, name: "TAXEMIC", image: taxemic },
  { id: 53, name: "MONOTAX 1G", image: monotax1g },
  { id: 54, name: "GLEECOL", image: gleecol },
  { id: 55, name: "SUPRIDOL", image: supridol },

];

function Dashboard({ cart, addToCart }) {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}

      <nav className="bg-white shadow-md px-8 py-5 flex justify-between items-center sticky top-0 z-50">

        <h1 className="text-3xl font-bold text-blue-700">
          MedSingh Pharma
        </h1>

        <div className="flex gap-8 text-lg font-medium">

          <button className="text-blue-600 hover:text-blue-800">
            Products
          </button>

       <button
         onClick={() => navigate("/cart")}
         className="text-blue-600 hover:text-blue-800"
        >
         Cart ({cart.length})
</button>

        </div>

      </nav>

      {/* SEARCH BAR */}

      <div className="px-10 pt-8">

        <input
          type="text"
          placeholder="Search Medicines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none"
        />

      </div>

      {/* PRODUCTS */}

      <div className="p-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {filteredMedicines.map((medicine) => (

            <div
              key={medicine.id}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition duration-300"
            >

              <img
                src={medicine.image}
                alt={medicine.name}
                className="w-full h-60 object-contain"
              />

              <h2 className="text-xl font-bold text-center mt-5">
                {medicine.name}
              </h2>

             <button
               onClick={() => addToCart(medicine)}
              className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
              >
               Add To Cart
             </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;