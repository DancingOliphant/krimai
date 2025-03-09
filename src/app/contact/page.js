'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: 'General Inquiry'
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Email Us</h3>
                    <p className="text-gray-300">
                      <a href="mailto:info@krimai.com" className="hover:text-blue-400 transition">info@krimai.com</a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                    <p className="text-gray-300">
                      <a href="tel:+1234567890" className="hover:text-blue-400 transition">+1 (234) 567-890</a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
                    <p className="text-gray-300">
                      123 AI Innovation Street<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((platform) => (
                        <a 
                          key={platform} 
                          href="#" 
                          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition"
                        >
                          {platform[0]}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-green-500 text-2xl">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          message: '',
                          subject: 'General Inquiry'
                        });
                      }} 
                      className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block mb-1 font-medium">Your Name*</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Your Email*</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block mb-1 font-medium">Company</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block mb-1 font-medium">Subject*</label>
                        <select 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Sales Question">Sales Question</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership Opportunity">Partnership Opportunity</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block mb-1 font-medium">Message*</label>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>
                      
                      <div className="pt-4">
                        <button 
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Offices</h2>
            <div className="bg-gray-800 rounded-xl overflow-hidden h-[400px] flex items-center justify-center">
              <p className="text-gray-400">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'What is the typical response time for inquiries?',
                  answer: 'We typically respond to all inquiries within 24 business hours. For urgent matters, please indicate that in your message subject.'
                },
                {
                  question: 'Do you offer support on weekends?',
                  answer: 'Our customer support team is available Monday through Friday, 9am to 5pm PST. For premium and enterprise customers, we offer extended support hours.'
                },
                {
                  question: 'I'm having technical issues. Where can I get help?',
                  answer: 'For technical support, please email support@krimai.com or use the contact form with "Technical Support" as the subject.'
                },
                {
                  question: 'Do you offer demos for potential customers?',
                  answer: 'Yes! We offer personalized demos for teams and companies interested in our Pro and Enterprise plans. Please select "Sales Question" from the subject dropdown.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
