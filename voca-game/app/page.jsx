"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false); // Step 1
  function handleChange(event) {
    setIsChecked(!isChecked); // Step 3: Toggle the checkbox state
    if (!isChecked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <>
      {/* Global Container Login Page */}
      <div className="flex flex-row xs:hidden justify-between bgLogin h-screen relative dark:bg-[#d38122]">
        <div className="w-[255px] h-[255px] bg-hero rounded-r-full absolute top-0 left-0 hidden md:block"></div>
        <img
          src="Shape-1.svg"
          alt=""
          className="w-[586.872px] h-[386.456px] absolute bottom-[0px] left-[40%] overflow-y-hidden hidden md:block"
        />
        {/* hero section */}
        <section id="hero" className="md:w-3/5 p-6 hidden md:block">
          <div className="flex flex-col justify-center items-center">
            <div className="w-2/5 bg-slate-500 p-12 py-36 mt-12 text-center text-3xl font-bold font-rob">
              IMAGE
            </div>
            <div className="text1 font-rob mt-36">LOREM</div>
            <div className="text2 font-rob max-w-sm font-light">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..." "There is no one who loves pain
              itself, who seeks after it and wants to have it, simply because it
              is pain..."
            </div>
            <img src="slider.svg" alt="" />
          </div>
        </section>

        {/* login section */}
        <section id="login" className="w-full md:w-[32%] bg-slate-200 p-12">
          {/* toggle */}
          <div className="flex space-x-1 justify-end items-center mb-6">
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

          {/* <!-- Dark/Light Mode Button --> */}

          <div className="flex flex-col justify-center items-center">
            <p className="text3 text-center font-rob text-[45px] dark:text-[#d38122] md:self-start md:text-[64px]">
              Silahkan LogIn
            </p>
            <p className="text4 text-center font-rob md:self-start mt-3">
              Masukkan Username dan password anda untuk masuk
            </p>
            {/* username field */}
            <p className="text5 font-rob self-start md:self-start mt-6">
              Username
            </p>
            <input
              type="text"
              className="py-3 px-5 w-full rounded-l-full rounded-r-full border1 placeholder: outline-none"
              placeholder="Username anda..."
            />

            {/* password field */}
            <p className="text5 self-start font-rob md:self-start mt-6">
              Password
            </p>
            <div className="w-full relative">
              <input
                type="text"
                className="py-3 px-5 w-full rounded-l-full rounded-r-full border1 placeholder: outline-none"
                placeholder="Password anda..."
              />
              <img
                src="mata.svg"
                alt=""
                className="absolute right-[23px] bottom-[9px]"
              />
            </div>

            {/* Submit button */}
            <button className="w-full px-5 py-3 rounded-l-full rounded-r-full bgBTN dark:bg-[#D38122] dark:bg-opacity-30 dark:text-[#D38122] shadow-md mt-6 border-1 border-black border-opacity-0 text6 hover:border-opacity-100 hover:bg-white">
              Masuk Sekarang
            </button>

            {/* Register */}
            <div className="flex flex-col space-y-3 items-center justify-center mt-6 md:flex-row md:space-x-1 md:space-y-0">
              <p className="text7">Belum punya akun?</p>
              <a href="#" className="text8 dark:text-[#D38122]">
                Daftar Sekarang
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Global Container Register Page */}
      <div className="">
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
        <div className="relative flex flex-col items-center h-screen justify-center bgLogin dark:bg-[#d38122]">
          <div className="absolute top-[3.3rem] left-0 w-1/5 hidden md:block bg-slate-500 p-12 ml-12 text-center text-3xl font-bold font-rob">
            IMAGE
          </div>
          <div className="w-[255px] h-[255px] bg-hero rounded-r-full absolute top-[3.3rem] left-0 hidden md:block"></div>
          <img
            src="Shape-1.svg"
            alt=""
            className="w-[754.965px] h-[360.591px] absolute bottom-[0px] right-0 overflow-hidden hidden md:block"
          />
          {/* Register Section */}
          <div className="flex flex-col justify-center items-center md:mt-3 p-6 md:p-0">
            <p className="text11 text-[40px] font-rob text-center md:self-start md:text-[64px]">
              Daftarkan Akun
            </p>
            <p className="text12 font-rob md:self-start mt-3 text-center">
              Daftar Akun anda dengan mengisi form di bawah
            </p>
            {/* username field */}
            <p className="text13 self-start font-rob md:self-start mt-6">
              Nama Anda
            </p>
            <input
              type="text"
              className="cursor-pointer py-3 px-5 w-full rounded-l-full rounded-r-full bg-[#131167] border2 text-white placeholder:outline-none dark:bg-[#d38122]"
              placeholder="Ketik nama anda disini..."
            />

            {/* Nomor Handphone */}
            <p className="text13 self-start font-rob md:self-start mt-6">
              Nomor Handphone
            </p>
            <input
              type="text"
              className="cursor-pointer py-3 px-5 w-full rounded-l-full rounded-r-full border2 bg-[#131167] text-white placeholder: outline-none dark:bg-[#d38122]"
              placeholder="Nomor handphone anda"
            />

            {/* password field */}
            <p className="text13 self-start font-rob md:self-start mt-6">
              Password
            </p>
            <div className="w-full relative">
              <input
                type="text"
                className="cursor-pointer py-3 px-5 w-full rounded-l-full rounded-r-full border2 bg-[#131167] text-white placeholder: outline-none dark:bg-[#d38122]"
                placeholder="Masukkan password anda"
              />

              <button className="flex items-center justify-center absolute right-[14px] bottom-[7px] bg-slate-400 w-[60px] md:w-[80px] h-[35px] rounded-l-full rounded-r-full">
                <img src="mata2.svg" alt="" className="z-10" />
              </button>
            </div>

            {/* konfirmasi password field */}
            <p className="text13 self-start font-rob md:self-start mt-6">
              Konfirmasi Password
            </p>
            <div className="w-full relative">
              <input
                type="text"
                className="cursor-pointer py-3 px-5 w-full rounded-l-full rounded-r-full border2 bg-[#131167] text-white placeholder: outline-none dark:bg-[#d38122]"
                placeholder="Masukkan kembali password anda"
              />

              <button className="flex items-center justify-center absolute right-[14px] bottom-[7px] bg-slate-400 w-[60px] md:w-[80px] h-[35px] rounded-l-full rounded-r-full">
                <img src="mata2.svg" alt="" className="" />
              </button>
            </div>

            {/* Submit button */}
            <button className="w-full px-5 py-3 rounded-l-full rounded-r-full bgBTN dark:bg-opacity-30 shadow-md mt-6 border-1 border-black border-opacity-0 text6 hover:border-opacity-100 hover:bg-white">
              Daftar Sekarang
            </button>

            {/* Register */}
            <div className="flex flex-col space-y-3 items-center justify-center mt-6 md:flex-row md:space-x-1 md:space-y-0">
              <p className="text13">Sudah punya akun?</p>
              <a href="#" className="text13">
                Login Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Global Container Profile Page */}
      <div className="hidden">
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
              <div className="flex space-x-3 items-center md:hidden">
                <img src="logout.svg" alt="" />
                <p className="text17">Logout</p>
              </div>
              <div className="mt-[41rem] hidden md:block">
                <div className="pb-6">
                  <div className="border-t-2 border-[#DFDFE0] mt-6"></div>
                </div>
                <div className="flex space-x-3 items-center">
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
}
