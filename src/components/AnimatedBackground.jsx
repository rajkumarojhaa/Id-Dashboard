import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black">
      {/* Floating Gradient Circle 1 */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-600 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 200, -200, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Gradient Circle 2 */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, -150, 150, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Gradient Circle 3 */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 100, -100, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedBackground;
