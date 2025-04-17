import React from 'react';
import { MessageSquare, Calendar, Bell, Clock, Video, MapPin, Heart, Sparkles, Smartphone, Shield } from 'lucide-react';

export default function Features() {
  const currentFeatures = [
    {
      name: 'Scam Protection',
      description: 'Built-in protection against scams and fraud attempts',
      icon: Shield,
    },
    {
      name: 'Medication Reminders',
      description: 'Never miss important medications with timely alerts',
      icon: Bell,
    },
    
    {
      name: 'AI Companion',
      description: 'Intelligent conversation and companionship',
      icon: Sparkles,
    },
    {
      name: 'Daily Routines',
      description: 'Helpful reminders for daily activities and tasks',
      icon: Clock,
    },
    {
      name: 'Tips and Entertainment',
      description: 'Engaging tips and entertainment to keep you informed',
      icon: Heart,
    },
    
    {
      name: 'Device Health Checks',
      description: 'Regular checks to ensure device performance',
      icon: Smartphone,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-base font-semibold leading-7 text-purple-700">Features</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to stay connected
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how Pocket Grandson makes daily life easier and more connected for our senior users.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="mb-20">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-10">Highlighted Features</h3>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {currentFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </div>
  );
}