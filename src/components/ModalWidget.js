import { motion } from "framer-motion";

const ModalWidget = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
    initial={{ opacity: 0,scale:0 }}
    animate={{ opacity: 1,scale:1 }}
    exit={{ opacity: 0, scale:0 }}
    
    className={ `fixed z-10 inset-0 overflow-y-auto transition-all scale-0 ${isOpen ? "scale-100" : "scale-0"} text-black`}>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className="fixed inset-0 transition-opacity"
          onClick={onClose}
        >
          <div className="absolute inset-0 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-full lg:w-[400px]">
          <div className="px-6 py-4">
            <div className="text-xl font-bold mb-4">My Social handles</div>
            <div className="flex justify-around">
        <a className="cursor-pointer hover:scale-105 transition flex rounded-full size-12 bg-black justify-center items-center text-white">
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="fill-white size-8"><path d="M24,4C12.972,4,4,12.972,4,24c0,10.006,7.394,18.295,17,19.75V29h-4c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1h4v-3.632C21,15.617,23.427,13,27.834,13c1.786,0,3.195,0.124,3.254,0.129C31.604,13.175,32,13.607,32,14.125V17.5c0,0.553-0.448,1-1,1h-2c-1.103,0-2,0.897-2,2V24h4c0.287,0,0.56,0.123,0.75,0.338c0.19,0.216,0.278,0.502,0.243,0.786l-0.375,3C31.555,28.624,31.129,29,30.625,29H27v14.75c9.606-1.455,17-9.744,17-19.75C44,12.972,35.028,4,24,4z"/></svg>

        </a>
        <a className="cursor-pointer hover:scale-105 transition flex rounded-full size-12 bg-black justify-center items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-white size-8">
  <path d="M6.9199219 6L21.136719 26.726562L6.2285156 44L9.40625 44L22.544922 28.777344L32.986328 44L43 44L28.123047 22.3125L42.203125 6L39.027344 6L26.716797 20.261719L16.933594 6L6.9199219 6 z"/>
</svg>
        </a>
        <a className="cursor-pointer hover:scale-105 transition flex rounded-full size-12 bg-black justify-center items-center text-white">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"  className="fill-white size-8">
  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/>
</svg>
        </a>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-100 text-right">
            <button
              className="hover:text-gray-900 font-semibold"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalWidget;
