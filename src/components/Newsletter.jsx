import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

    if (subscribers.includes(email)) {
      setStatus("error");
      setMessage("You are already subscribed.");
    } else {
      subscribers.push(email);
      localStorage.setItem("subscribers", JSON.stringify(subscribers));
      setStatus("success");
      setMessage("You have subscribed to our newsletter.");
      setEmail("");
    }
  };

  return (
    <div className="flex justify-center items-center py-14 px-4 bg-[#061325]">
      <motion.div
        className="bg-[#0B1B35] backdrop-blur-lg rounded-3xl shadow-lg p-10 max-w-3xl w-full text-center border border-[#FACC15]/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-[#FACC15] p-4 rounded-full">
            <Mail className="w-8 h-8 text-[#061325]" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-2">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Get the latest updates, offers, and insights directly in your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-xl border border-white/30 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#FACC15] hover:bg-yellow-400 transition-all px-6 py-4 rounded-xl font-semibold text-[#061325]"
          >
            Subscribe
            <Send className="w-5 h-5" />
          </button>
        </form>

        {/* Message */}
        {message && (
          <motion.p
            className={`mt-4 font-medium ${
              status === "success" ? "text-green-400" : "text-red-400"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Newsletter;
