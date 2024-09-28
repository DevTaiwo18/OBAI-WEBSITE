import React from 'react';

const ContactInfo = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Section: Contact Information */}
        <div>
          <div className="text-left mb-6">
            <h2 className="text-3xl font-extrabold text-brand-dark">Contact Information</h2>
          </div>
          <div className="space-y-4 text-brand-dark">
            <p>Email | info@openbayautos.com</p>
            <p>Number | +1 (234) 567-8901</p>
            <p>Address | 123 Street Ave, Office 31, 40018, Louisville, KY</p>
          </div>

          {/* Buttons Section */}
          <div className="mt-6 flex gap-4">
            <button
              className="bg-brand-primary text-white font-semibold py-2 px-6 rounded-full shadow-custom hover:bg-brand-primary/90 transition duration-300"
              style={{ boxShadow: '0px 9px 20px rgba(255, 95, 30, 0.3)' }} // Custom shadow added
            >
              Email
            </button>
            <button
              className="border-2 border-brand-primary text-brand-primary font-semibold py-2 px-6 rounded-full shadow-custom hover:bg-brand-primary hover:text-white transition duration-300"
              style={{ boxShadow: '0px 9px 20px rgba(255, 95, 30, 0.3)' }} // Custom shadow added
            >
              Call
            </button>
          </div>
        </div>

        {/* Right Section: Form */}
        <div>
          <div className="mt-8 lg:mt-0">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-brand-dark font-semibold" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <div>
                <label className="block text-brand-dark font-semibold" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <div>
                <label className="block text-brand-dark font-semibold" htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <div>
                <label className="block text-brand-dark font-semibold" htmlFor="position">Position</label>
                <input
                  type="text"
                  id="position"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-brand-dark font-semibold" htmlFor="notes">Notes</label>
                <textarea
                  id="notes"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  rows="4"
                ></textarea>
              </div>
            </form>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                className="bg-brand-primary text-white font-bold py-2 px-6 rounded-full shadow-custom hover:bg-brand-primary/90 transition duration-300"
                style={{ boxShadow: '0px 9px 20px rgba(255, 95, 30, 0.3)' }} // Custom shadow added
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
