// import React from "react";
// import { FaUser } from "react-icons/fa";
// import { FaArrowRightLong } from "react-icons/fa6";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   return (
//     <div id="contact" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl text-dark mb-6">
//             Reach out to us
//           </h1>
//           <p className="text-dark/60 max-w-xl mx-auto">
//             Let's talk! Whether its a quick question or a big project, we're
//             just a message away
//           </p>
//         </div>
//         {/* Contact from */}
//         <div className="max-w-2xl mx-auto">
//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Full name field */}
//             <div>
//               <label htmlFor="" className="block mb-2 text-dark">Your Name</label>
//               <div className="flex items-center gap-4 py-2 pl-4 rounded border border-dark/40">
//                 <FaUser />
//                 <input
//                 className="w-full outline-none placeholder:text-dark/60 placeholder:text-sm"
//                  type="text" 
//                  placeholder="Enter your name" />
//               </div>
//             </div>
//             {/* Email field */}
//              <div>
//               <label htmlFor="" className="block mb-2 text-dark">Your Email</label>
//               <div className="flex items-center gap-4 py-2 pl-4 rounded border border-dark/40">
//                 <FaUser />
//                 <input
//                 className="w-full outline-none placeholder:text-dark/60 placeholder:text-sm"
//                  type="email" 
//                  placeholder="Enter your email" />
//               </div>
//             </div>
//             </div>
//             <div className="mt-6">
//               <label htmlFor="" className="block mb-2 text-dark">Your Message</label>
//               <textarea className="w-full h-40 px-6 py-6 outline-none border border-dark/40 rounded-xl" name="" placeholder="Enter your message" id=""></textarea>
//             </div>
//             <button className='bg-cyan-950 px-6 py-3 rounded-full text-white font-semibold cursor-pointer flex items-center gap-2 mt-6'>
//               Submit
//               <FaArrowRightLong />
//             </button>
//           </form>
          
//         </div>
//       </div>
     
//     </div>
//   );
// };

// export default Contact;















import React, { useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm("service_oqtnkg9", "template_3hg8wic", formRef.current, "vPNkeFntdIlzVChgi")
      .then(() => { setLoading(false); setSuccess(true); formRef.current.reset(); })
      .catch(() => { setLoading(false); });
  };

  return (
    <div id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-dark mb-6">Reach out to us</h1>
          <p className="text-dark/60 max-w-xl mx-auto">Let's talk! Whether its a quick question or a big project, we're just a message away</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-dark">Your Name</label>
                <div className="flex items-center gap-4 py-2 pl-4 rounded border border-dark/40">
                  <FaUser />
                  <input className="w-full outline-none placeholder:text-dark/60 placeholder:text-sm" type="text" name="name" placeholder="Enter your name" required />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-dark">Your Email</label>
                <div className="flex items-center gap-4 py-2 pl-4 rounded border border-dark/40">
                  <FaUser />
                  <input className="w-full outline-none placeholder:text-dark/60 placeholder:text-sm" type="email" name="email" placeholder="Enter your email" required />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label className="block mb-2 text-dark">Your Message</label>
              <textarea className="w-full h-40 px-6 py-6 outline-none border border-dark/40 rounded-xl" name="message" placeholder="Enter your message" required></textarea>
            </div>
            {success && <p className="mt-4 text-green-600 font-semibold">✅ Message sent successfully!</p>}
            <button type="submit" disabled={loading} className="bg-cyan-950 px-6 py-3 rounded-full text-white font-semibold cursor-pointer flex items-center gap-2 mt-6 disabled:opacity-60">
              {loading ? "Sending..." : "Submit"}
              <FaArrowRightLong />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;