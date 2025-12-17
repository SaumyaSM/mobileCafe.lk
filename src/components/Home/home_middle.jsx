import React from "react";
import { FaUsers, FaCheckCircle, FaLightbulb, FaHandshake } from "react-icons/fa";
import imgOne from "../../assets/images/background2.jpg";
import imgTwo from "../../assets/images/background3.jpg";
import imgThree from "../../assets/images/background4.jpg";
import { colors } from "../../config/colors";

const valueCards = [
  {
    icon: <FaUsers />,
    title: "Customer First",
    desc: "Every decision starts with user convenience and safety.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Verified Quality",
    desc: "Only trusted shops, genuine parts, and skilled technicians.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation Driven",
    desc: "Always improving with new technology and smart solutions.",
  },
  {
    icon: <FaHandshake />,
    title: "Community Powered",
    desc: "Growing together with local businesses and customers.",
  },
];

const HomeMiddle = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* ================= IMAGE GRID ================= */}
        <div className="grid grid-cols-2 gap-5 order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
            <img src={imgOne} alt="Technician repairing device" className="w-full h-full object-cover" />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
            <img src={imgTwo} alt="Repair workspace" className="w-full h-full object-cover" />
          </div>

          {/* Quote Card */}
          <div
            className="rounded-2xl shadow-lg p-8 flex flex-col justify-center text-white aspect-square"
            style={{ background: colors.gradients.heroSection.css }}
          >
            <p className="text-sm opacity-80 mb-3">Our goal</p>
            <p className="text-xl sm:text-2xl font-bold leading-relaxed">
              "We will fix it, till we make it"
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
            <img src={imgThree} alt="Tools and devices on table" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* ================= TEXT CONTENT ================= */}
        <div className="space-y-12 order-1 lg:order-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-[0.25em] text-rose-600 uppercase">
              About our culture
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Leading the way in mobile repair solutions
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              At MobileCafe.lk, our culture is built on trust, innovation, and
              community. We believe in making mobile services simple,
              transparent, and reliable for everyone.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              From customers to repair technicians and sellers, we create a
              connected ecosystem where quality, honesty, and service excellence
              always come first.
            </p>
          </div>

          {/* ================= VALUE CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueCards.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 shadow-sm p-7 rounded-xl hover:shadow-md transition"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white mb-5"
                  style={{ backgroundColor: colors.primary }}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ================= CTA BUTTON ================= */}
          <div className="pt-4">
            <button
              className="inline-flex items-center justify-center px-12 py-4 rounded-full text-white font-semibold shadow-md hover:brightness-110 transition"
              style={{ backgroundColor: colors.primary }}
            >
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeMiddle;
