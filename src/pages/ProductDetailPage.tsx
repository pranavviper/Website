import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, ArrowLeft, Minus, Plus, Check } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  const product = id ? getProductById(parseInt(id)) : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (product) {
      // Find related products in the same category
      const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);
      setRelatedProducts(related);
    }
  }, [id, product]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.button
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6"
          onClick={() => navigate(-1)}
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </motion.button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="p-6 flex items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto max-h-96 object-contain rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm text-blue-600 font-medium uppercase tracking-wider">
                {product.category.replace('-', ' ')}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mt-1 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">{product.rating.toFixed(1)} ({product.reviews} reviews)</span>
              </div>
              
              <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="flex items-center mb-6">
                <span className="text-gray-700 mr-4">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <motion.button 
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    whileTap={{ scale: 0.9 }}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </motion.button>
                  <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
                  <motion.button 
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
              
              <motion.button
                className={`w-full py-3 px-6 rounded-lg flex items-center justify-center font-semibold ${
                  isAdded ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {isAdded ? (
                    <motion.div 
                      key="added"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center"
                    >
                      <Check className="h-5 w-5 mr-2" />
                      Added to Cart
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="add"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex items-center"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Eco-Friendly", value: "Yes" },
                  { label: "Biodegradable", value: "Yes" },
                  { label: "Cruelty-Free", value: "Yes" },
                  { label: "Made in", value: "INDIA" }
                ].map((detail, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-200 py-2">
                    <span className="text-gray-600">{detail.label}</span>
                    <span className="font-medium text-gray-800">{detail.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
