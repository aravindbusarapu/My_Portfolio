import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_h5j52uv', 'template_ka865yl', e.target, 'nB77dOL95l9MudUHi')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again later.');
      });
    e.target.reset();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="Contact" className="bg-gr1 text-gray-900 py-20">
      <div className="container mx-auto flex flex-col gap-16 lg:flex-row lg:gap-0 items-center">
        <div className="space-y-10 lg:space-y-20 w-full lg:w-1/2 flex flex-col">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">
            Let's discuss
            <br />
            on something <span className="text-blue">cool</span> together
          </h2>
          <div>
            <p>I'm interested in....</p>
            <ul className="flex flex-wrap gap-4 mt-4 max-w-96">
              <li className="bg-gray-200 text-gray-900 p-2 rounded">
                Ecommerce Website
              </li>
              <li className="bg-gray-200 text-gray-900 p-2 rounded">
                Landing Page
              </li>
              <li className="bg-gray-200 text-gray-900 p-2 rounded">Portfolio</li>
              <li className="bg-gray-200 text-gray-900 p-2 rounded">
                Blog Website
              </li>
              <li className="bg-gray-200 text-gray-900 p-2 rounded">
                Responsive Design
              </li>
            </ul>
          </div>
        </div>
        <form className="space-y-5 w-full lg:w-1/2" onSubmit={handleSubmit}>
          <div>
            <label className="block">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded mt-2"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block">Your Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded mt-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block">Your Message</label>
            <textarea
              name="message"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue text-white px-4 py-3 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
