// src/components/ContactPage.js

import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { MapPin, Mail, Phone } from "lucide-react";
import "react-phone-number-input/style.css";

// Simple validation rules (react-hook-form built-in)
const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  terms: false,
};

const ContactInfoCard = ({ icon, title, details }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
    <div className="bg-yellow-100 p-4 rounded-full mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <div className="text-gray-600 space-y-1">
      {details.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  </div>
);

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Form submitted:", data);
    alert("✅ Thank you! Your message has been sent.");
    reset();
  };

  const contactDetails = [
    {
      icon: <MapPin className="w-8 h-8 text-yellow-600" />,
      title: "PHYSICAL ADDRESS",
      details: ["4458 Philip Ln, Commerce Township, MI 48382"],
    },
    {
      icon: <Mail className="w-8 h-8 text-yellow-600" />,
      title: "EMAIL ADDRESS",
      details: ["info@globalcareeradvisorllc.com", "support@globalcareeradvisorllc.com"],
    },
    {
      icon: <Phone className="w-8 h-8 text-yellow-600" />,
      title: "PHONE NUMBER",
      details: ["+1 248-390-5598"],
    },
  ];

  return (
    <main className="font-sans bg-gray-50">
      {/* HERO */}
      <section className="bg-yellow-400 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-800 max-w-2xl mx-auto">
            Fill out the form and our team will get back to you as soon as
            possible.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 -mt-28">
          {contactDetails.map((card) => (
            <ContactInfoCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="pb-24 pt-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div>
                  <label className="block mb-1 font-medium">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("firstName", { required: "First name is required" })}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block mb-1 font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("lastName", { required: "Last name is required" })}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block mb-1 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block mb-1 font-medium">
                  Phone <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Phone number is required",
                    validate: (value) =>
                      value?.length > 0 || "Invalid phone number",
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      international
                      defaultCountry="US"
                      className={`p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 w-full ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block mb-1 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="5"
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "At least 10 characters" },
                  })}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div className="mb-6 flex items-start">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must accept the SMS policy",
                  })}
                  className="h-4 w-4 mt-1 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
                />
                <label className="ml-3 text-sm text-gray-600">
                  I agree to receive SMS messages for appointment reminders,
                  customer service, and marketing as per our{" "}
                  <a
                    href="/sms-privacy"
                    className="text-yellow-600 underline hover:text-yellow-700"
                  >
                    SMS Privacy
                  </a>
                  .
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm mb-4">{errors.terms.message}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300 disabled:bg-gray-400"
              >
                {isSubmitting ? "Sending..." : "Book A Call Now"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
