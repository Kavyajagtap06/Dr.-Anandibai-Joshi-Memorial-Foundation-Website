import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50">
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-100/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-8">
            {/* Vertical accent line */}
            <div className="w-1 h-24 bg-gradient-to-b from-rose-400 to-orange-400 rounded-full flex-shrink-0"></div>

            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-8">
                Our Mission
              </h1>
              <div className="max-w-3xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A nonprofit public charitable organization dedicated to helping women in the community in need. We seek to provide and restore the dignity, health, and quality of life of women and their family affected by lack of education, health, displacement & immigration, socio-cultural causes, and illness, by eliminating barriers to success through providing education, health and healthcare knowledge, socio-cultural interactions & gathering (social welfare), promoting community and public health, and education at large. Guided by the aspirations of the communities we serve, we pursue this mission with compassion, transparency, and generosity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
        {/* Background quotation mark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-9xl md:text-[12rem] text-rose-100 font-serif select-none">"</span>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-12">
            Our Vision
          </h2>
          <motion.blockquote
            className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            Women are the backbone of our families, community, and integral part of this vibrant and caring society, with elevating their education, health, and well-being status, and removing disparity, we create a healthy community we cherish.
          </motion.blockquote>
        </motion.div>
      </section>
    </div>
  );
};

export default MissionVision;
