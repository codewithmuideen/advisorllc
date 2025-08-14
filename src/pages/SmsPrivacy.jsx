import React from "react";
import { FaMobileAlt, FaShieldAlt, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const SmsPrivacy = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Header Section */}
      <div className="bg-[#061325] text-white py-12 px-6 text-center">
        <FaMobileAlt className="text-yellow-400 text-5xl mx-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">SMS Privacy Policy</h1>
        <p className="text-sm text-gray-300">Last updated: August 10, 2025</p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-10 px-6 space-y-8 leading-relaxed">
        <section>
          <p>
            This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
            information when you use our services. By using our services, you agree to the collection and use of
            information in accordance with this policy.
          </p>
          <p className="mt-3">
            Global Career Advisor LLC maintains strict privacy standards and does not sell, share, rent, or trade
            personal and mobile information to third parties for marketing or promotional purposes.
          </p>
        </section>

        {/* SMS Opt-Out */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaMobileAlt className="text-yellow-500" /> SMS Opt-Out
          </h2>
          <p className="mt-2">
            If you wish to stop receiving SMS messages from us, reply <strong>“STOP”</strong> to the number from which
            you received the message. Once processed, you will no longer receive SMS from us. To rejoin, opt-in again as
            you did originally.
          </p>
        </section>

        {/* Data Collection */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaShieldAlt className="text-yellow-500" /> Collecting and Using Your Data
          </h2>
          <p className="mt-2">
            We may collect personal data such as name, email, phone number, address, and payment details (processed
            securely by third-party providers) through:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Website forms</li>
            <li>Newsletter sign-ups</li>
            <li>Purchase transactions</li>
          </ul>
          <p className="mt-3">Usage data such as IP address, browser type, and pages visited may also be collected.</p>
        </section>

        {/* Data Usage */}
        <section>
          <h2 className="text-2xl font-semibold">Use of Your Personal Data</h2>
          <ul className="list-disc pl-6 mt-2">
            <li>To provide and maintain services</li>
            <li>To communicate with you</li>
            <li>To process transactions securely</li>
            <li>To improve website performance</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        {/* Retention */}
        <section>
          <h2 className="text-2xl font-semibold">Retention of Your Personal Data</h2>
          <p className="mt-2">
            We retain your data only as long as necessary to fulfill the purposes outlined in this policy or as required
            by law.
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl font-semibold">Security of Your Personal Data</h2>
          <p className="mt-2">
            We use industry-standard safeguards to protect your information. However, no transmission method is 100%
            secure.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p className="mt-2">
            We may update this policy periodically and will notify you via email and/or a prominent website notice.
          </p>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" /> 4458 Philip Ln, Commerce Township, MI 48382
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" /> info@globalcareeradvisorllc.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" /> +1 248-390-5598
            </p>
          </div>
        </section>

        {/* SMS Terms */}
        <section className="bg-yellow-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">SMS Terms & Conditions</h2>
          <p>
            You may receive messages including order updates, customer service replies, and promotions. Message
            frequency varies. Message and data rates may apply. Carriers are not liable for delayed or undelivered
            messages.
          </p>
          <p className="mt-2">
            To stop messages, text <strong>STOP</strong>. For help, text <strong>HELP</strong> or contact us.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SmsPrivacy;
