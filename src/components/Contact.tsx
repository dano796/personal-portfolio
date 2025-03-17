import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Check if environment variables are defined
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables:", {
        serviceId,
        templateId,
        publicKey,
      });
      setIsSending(false);
      alert(
        "Configuration error: Missing EmailJS credentials. Check environment variables."
      );
      return;
    }

    if (!form.current) {
      console.error("Form reference is null");
      setIsSending(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (response) => {
        console.log("Email sent successfully:", response);
        setMessageSent(true);
        setIsSending(false);
        if (form.current) form.current.reset(); // Clear the form
        setTimeout(() => setMessageSent(false), 3000); // Hide message after 3 seconds
      },
      (error) => {
        console.error("Failed to send email:", error);
        setIsSending(false);
        alert(
          `Error sending message: ${
            error.text || error.message
          }. Check console for details.`
        );
      }
    );
  };

  return (
    <div className="border-b border-neutral-900 text-white">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-medium"
      >
        Get in touch
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center text-[17px] mb-8 font-medium text-neutral-400"
      >
        Want to work together or connect? Feel free to reach me out!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto p-6 rounded-lg shadow-lg pb-12"
      >
        <div className="mb-4">
          <label className="block font-medium text-neutral-400 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name" // Changed from "user_name" to "name"
            required
            className="w-full p-3 bg-neutral-900 border border-neutral-400 rounded-lg text-white focus:outline-none focus:border-0 focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-neutral-400 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email" // Changed from "user_email" to "email"
            required
            className="w-full p-3 bg-neutral-900 border border-neutral-400 rounded-lg text-white focus:outline-none focus:border-0 focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-neutral-400 mb-2">
            Message
          </label>
          <textarea
            name="message" // Already matches, no change needed
            required
            rows={4}
            className="w-full p-3 bg-neutral-900 border border-neutral-400 rounded-lg focus:outline-none focus:border-0 focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSending}
          className="w-full border-2 border-neutral-400 rounded-lg text-center py-2.5 px-6 mb-7 font-semibold"
        >
          {isSending ? "Sending message..." : "Send"}
        </motion.button>
        {messageSent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 font-medium text-green-400 text-center"
          >
            Message sent!
          </motion.p>
        )}
      </motion.form>

      {/* Additional Contact Info */}
      <div className="text-center mt-12">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="my-4 text-gray-300"
        >
          {CONTACT.address}
        </motion.p>
        <a
          href="mailto:ortizdaniel796@gmail.com"
          className="border-b text-gray-300 hover:text-purple-500"
        >
          {CONTACT.email}
        </a>
        <p className="my-16 text-gray-300">{CONTACT.copyright}</p>
      </div>
    </div>
  );
};

export default Contact;
