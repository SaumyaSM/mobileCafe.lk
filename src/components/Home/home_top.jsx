import react from "react";
import { FaSearch, FaTools, FaBox, FaLock } from "react-icons/fa";
import backgroundImg from "../../assets/images/background2.jpg";
import { colors } from "../../config/colors.js";

const HomeTop = () => {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[73vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: colors.gradients.heroSection.css }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-7xl font-bold text-white">
            Find the Best Mobile Repair Shops Near You
          </h1>

          <p className="mt-3 text-xl text-white">
            Compare verified shops, buy new phones, or sell your used mobile.
          </p>

          {/* <div className="mt-10 w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search by phone model, issue, or location..."
              className="w-full p-4 rounded-xl shadow-md border border-gray-300 placeholder-white/80 text-white outline-none"
              style={{ boxShadow: `0 0 0 2px ${colors.primary}` }}
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 2px ${colors.primary}`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div> */}

          {/* Buttons */}
          <div className="mt-20 flex gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all"
              style={{ backgroundColor: colors.primary }}
            >
              Get Started
            </button>

            <button
              className="px-8 py-3 rounded-lg font-semibold border-2 text-white transition-all bg-white/10"
              style={{ borderColor: colors.white}}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* ================= FEATURE CARDS SECTION ================= */}
      <div
        className="w-full py-8 px-4"
        style={{ background: colors.gradients.heroSection.css }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-50">

          {/* Repair Service Card */}
          <div className="flex flex-col items-center text-center text-white">
            <div className="mb-4 p-4 rounded-full bg-white/20">
              <FaTools className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Repair Service</h3>
            <p className="text-base opacity-90">
              Screen, battery, and water-damage fixes handled by certified technicians.
            </p>
          </div>

          {/* Spare Parts Card */}
          <div className="flex flex-col items-center text-center text-white">
            <div className="mb-4 p-4 rounded-full bg-white/20">
              <FaBox className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Spare Parts</h3>
            <p className="text-base opacity-90">
              Genuine and OEM-grade parts with same-day availability for popular models.
            </p>
          </div>

          {/* Data Recovery Card */}
          <div className="flex flex-col items-center text-center text-white">
            <div className="mb-4 p-4 rounded-full bg-white/20">
              <FaLock className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Data Recovery</h3>
            <p className="text-base opacity-90">
              Secure backups, chip-level recovery, and data transfer without losing files.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeTop;
