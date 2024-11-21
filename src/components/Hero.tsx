import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import YouTube from 'react-youtube';
import profileImage from '../assets/images/Me.jpeg'

export default function Hero() {
  const opts = {
    height: '180',
    width: '320',
    playerVars: {
      modestbranding: 1,
      controls: 0,
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: '830kF3HCtoM', // ResumeGenie video ID
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-8 ring-4 ring-purple-500 ring-offset-4 dark:ring-offset-gray-900">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Siddhartha Upase 
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            Full Stack Developer & Game Developer
          </p>

          
          <div className="flex space-x-6 mb-12 animate-fade-in-up animation-delay-400">
            <a
              href="https://github.com/SiddharthaUpase"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhartha-upase-a6963617a/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('supase@hawk.iit.edu');
                alert('Email copied to clipboard!');
              }}
              className="transform hover:scale-110 transition-transform"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mb-8 animate-fade-in-up animation-delay-300">
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">Latest Product</p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <YouTube 
                videoId="830kF3HCtoM"
                opts={opts}
                className="w-full"
                iframeClassName="w-full"
              />
              <p 
                className="text-sm text-gray-500 dark:text-gray-400 mb-2 cursor-pointer"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ResumeGenie - A tool to generate resumes from LinkedIn profiles
              </p>
            </div>
          </div>
          
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors animate-fade-in-up animation-delay-600"
          >
            Learn More about me →
          </button>
        </div>
      </div>
    </section>
  );
}