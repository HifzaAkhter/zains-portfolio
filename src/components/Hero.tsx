import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Download, ArrowRight, Phone, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-teal-50 via-white to-coral-50 pt-16 overflow-hidden"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative w-36 h-36 md:w-44 md:h-44 group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-coral-300 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-full h-full bg-white rounded-full p-1 border-2 border-gray-100 shadow-xl">
              <img
                src="/lovable-uploads/profile3.jpg"
                alt="Zain-ul-Abrar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Name & Description */}
        <motion.div variants={itemVariants} className="mb-8 space-y-4">
         <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight text-teal-500">
  Zain-ul-Abrar
</h1>
          <h2 className="text-xl md:text-2xl text-teal-800 mb-4 font-medium tracking-wide">
            SEO & Content Writer
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
            I craft SEO-optimized blogs, web content, and service pages that drive traffic, engage audiences,
            and convert visitors into loyal customers. Collaborating with top companies and clients, I create
            content strategies that rank high on search engines.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-teal-600" />
              <span>0315-3977669</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-teal-600" />
              <a href="mailto:zainabrar51@gmail.com" className="hover:underline">
                zainabrar51@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-teal-500 to-coral-500 hover:from-teal-600 hover:to-coral-600 text-white px-8 py-3 font-semibold shadow-lg border-0 group overflow-hidden"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            See Clients & Collaborations
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Button>

          <a
            href="/Resume1.pdf"
            download="Resume1.pdf"
            className="relative inline-flex items-center px-8 py-3 text-sm font-semibold text-gold-400 border-2 border-gold-400 hover:bg-gold-400 hover:text-white rounded-md transition-all duration-300 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gold-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <Download className="mr-2" size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/zainulabrar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-500 transition-all duration-300 p-3 rounded-full hover:bg-teal-50 group"
          >
            <Linkedin
              size={28}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://www.facebook.com/people/Zain-Digital/61576087023830/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-all duration-300 p-3 rounded-full hover:bg-blue-50 group"
          >
            <Facebook
              size={28}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://www.instagram.com/zaindigital14/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-all duration-300 p-3 rounded-full hover:bg-pink-50 group"
          >
            <Instagram
              size={28}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
