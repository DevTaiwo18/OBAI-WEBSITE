import React from 'react';

const Easy = () => {
  return (
    <section className="bg-gradient-to-b from-white to-orange-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="inline-block">
            <p className="text-sm text-gray-600 font-black tracking-wide border border-gray-200 rounded-full px-4 py-1 bg-white shadow-sm">
              Simple Process
            </p>
          </div>
          <h2 className="text-4xl font-black text-gray-900">It's that easy</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your claims process
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg relative">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full text-xl font-bold shadow-lg">
                1
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="text-gray-900 font-bold text-xl">Upload the claim</h3>
              <p className="text-gray-600 font-serif">
                The adjuster initiates the process by uploading the claim details (insurance information, incident details, policyholder and vehicle information) manually or via our file reader, along with options and customized instructions for customers.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg relative">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full text-xl font-bold shadow-lg">
                2
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="text-gray-900 font-bold text-xl">Customer collects damage</h3>
              <p className="text-gray-600 font-serif">
                The customer receives a customized link that guides them through detailed, step-by-step instructions for preparing image/video evidence of vehicle damage. The process also includes repair shop selection, along with additional details and notes tailored for the adjuster.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg relative">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full text-xl font-bold shadow-lg">
                3
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="text-gray-900 font-bold text-xl">Precise scope returned</h3>
              <p className="text-gray-600 font-serif">
                All multimedia and metadata goes through our damage estimator model which assesses dent sizing and depth in various lighting conditions and capture environments. The total package is then returned to the adjuster for review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Easy;