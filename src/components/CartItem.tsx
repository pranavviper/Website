import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';


interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <motion.div 
      className="flex flex-col sm:flex-row items-center gap-4 border-b border-gray-200 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 capitalize">{product.category.replace('-', ' ')}</p>
        <p className="font-medium text-blue-600 mt-1">${product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <motion.button 
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={handleDecrement}
          whileTap={{ scale: 0.9 }}
        >
          <Minus className="h-4 w-4 text-gray-600" />
        </motion.button>
        
        <span className="w-8 text-center font-medium">{quantity}</span>
        
        <motion.button 
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={handleIncrement}
          whileTap={{ scale: 0.9 }}
        >
          <Plus className="h-4 w-4 text-gray-600" />
        </motion.button>
      </div>
      
      <div className="text-right">
        <p className="font-semibold text-gray-800">${(product.price * quantity).toFixed(2)}</p>
        <motion.button 
          className="text-red-500 hover:text-red-700 mt-1 text-sm flex items-center"
          onClick={handleRemove}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Remove
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CartItem;