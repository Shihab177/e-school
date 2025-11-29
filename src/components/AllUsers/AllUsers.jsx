import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { User } from "lucide-react";
import API from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";
const AllUsers = () => {
  const CouponsTableHeadingData = [
    { id: 1, title: "Name", className: "min-w-[628px] max-w-[628px]" },
    { id: 2, title: "Email", className: "min-w-[664px] max-w-[668px]" },
    { id: 3, title: "Role", className: "min-w-[125px] max-w-[125px]" },
    { id: 7, title: "Status", className: "min-w-[100px] max-w-[100px]" },
    { id: 8, title: "Actions", className: "min-w-[70px] max-w-[70px]" },
  ];
     const { data: userss = [], isLoading, isError } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await API.get("/users");
      return res.data.data;
    },
  });
  if(isLoading){
    return <p className="text-2xl text-center">loading.....</p>
  }
  return (
    <div className="w-full">
      <h1 className="text-center text-2xl mb-6 font-semibold flex items-center justify-center gap-2">
        <User className="w-6 h-6" />
        All Users
      </h1>

      <div className="overflow-auto w-full h-[calc(100%-56px)] ">
        <div className="min-w-[1587px]">
          <div className="flex flex-row z-20 items-center rounded-t-md sticky top-0 bg-[#E2E8F0] dark:bg-slate-900">
            {CouponsTableHeadingData.map((item) => (
              <div
                key={item.id}
                className={`font-semibold p-2.5 text-[#1D293C] dark:text-[#BDC2D0] ${item.className}`}
              >
                {item.title}
              </div>
            ))}
          </div>

          {isLoading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : (
            userss.map((user) => (
              <div
                key={user._id}
                className="text-sm font-medium dark:text-gray-300 text-gray-800 flex flex-row items-center dark:bg-[#27334C] hover:bg-[#F1F5F9] dark:hover:bg-[#323E58] border-b border-[#E2E8F0] dark:border-[#394765]"
              >
                <div className="px-2.5 py-2 font-medium min-w-[628px] max-w-[628px]">
                  {user.name}
                </div>
                <div className="px-2.5 py-2 min-w-[664px] max-w-[664px]">
                  {user.email}
                </div>
                <div className="px-2.5 py-2 min-w-[125px] max-w-[125px]">
                  {user.role}
                </div>
                <div className="px-2.5 py-2 min-w-[100px] max-w-[100px]">
                  {user.status}
                </div>
                <div className="py-2 px-2.5 text-right min-w-[70px] max-w-[70px] flex items-center justify-between">
                  <FaRegEdit size={20} className="cursor-pointer" />
                  <RiDeleteBin7Line
                    className="text-red-500 dark:text-red-400 cursor-pointer"
                    size={20}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
