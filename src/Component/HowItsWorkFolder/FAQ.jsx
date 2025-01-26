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
                'OBAI automates the hail insurance claims process through its advanced AI-powered tools and intuitive user interface. It electrifies tasks such as damage capture, assessment, and documentation, significantly reducing processing time. By integrating seamlessly with repair shops and legacy systems, OBAI ensures faster resolutions while maintaining accuracy and customer satisfaction.',
        },
        {
            question: 'Can customers track the progress of their claim through OBAI?',
            answer:
                'Yes, OBAI provides a comprehensive real-time tracking system for both customers and adjusters. The system offers detailed progress updates, timelines, and interactive features that allow users to monitor every stage of the claim process, from submission to resolution.',
        },
        {
            question: 'What types of information do adjusters need to input when creating a damage capture?',
            answer:
                'Adjusters need to input details such as incident reports, customer information, and recovery insurance information into the app’s admin interface.',
        },
        {
            question: 'How accurate are the damage estimates provided by OBAI?',
            answer:
                'OBAI delivers highly accurate damage scope through its advanced dent detection algorithms that analyze vehicle images and data. The system cross-references historical repair costs, manufacturer specifications, and industry standards to ensure precision. This approach minimizes the margin of error and saves time compared to manual methods. ',
        },
        {
            question: 'How does OBAI ensure secure and compliant handling of customer and insurance data?',
            answer:
                'OBAI prioritizes data security by leveraging encryption technologies and compliance with industry standards such as GDPR and HIPAA. The platform includes role-based access controls, and regular security audits to safeguard sensitive information, ensuring peace of mind for both customers and partners. ',
        },
        {
            question: 'Can OBAI support integration with third-party systems and APIs?',
            answer:
                'Yes, OBAI offers robust OpenAPI integration capabilities, allowing seamless connectivity with legacy systems, third-party systems like repair shop management software and external data providers. This ensures a unified workflow and boosts operational efficiency.',
        },
        {
            question: 'What reporting features does OBAI provide for adjusters and partners?',
            answer:
                'OBAI provides easy-to-use reporting tools with dashboards, real-time analytics, and exportable reports. Adjusters can generate detailed insights into claim metrics, and team efficiency, supporting data-driven decisions and improving operational performance.',
        },
        {
            question: 'Is OBAI suitable for both personal and commercial hail insurance claims?',
            answer:
                'Yes, OBAI is designed to handle a wide range of hail insurance claims, including those for personal vehicles and commercial fleets. The platform’s scalable infrastructure and customizable workflows cater to the unique needs of different policyholders, ensuring efficient processing across all claim types.',
        },
        {
            question: 'Does OBAI support capture beyond hail damage?',
            answer:
                'Yes, our system was designed with flexibility in mind. While it excels at processing hail damage claims, it also supports a variety of other claim types through highly customizable workflows. Whether you need to capture work order information for quotations, manage repair orders, or handle any specific type of claim, our application is adaptable to meet your unique requirements.',
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
