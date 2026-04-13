import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

     
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

    
        <div>
          <h2 className="text-2xl font-bold text-white">artROOT</h2>
          <p className="mt-3 text-sm text-gray-400">
            Discover creativity, explore products, and build your style with artROOT.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Products</a></li>
            <li><a href="#" className="hover:text-white transition">Cart</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>  <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <p className="text-sm text-gray-400">Follow us on social media</p>

          <div className="flex gap-4 mt-3 text-xl">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">📷</span>
            <span className="hover:text-white cursor-pointer">🐦</span>
            <span className="hover:text-white cursor-pointer">💼</span>
          </div>
        </div>

      </div>

    
      <div className="border-t border-gray-700"></div>


      <div className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-semibold">artROOT</span> • Created by <span className="text-white">Ajay Chauhan</span>
      </div>

    </footer>
  );
}

export default Footer;