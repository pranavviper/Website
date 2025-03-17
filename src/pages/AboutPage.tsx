import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Leaf } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">About Clean House</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're on a mission to make your home cleaner and the planet greener.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              At Phoenix Enterprises, we are dedicated to delivering innovative, high-quality solutions across various industries. With a strong foundation in research, development, and manufacturing, we specialize in premium formulations for household, automotive, and industrial applications.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began with a vision—to redefine industry standards through superior product performance, sustainability, and customer-centric solutions. Over the years, we have built a reputation for reliability, consistency, and continuous innovation, ensuring our products meet the highest quality benchmarks.
            </p>
            <p className="text-gray-700">
              Under our registered brand, RITS, we take pride in offering a diverse range of formulations, including advanced cleaning agents, specialty chemicals, and protective coatings. Every product is meticulously developed to ensure efficiency, safety, and long-term benefits.
            </p>
            <p className="text-gray-700">
              At Phoenix Enterprises, innovation is at the core of everything we do. Our expert team continually explores new technologies and cutting-edge formulations to meet evolving market demands while upholding our commitment to quality and environmental responsibility.
           </p>
            <p className="text-gray-700">
              Partner with us for advanced solutions that set new industry benchmarks. Phoenix Enterprises—where innovation meets excellence.
            </p>
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
              alt="Clean House team" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-white text-blue-600 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Founded in 2018</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do at Clean House.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { 
              icon: <Leaf className="h-10 w-10 text-green-500" />, 
              title: "Environmental Responsibility", 
              description: "We formulate products that are biodegradable and safe for waterways and ecosystems." 
            },
            { 
              icon: <Heart className="h-10 w-10 text-red-500" />, 
              title: "Family Safety", 
              description: "Our products are free from harsh chemicals, making them safe for homes with children and pets." 
            },
            { 
              icon: <Award className="h-10 w-10 text-blue-500" />, 
              title: "Uncompromising Quality", 
              description: "We believe eco-friendly products should clean just as effectively as conventional ones." 
            },
            { 
              icon: <Users className="h-10 w-10 text-purple-500" />, 
              title: "Community Impact", 
              description: "We donate a portion of our profits to environmental conservation efforts." 
            }
          ].map((value, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Commitment to Sustainability</h2>
              <p className="text-gray-700 mb-4">
                At Clean House, sustainability isn't just a buzzword—it's at the heart of everything we do. From sourcing ingredients to packaging and shipping, we're constantly looking for ways to reduce our environmental footprint.
              </p>
              <ul className="space-y-2">
                {[
                  "100% recyclable packaging made from post-consumer materials",
                  "Carbon-neutral shipping for all orders",
                  "Ingredients sourced from renewable plant-based materials",
                  "Zero waste manufacturing process"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <svg className="h-5 w-5 mt-0.5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sustainability" 
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Every purchase you make helps us create a cleaner future for our homes and our planet.
          </p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/products'}
          >
            Shop Our Products
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
