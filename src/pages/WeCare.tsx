import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WeCare() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gradient-to-b from-white to-orange-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Heart className="mx-auto h-12 w-12 text-orange-600" />
          </motion.div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 sm:text-4xl">
            Why We Care
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Pocket Grandson, we believe that technology should bring families closer together, not create barriers. Our mission is to help seniors stay connected, independent, and engaged in their daily lives while ensuring their safety in the digital world.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 max-w-2xl"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <div className="space-y-12">
            {[
              {
                title: "Our Mission",
                content: "We're dedicated to bridging the digital divide for seniors, making technology accessible, safe, and enjoyable. Our platform is designed with simplicity and security at its core, ensuring that our elderly users can confidently navigate the digital world while staying connected with their loved ones."
              },
              {
                title: "Protecting Our Users",
                content: "In today's digital age, seniors are often targeted by online scams and fraud. We've built robust security features into our platform, including scam detection, secure communication channels, and educational resources to help our users identify and avoid potential threats. Our team works tirelessly to ensure that every interaction within our app is safe and secure."
              },
              {
                title: "Supporting Independence",
                content: "We understand the importance of maintaining independence while aging. Our app provides tools and features that help seniors manage their daily lives, from medication reminders to appointment scheduling, all while keeping their families informed and connected. This balance of independence and support creates peace of mind for both seniors and their loved ones."
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                variants={fadeIn}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  {section.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 max-w-2xl bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <blockquote className="text-center text-xl font-semibold leading-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 sm:text-2xl sm:leading-9">
            "Technology should enhance human connection, not replace it. We're here to make that connection easier and safer for everyone."
          </blockquote>
          <p className="mt-6 text-base text-center text-gray-600">
            — The Pocket Grandson Team
          </p>
        </motion.div>
      </div>
    </div>
  );
}