import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
      {
        question: "What services are included in each grooming package?",
        answer:
          "Each package includes a hypo-allergenic bath, conditioning treatment, ear cleaning, and coat styling. Higher-tier packages include additional spa treatments and extended grooming sessions for your pet's ultimate comfort.",
      },
      {
        question: "How long does a typical grooming session take?",
        answer:
          "A standard grooming session takes between 2-3 hours depending on your pet's size, coat condition, and the package selected. We never rush the process to ensure your pet has a stress-free experience.",
      },
      {
        question: "Do you offer discounts for multiple pets?",
        answer:
          "Yes! We offer a 15% discount when you bring two pets, and 20% off for three or more pets from the same family. This makes our Family Package even more valuable for multi-pet households.",
      },
      {
        question: "Can I customize a package for my pet's specific needs?",
        answer:
          "Absolutely! While our packages cover most needs, we're happy to create custom grooming plans. Just contact us to discuss your pet's specific requirements, and we'll design a personalized service package.",
      },
    ];

    const toggleFaq = (index) => {
      setOpenFaq(openFaq === index ? null : index);
    };
    return (
      <div className="pt-16 ">
        <div className="px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Info */}
            <div>
              <div className="text-orange-500 font-semibold mb-2 uppercase text-sm tracking-wide">
                Asked Questions
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                We are Ready For Your Any Questions
              </h2>
              <p className="text-gray-600 mb-4">
                Have questions about our grooming services or pricing? We're
                here to help! Our team is dedicated to providing transparent
                information about all our packages and services.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're curious about what's included in each package,
                how to book an appointment, or special accommodations for your
                pet, we have the answers you need.
              </p>
              <button className="btn btn-style rounded-full">Contact Us</button>
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-orange-50 transition-all"
                  >
                    <span className="font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    <div className="text-orange-500 shrink-0">
                      {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-600 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default FAQ;