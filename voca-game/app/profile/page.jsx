"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const ProfilePage = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false); // Step 1
  function handleChange(event) {
    setIsChecked(!isChecked); // Step 3: Toggle the checkbox state
    if (!isChecked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function logOut(e) {
    router.push("/login");
  }
  return (
    <>
      {/* Global Container Profile Page */}
      <div className="">
        {/* header section */}
        <section id="header">
          {/* Toggle */}
          <div className="py-3 bg-white">
            <div className="flex space-x-1 justify-end items-center mr-3">
              <p className="text9 dark:text-[#4C4C4C]">Blue</p>
              <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  checked={isChecked}
                  onChange={handleChange}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
              <p className="text10 dark:text-[#D38122]">Orange</p>
            </div>
          </div>
          {/* logo and Profile */}
          <div className="bg-[#131167] dark:bg-[#D38122]">
            {/* first */}
            <div className="flex justify-between items-center p-6 md:p-0 md:mx-24">
              <div className="flex justify-center items-center w-[67px] h-[62px] rounded-full text-center text-black bg-[#D9D9D9]">
                Logo
              </div>
              <img src="profile-circle.svg" alt="" />
            </div>
            {/* border */}
            <div className="border-t-2 border-[#DFDFE0] pb-6"></div>
          </div>
        </section>
        {/* Main Section */}
        <section id="main">
          {/* Top */}
          <div className="flex flex-col space-y-3 justify-center items-center bg-[#131167] py-6 mt-6 rounded-none p-6 dark:bg-[#D38122] md:mx-24 md:rounded-lg">
            <div className="text1 font-rob">LOREM</div>
            <div className="text2 font-rob max-w-sm font-light">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..." "There is no one who loves pain
              itself, who seeks after it and wants to have it, simply because it
              is pain..."
            </div>
          </div>
          {/* Profile */}
          <div className="flex flex-col space-y-3 justify-center items-center mb-12 p-6 md:flex-row md:justify-between md:mx-24 md:p-0 md:space-y-0">
            <div className="flex space-x-3 items-center justify-center">
              <img src="profile-circle.svg" alt="" />
              <div className="text14">Noname</div>
            </div>
            <button className="w-full rounded-l-full rounded-r-full bg-[#E3E6FD] px-6 py-3 text-[#321AC7] transition duration-200 hover:-translate-y-1 dark:bg-[#FDF3E3] dark:text-[#D38122] md:w-auto">
              ✏ Edit Profile
            </button>
          </div>
          {/* Profile main */}
          <div className="flex flex-col p-6 md:mx-24 md:flex-row md:p-0 md:space-x-3">
            <div className="w-full flex flex-row justify-between border-r-2 border-[#0C0507] border-opacity-50 pr-6 mb-6 md:w-1/5 md:flex-col md:mb-0">
              <div className="flex space-x-3 items-center">
                <img src="profile-circle-mini.svg" alt="" />
                <p className="text15">Profile</p>
              </div>
              <div
                className="flex space-x-3 items-center md:hidden cursor-pointer"
                onClick={logOut}
              >
                <img src="logout.svg" alt="" />
                <p className="text17">Logout</p>
              </div>
              <div className="mt-[41rem] hidden md:block">
                <div className="pb-6">
                  <div className="border-t-2 border-[#DFDFE0] mt-6"></div>
                </div>
                <div
                  className="flex space-x-3 items-center cursor-pointer"
                  onClick={logOut}
                >
                  <img src="logout.svg" alt="" />
                  <p className="text17">Logout</p>
                </div>
              </div>
            </div>
            <div className="w-full shadow-lg rounded-lg p-6 md:w-4/5">
              <p className="text16">🖊 Edit Profile</p>
              <div className="border-t-2 border-[#DFDFE0] my-6"></div>
              {/* Nama */}
              <div>
                <p className=" text-black font-rob font-semibold md:self-start mt-6 mb-3">
                  Nama
                </p>
                <input
                  type="text"
                  className="cursor-pointer py-3 px-5 w-full rounded-l-full rounded-r-full bg-white text-black border-2 border-gray-400 shadow-sm placeholder: outline-none"
                />
              </div>
              {/* Nomor Handphone */}
              <div>
                <p className=" text-black font-rob font-semibold md:self-start mt-6 mb-3">
                  No Handphone
                </p>
                <input
                  type="text"
                  className="cursor-pointer py-3 px-5 w-full rounded-l-full rounded-r-full bg-white text-black border-2 border-gray-400 shadow-sm placeholder: outline-none"
                />
              </div>
              {/* Password Lama */}
              <div>
                <p className=" text-black font-rob font-semibold md:self-start mt-6 mb-3">
                  Password Lama
                </p>
                <input
                  type="text"
                  className="cursor-pointer py-3 px-5 w-full rounded-l-full rounded-r-full bg-white text-black border-2 border-gray-400 shadow-sm placeholder: outline-none"
                />
              </div>
              {/* Password Baru */}
              <div>
                <p className=" text-black font-rob font-semibold md:self-start mt-6 mb-3">
                  Password Baru
                </p>
                <input
                  type="text"
                  className="cursor-pointer py-3 px-5 w-full rounded-l-full rounded-r-full bg-white text-black border-2 border-gray-400 shadow-sm placeholder: outline-none"
                />
              </div>
              {/* Edit Button */}
              <button className="w-full mt-6 rounded-l-full rounded-r-full bg-[#E3E6FD] px-6 py-3 text-[#321AC7] transition duration-200 hover:-translate-y-1 dark:bg-[#FDF3E3] dark:text-[#D38122] md:w-auto">
                Edit Profile →
              </button>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section id="footer">
          <div className="bg-[#131167] dark:bg-[#D38122]">
            {/* first */}
            <div className="flex justify-center items-center mx-24 py-6 mt-6 md:justify-between">
              <div className="flex justify-center items-center w-[198.839px] h-[184px] rounded-full text-center text-black font-bold font-rob text-2xl bg-[#D9D9D9]">
                Logo
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
