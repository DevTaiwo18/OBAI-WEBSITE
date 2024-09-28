import React from 'react';

const Contactus = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tilted text before the title */}
      <div className="text-center">
        <p className="text-sm text-[#FF5F1E] mb-2 uppercase">have questions?</p>
      </div>
      
      {/* Heading */}
      <h1 className="text-center text-3xl font-extrabold text-[#171717] mb-8">Contact Us</h1>
      
      {/* Google Calendar Scheduling Embed Section */}
      <div className="w-full flex justify-center items-center" style={{ padding: '20px' }}>
        {/* Embed Google Calendar iframe */}
        <iframe
          src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0fdyo8OE4MPhwQRmYl1z5e7EYHiDLzMS9mnBxQtvGwmoqTUWOAkc980djHTZNnd4GXWC-FNBmr?gv=true"
          title="Google Calendar Scheduling"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ borderRadius: '12px' }}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Contactus;
