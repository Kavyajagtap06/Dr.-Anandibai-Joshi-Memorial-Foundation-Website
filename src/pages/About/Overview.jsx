import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Overview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col min-h-screen bg-gray-50"
    >
      {/* Main Content */}
      <main className="flex-1 px-6 py-16 md:px-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AJF: Improving Women’s Wellness through Health, Education, Research, and Service
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Dr. Anandibai Joshi Memorial Foundation for Women’s Health and Education (AJF) is a federally approved IRS Code 501(c)3 Nonprofit Public Charitable Organization located in Pennsylvania (USA), dedicated to improving women’s wellness through health, education, service, and research.
          </p>
        </section>

        {/* Mission & Activities */}
        <section className="max-w-5xl mx-auto mb-16 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission & Focus</h2>
          <p className="text-gray-700">
            AJF identifies and supports research, education, and civic engagement service on leading women’s health and general wellness concerns, including preventive health promotion measures, stage-of-life health issues, diseases or disorders disproportionately affecting women, and elucidation of sex differences in health and disease. Our education, service, and research awards provide critical funding to meet our mission.
          </p>
          <p className="text-gray-700">
            AJF also supports future physician-scientists, medical and biomedical professionals, and entrepreneurs through research and fellowship awards to meritorious individuals from diverse backgrounds with high academic and research achievement and dedication. We also provide platforms for presenting and publishing their research findings at conferences, seminars, and symposia.
          </p>
          <p className="text-gray-700">
            AJF accepts endowments from organizations, industries, government or semi-government units, academic and research institutions, and philanthropies that share our vision, to create new endowments supporting women’s education, service, research, and fellowship awards.
          </p>
        </section>

        {/* Founder Section */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Founder</h2>
          <p className="text-gray-700">
            Founded in December 2024 (registered January 2025) by Prof. Dr. Suresh G. Joshi, MD, PhD, FIDSA, FSIS, an internationally recognized educator, clinician, and researcher in infection control, prevention, infectious diseases, and public health, along with his expert team. AJF maintains a lean infrastructure to direct donations directly to women’s education, service, research, and fellowship awards.
          </p>
        </section>

        {/* Call to Action */}
        <section className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
          <p className="text-gray-700 mb-6">
            Join us to improve women’s health and wellness. Together, we can empower women and ensure a healthier future.
          </p>
          <Link
            to="/get-involved/membership"
            className="inline-block px-6 py-3 rounded-lg font-medium bg-lavender-500 text-white hover:bg-lavender-600 transition-colors"
          >
            Get Involved
          </Link>
        </section>
      </main>
    </motion.div>
  )
}
