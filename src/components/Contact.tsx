import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 font-['Space_Grotesk'] relative inline-block">
          <span className="relative z-10 text-black">Get In Touch</span>
          <div className="absolute inset-0 bg-[#FFE600] -z-10 transform rotate-1"></div>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="neo-brutal-box bg-white">
              <h3 className="text-2xl font-bold mb-4 text-black">Contact Information</h3>
              <p className="text-black mb-6">
                Feel free to reach out! I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:supase@hawk.iit.edu"
                  className="flex items-center gap-3 text-black bg-[#FF90E8] px-4 py-2 border-2 border-black transform hover:-rotate-2 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  supase@hawk.iit.edu
                </a>

                <a
                  href="https://www.linkedin.com/in/siddhartha-upase-a6963617a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black bg-[#7DF9FF] px-4 py-2 border-2 border-black transform hover:rotate-2 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  Siddhartha Upase
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="neo-brutal-box bg-white space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#FFE600] border-2 border-black text-black font-medium"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-bold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#FF90E8] border-2 border-black text-black font-medium"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-bold text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-[#7DF9FF] border-2 border-black text-black font-medium"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6FFF7D] text-black font-bold px-6 py-3 border-2 border-black transform hover:-rotate-2 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}