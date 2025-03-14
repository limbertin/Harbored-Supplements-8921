import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About HARBORED</h1>
        <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
          <p>
            At HARBORED, we believe in harnessing nature's purest gifts to support your health and wellness journey. Our supplements are thoughtfully crafted with natural, sustainably sourced ingredients, blending ancient wisdom with modern science to help you achieve balance and vitality in your everyday life.
          </p>
          <p>
            We're dedicated to transparency, purity, and effectiveness—ensuring each product we offer meets the highest standards of quality. Whether you're looking to enhance your energy, improve focus, or simply nourish your body naturally, HARBORED provides holistic solutions tailored to your unique wellness goals.
          </p>
          <p className="text-xl font-medium text-green-800">
            Welcome to a better, healthier, and naturally balanced you. Welcome to HARBORED.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
          alt="Natural ingredients"
          className="rounded-lg shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Quality Assured</h3>
                <p className="text-gray-600">Every product undergoes rigorous testing for purity and potency</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Sustainably Sourced</h3>
                <p className="text-gray-600">Responsibly harvested ingredients that respect our environment</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}