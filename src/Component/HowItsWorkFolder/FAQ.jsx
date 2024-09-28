import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'How does OBAI streamline the hail insurance claims process?',
            answer:
                'OBAI automates the claim process, making it faster and easier for both adjusters and customers by utilizing AI-powered tools and a seamless user interface.',
        },
        {
            question: 'What is RepairBot and how does it help in the claims process?',
            answer:
                'RepairBot is an AI-powered assistant that guides customers through the process of submitting photos, videos, and additional information for their hail damage claim. It ensures all necessary details are provided accurately.',
        },
        {
            question: 'Can customers track the progress of their claim through OBAI?',
            answer:
                'Yes, OBAI provides a real-time tracking system that allows customers to view the progress of their claim from submission to approval.',
        },
        {
            question: 'What types of information do adjusters need to input when creating a claim?',
            answer:
                'Adjusters need to input details such as incident reports, customer information, and recovery insurance information into the app’s admin interface.',
        },
        {
            question: 'How accurate are the damage estimates provided by OBAI?',
            answer:
                'OBAI uses advanced algorithms to provide highly accurate damage estimates based on the uploaded photos and information provided by the customer.',
        },
    ];

    return (
        <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-10">
                <h1 className="text-2xl md:text-4xl font-extrabold text-brand-dark">
                    Frequently Asked Questions
                </h1> 
            </div>

            <div className="bg-brand-white rounded-lg-rounded shadow-custom">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b last:border-none px-6 py-4 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm md:text-lg font-bold text-brand-dark">{faq.question}</h3> 
                            {openIndex === index ? (
                                <FaChevronUp className="text-brand-tertiary" />  
                            ) : (
                                <FaChevronDown className="text-brand-tertiary" />  
                            )}
                        </div>
                        {/* Motion animation for expanding/collapsing */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: openIndex === index ? 'auto' : 0,
                                opacity: openIndex === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            {openIndex === index && (
                                <motion.p className="text-[#606060] mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                    {faq.answer}
                                </motion.p>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
