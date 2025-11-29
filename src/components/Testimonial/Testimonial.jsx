import React from "react";
import reviewImage from "../../assets/images/reviewman.png";
const Testimonial = () => {
  return (
    <section>
      <h1 className="text-[#413960] font-bold text-4xl text-center poppins">
        Testimonial
      </h1>
      <div className="mt-[60px] mb-25 max-w-[750px] mx-auto flex items-center justify-between">
        <div className="w-30 h-30">
          <img className="w-full h-full" src={reviewImage} alt="image" />
        </div>
        <div className="max-w-[580px]">
          <p className="text-[#000000] text-base font-normal poppins">
            The courses on this platform are truly amazing. The lessons are
            explained in a simple and clear way, making them easy for learners
            of any level to understand. The learning experience feels smoother
            than ever before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
