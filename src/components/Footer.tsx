
import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">SR Publishing House</h3>
            <p className="text-slate-300 text-sm mb-4">
              Advancing scientific knowledge through high-quality open-access publishing.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Youtube, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="bg-slate-700 hover:bg-slate-600 p-2 rounded-full transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About us</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Editorial Board</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Language Editing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Copyediting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Proofreading</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Submission Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Author Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Peer Review Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publishing Ethics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 SR Publishing House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
