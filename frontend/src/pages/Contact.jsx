import React from 'react';
import { Mail, Linkedin, Twitter, Instagram, Facebook, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen mx-auto px-4 py-16 pt-24 text-gray-300 md:mx-16 lg:mx-32 xl:mx-64">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>

      <p className="mb-6">We'd love to hear from you! This page is for inquiries related to MyGen's beta program, potential partnerships, and press. For general user support, please refer to the help section within the MyGen app.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="contact-info-card bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">General Inquiries</h2>
          <div className="flex items-center mb-3">
            <Mail size={20} className="text-cyan-400 mr-3" />
            <a href="mailto:info@mygen.com" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">livegrowflow.lgf@gmail.com</a>
          </div>
          <p className="text-gray-400 text-sm">For questions about the beta program, partnerships, or general information.</p>
        </div>

        <div className="contact-info-card bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Connect With Us</h2>
          <div className="flex items-center mb-3">
            <Linkedin size={20} className="text-cyan-400 mr-3" />
            <a href="https://www.linkedin.com/company/live-grow-flow/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">@live-grow-flow</a>
          </div>
          <div className="flex items-center mb-3">
            <Instagram size={20} className="text-cyan-400 mr-3" />
            <a href="https://www.instagram.com/livegrowflow_/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">@livegrowflow_</a>
          </div>
          <div className="flex items-center mb-3">
            <Facebook size={20} className="text-cyan-400 mr-3" />
            <a href="https://www.facebook.com/profile.php?id=61557529893359#" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">@Live - Grow - Flow</a>
          </div>
          <p className="text-gray-400 text-sm">Follow us on social media for updates and community engagement.</p>
        </div>
      </div>

      {/* <div className="contact-form-section bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
        <form className="grid grid-cols-1 gap-6">
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white" placeholder="your@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="block text-gray-400 text-sm font-bold mb-2">Subject</label>
            <input type="text" id="subject" name="subject" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white" placeholder="Subject of your inquiry" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-gray-400 text-sm font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white" placeholder="Your message..."></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button type="submit" className="btn-primary bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              Send Message
            </button>
          </div>
        </form>
      </div> */}

      {/* <div className="mt-12 text-center text-gray-500">
        <p className="flex items-center justify-center">
          <MapPin size={16} className="mr-2" />
          <span>Optional: MyGen Headquarters, 123 Wellness Way, Health City, HC 98765</span>
        </p>
      </div> */}
    </div>
  );
};

export default Contact;


// import React, { useState } from 'react';
// import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';

// // Main ContactForm component
// const App = () => {
//   // State to hold the form input values
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   // Handle input changes and update the state
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents the default form submission to a new page

//     // Define the recipient email address
//     const recipientEmail = 'dongjoo7@outlook.com';

//     // Construct the mailto link with URL-encoded subject and body
//     const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

//     // Open the user's default email client with the new draft
//     window.location.href = mailtoUrl;

//     // Optional: Reset form fields after submission
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 mx-auto px-4 py-16 pt-24 text-gray-300 md:mx-16 lg:mx-32 xl:mx-64 font-sans">
//       <h1 className="text-4xl font-bold text-white mb-8 text-center md:text-left">Contact Us</h1>

//       <p className="mb-12 text-center md:text-left max-w-2xl">We'd love to hear from you! This page is for inquiries related to MyGen's beta program, potential partnerships, and press. For general user support, please refer to the help section within the MyGen app.</p>

//       {/* Contact information section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//         <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
//           <h2 className="text-2xl font-semibold text-white mb-4">General Inquiries</h2>
//           <div className="flex items-center mb-3">
//             <Mail size={20} className="text-cyan-400 mr-3" />
//             <a href="mailto:livegrowflow.lgf@gmail.com" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">livegrowflow.lgf@gmail.com</a>
//           </div>
//           <p className="text-gray-400 text-sm">For questions about the beta program, partnerships, or general information.</p>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
//           <h2 className="text-2xl font-semibold text-white mb-4">Connect With Us</h2>
//           <div className="flex items-center mb-3">
//             <Linkedin size={20} className="text-cyan-400 mr-3" />
//             <a href="https://www.linkedin.com/company/live-grow-flow/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">@live-grow-flow</a>
//           </div>
//           <div className="flex items-center mb-3">
//             <Instagram size={20} className="text-cyan-400 mr-3" />
//             <a href="https://www.instagram.com/livegrowflow_/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">@livegrowflow_</a>
//           </div>
//           <div className="flex items-center mb-3">
//             <Facebook size={20} className="text-cyan-400 mr-3" />
//             <a href="https://www.facebook.com/profile.php?id=61557529893359#" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">@Live - Grow - Flow</a>
//           </div>
//           <p className="text-gray-400 text-sm">Follow us on social media for updates and community engagement.</p>
//         </div>
//       </div>

//       {/* Contact form section */}
//       <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
//         <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//           <div className="form-group">
//             <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
//               placeholder="Your Name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
//               placeholder="your@example.com"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="subject" className="block text-gray-400 text-sm font-bold mb-2">Subject</label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
//               placeholder="Subject of your inquiry"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message" className="block text-gray-400 text-sm font-bold mb-2">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
//               placeholder="Your message..."
//             ></textarea>
//           </div>
//           <div className="flex items-center justify-end">
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;
