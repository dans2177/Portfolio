import React from 'react';

function Contact() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Contact</h2>
      <form className="flex flex-col space-y-2">
        <input className="border p-2" type="text" placeholder="Your Name" />
        <input className="border p-2" type="email" placeholder="Your Email" />
        <textarea className="border p-2" placeholder="Your Message"></textarea>
        <button className="bg-blue-500 text-white p-2 rounded">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
