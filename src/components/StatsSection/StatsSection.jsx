import React from "react";
import topicImg from "../../assets/images/topic.png";
import studentImg from "../../assets/images/student.png";
import tokenImg from "../../assets/images/token.png";
import bookImg from "../../assets/images/books.png";
const StatsSection = () => {
  const stats = [
    {
      image: topicImg,
      value: "1500+ Topic",
      label: "Learn Anythings",
    },
    {
      image: studentImg,
      value: "1800+ Students",
      label: "Learn Anythings",
    },
    {
      image: tokenImg,
      value: "9K+ Test Token",
      label: "Learn Anythings",
    },
    {
      image: bookImg,
      value: "2000+ Student",
      label: "Learn Anythings",
    },
  ];
  return (
    <section className="pt-[42px] pb-[105px] max-w-7xl mx-auto poppins">
      <div className="grid grid-cols-4 gap-x-7">
        {stats.map((sta, index) => (
          <div
            key={index}
            className="bg-[#F8FFFB] hover:bg-[#FFFFFF] hover:shadow-2xl  text-center pb-12 pt-13 rounded-[16px] shadow-sm"
          >
            <img
              className="w-[66px] h-[85px] mx-auto"
              src={sta.image}
              alt="image"
            />
            <h5 className="text-[#413960] font-medium text-2xl mt-[22px]">
              {sta.value}
            </h5>
            <p className="text-base font-normal text-[#585859]">{sta.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
