import React from "react";
import course1 from "../../assets/images/course1.png";
import course2 from "../../assets/images/course2.png";
import course3 from "../../assets/images/course3.png";
import { CalendarMinus2, Users } from "lucide-react";
const OnlineCourses = () => {
 const courses = [
  {
    id: 1,
    title: "Modern Psychology",
    designation: "Beginner Level",
    img: course1,
    date: "Start 12 March, 2025",
    seats: "45 seats",
  },
  {
    id: 2,
    title: "Advanced Literature",
    designation: "Intermediate Level",
    img: course2,
    date: "Start 5 April, 2025",
    seats: "30 seats",
  },
  {
    id: 3,
    title: "Creative Writing",
    designation: "Professional Level",
    img: course3,
    date: "Start 18 May, 2025",
    seats: "50 seats",
  },
];
  return (
    <div className="">
      <h2 className="text-[#413960] font-bold text-4xl text-center">
        Online Courses
      </h2>
      <div className="grid grid-cols-3 gap-x-7 max-w-7xl mx-auto mt-14 mb-22">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#FFFFFF] rounded-[16px] shadow-2xl px-5 pt-6 pb-8 hover:scale-105 transition-transform duration-500"
          >
            <img
              src={course.img}
              alt="course"
              className="rounded-[16px] h-48 w-full object-cover"
            />

            <h3 className="text-[#413960] font-medium text-2xl  mt-5">
              {course.title}
            </h3>
            <p className="text-[#585859] text-base font-normal">
              {course.designation}
            </p>

            <button className="mt-5 mb-8 bg-[#21B573] text-white text-base font-normal py-2 px-7 rounded-3xl hover:bg-[#1A955C] transition-colors duration-200">
              Buy Course
            </button>

            <div className="flex justify-between text-base font-medium text-[#585859]">
              <div className="flex items-center gap-2">
                <CalendarMinus2 />
                <p className=" "> {course.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <Users />
                <p className=""> {course.seats}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineCourses;
