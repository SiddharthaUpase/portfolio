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
      playlist: '830kF3HCtoM',
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="w-40 h-40 border-4 border-black transform rotate-3 overflow-hidden bg-white p-2">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover border-2 border-black"
              />
            </div>
            <div className="absolute inset-0 w-40 h-40 border-4 border-black -rotate-3"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-['Space_Grotesk'] relative">
            <span className="relative inline-block transform hover:-rotate-2 transition-transform">
              <span className="text-black">Siddhartha Upase</span>
              <div className="absolute inset-0 bg-[#FFE600] -z-10 transform rotate-1"></div>
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 font-bold bg-[#FF90E8] text-black px-4 py-2 transform -rotate-1 border-4 border-black shadow-brutal">
            Full Stack Developer & Game Developer
          </p>

          <div className="flex space-x-6 mb-12">
            <a
              href="https://github.com/SiddharthaUpase"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7DF9FF] p-4 border-4 border-black transform hover:rotate-2 transition-transform shadow-brutal"
            >
              <Github className="w-6 h-6 text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhartha-upase-a6963617a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6FFF7D] p-4 border-4 border-black transform hover:-rotate-2 transition-transform shadow-brutal"
            >
              <Linkedin className="w-6 h-6 text-black" />
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('supase@hawk.iit.edu');
                alert('Email copied to clipboard!');
              }}
              className="bg-[#FF6B6B] p-4 border-4 border-black transform hover:rotate-2 transition-transform shadow-brutal"
            >
              <Mail className="w-6 h-6 text-black" />
            </button>
          </div>
          
          <div className="mb-12 transform rotate-1">
            <p className="text-xl font-bold mb-4 bg-black text-white px-4 py-2 border-2 border-white inline-block">
              Latest Product
            </p>
            <div className="bg-white border-4 border-black p-4 shadow-brutal">
              <div className="border-2 border-black">
                <YouTube 
                  videoId="830kF3HCtoM"
                  opts={opts}
                  className="w-full"
                  iframeClassName="w-full"
                />
              </div>
              <p className="mt-4 font-bold text-black text-xl hover:underline cursor-pointer">
                ResumeGenie - AI-Powered Resume Generator
              </p>
            </div>
          </div>
          
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#FFB800] text-black px-8 py-4 text-xl font-bold border-4 border-black transform hover:rotate-1 transition-transform shadow-brutal"
          >
            Learn More about me →
          </button>
        </div>
      </div>
    </section>
  );
}