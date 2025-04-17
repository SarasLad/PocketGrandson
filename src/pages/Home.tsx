import React from 'react';
import { Smartphone, Heart, ArrowRight, Shield, Users, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const benefits = [
    {
      title: "Stay Connected",
      description: "Keep in touch with family through simple video calls and messages",
      icon: Users
    },
    {
      title: "Stay Safe",
      description: "Built-in protection against scams and fraud attempts",
      icon: Shield
    },
    {
      title: "Stay Organized",
      description: "Never miss important medications or appointments",
      icon: Bell
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <motion.span 
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  Your Digital
                </motion.span>
                <motion.span 
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Companion
                </motion.span>
              </h1>
              <motion.p 
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Pocket Grandson is your trusted digital companion, making technology accessible and enjoyable for seniors. Stay connected, organized, and independent with our intuitive assistant.
              </motion.p>
              <motion.div 
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="rounded-md shadow">
                  <Link
                    to="/features"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Features
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-20"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-2xl font-bold text-gray-900 sm:text-3xl mb-8"
                variants={fadeIn}
              >
                Why Choose Pocket Grandson?
              </motion.h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="bg-white backdrop-blur-lg bg-opacity-80 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    variants={fadeIn}
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </main>
        </div>

        {/* Right Image */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center items-center p-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-sm h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-bl-3xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 border-8 border-orange-200 rounded-3xl transform rotate-3"></div>
                  <div className="absolute inset-0 border-8 border-orange-300 rounded-3xl transform -rotate-3"></div>
                  <motion.div 
                    className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <img 
                      src="/edit.jpg" 
                      alt="Pocket Grandson App"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>


{/* Meet the Minds Section */}
<div className="mx-auto max-w-2xl mt-24 px-4">
  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Meet the Minds Behind Pocket Grandson</h2>
  <div className="mt-10 space-y-8">
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Our Founder</h3>
      <p className="mt-4 text-gray-600">
        Arman Jaffar, the visionary behind Pocket Grandson, is a student studying in 11th grade, but that doesn't stop him from following his passion for technology and helping seniors. 
        With a keen interest in artificial intelligence and a heart full of compassion, Arman developed this app to bridge the technological gap for seniors. 
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Our Advisors</h3>
      <p className="mt-4 text-gray-600">
        Seema Kazmi, Digital Health Executive at BMS, with over 24 years of experience in the technological sector, brings a wealth of knowledge in digital transformation. 
        She has worked with global firms, developing user-centric platforms and integrating digital solutions for better outcomes. 
        Seema’s insights ensure that Pocket Grandson meets high standards of functionality, security, and trust for the senior community.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Our Advisors</h3>
      <p className="mt-4 text-gray-600">
        Faraz Abidi, AI Engineer and an entrepreneur, lends his expertise in artificial intelligence and data systems to optimize the backend of Pocket Grandson. 
        With a strong background in machine learning, Faraz ensures that the assistant’s suggestions, reminders, and alerts are personalized and intelligent, 
        providing a seamless experience for every user.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Our Advisors</h3>
      <p className="mt-4 text-gray-600">
        Harsh Sonawane, management scholar at IIM Ranchi, guides the strategic and operational roadmap of Pocket Grandson. 
        His research and fieldwork in consumer behavior and user adoption are instrumental in refining the app’s usability and go-to-market strategy. 
        Harsh’s insights help ensure that Pocket Grandson remains relevant and impactful for seniors and their families.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Our Advisors</h3>
      <p className="mt-4 text-gray-600">
        Saras Lad, a skilled freelancer with a keen eye for user experience, collaborates on the design aspects of Pocket Grandson. 
        His focus on intuitive interfaces, readable typography, and engaging visuals ensures that the app remains accessible to users with varying levels of tech familiarity. 
        Saras’s creative inputs help Pocket Grandson feel more like a caring companion than a digital tool.
      </p>
    </div>
  </div>
</div>

    </div>
  );
}
