'use client';

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <PageContainer 
      title="Contact Us"
      description="Get in touch with our team"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="prose prose-blue">
          <h4>Support & Assistance</h4>
          <p>Our support team is always ready to help with technical issues, product inquiries, or general feedback. Don't hesitate to reach out — your voice matters to us.</p>

          <h4>Reach Out Anytime</h4>
          <p>For quick responses, drop us an email or fill out the contact form. We're committed to ensuring a smooth and helpful experience for every user.</p>
          <div className="space-y-2">
            <p><strong>Email:</strong> <a href="mailto:shaikfareed2203@gmail.com">shaikfareed2203@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919701864124">+91 97018 64124</a></p>
          </div>

          <h4>Our Location</h4>
          <p>Hyderabad, Telangana, India</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Send us a Message</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </PageContainer>
  );
}