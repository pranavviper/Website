import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import { ShieldCheck, Leaf, Truck, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <HeroSection />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <ShieldCheck className="h-10 w-10 text-blue-500" />, 
                title: "Safe Ingredients", 
                description: "All products are made with non-toxic, environmentally friendly ingredients." 
              },
              { 
                icon: <Leaf className="h-10 w-10 text-green-500" />, 
                title: "Eco-Friendly", 
                description: "Biodegradable formulas and recyclable packaging to minimize environmental impact." 
              },
              { 
                icon: <Truck className="h-10 w-10 text-blue-500" />, 
                title: "Free Shipping", 
                description: "Free shipping on all orders over $50. Fast and reliable delivery." 
              },
              { 
                icon: <Sparkles className="h-10 w-10 text-green-500" />, 
                title: "Effective Cleaning", 
                description: "Powerful cleaning action without harsh chemicals or strong fragrances." 
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Clean for Your Family, Clean for the Planet</h2>
              <p className="text-xl mb-6">
                Our mission is to provide effective cleaning products that don't compromise on safety or environmental responsibility.
              </p>
              <ul className="space-y-3">
                {[
                  "Plant-based, biodegradable ingredients",
                  "No harsh chemicals or synthetic fragrances",
                  "Cruelty-free and never tested on animals",
                  "Recyclable and sustainable packaging"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Eco-friendly cleaning products" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white text-blue-600 p-4 rounded-lg shadow-lg">
                <p className="font-bold">100% Satisfaction Guarantee</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience the Difference?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have made the switch to safer, more effective cleaning products.
            </p>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/products'}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;