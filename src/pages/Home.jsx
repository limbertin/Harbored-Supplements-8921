import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[80vh] bg-cover bg-center" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4"
            >
              HARBORED
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Premium Natural Supplements for Your Well-being
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/products"
                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HARBORED?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Ingredients",
                description: "100% natural, carefully sourced ingredients"
              },
              {
                title: "Quality Assured",
                description: "Rigorous testing and quality control"
              },
              {
                title: "Science Backed",
                description: "Research-supported formulations"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}