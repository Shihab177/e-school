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
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
