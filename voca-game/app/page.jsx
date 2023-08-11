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
      <div className="flex flex-row justify-between w-screen h-screen bgLogin relative dark:bg-[#d38122]">
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
            <p className="text3 font-rob dark:text-[#d38122] md:self-start">
              Silahkan LogIn
            </p>
            <p className="text4 font-rob md:self-start mt-3">
              Masukkan Username dan password anda untuk masuk
            </p>
            {/* username field */}
            <p className="text5 font-rob md:self-start mt-6">Username</p>
            <input
              type="text"
              className="py-3 px-5 w-full rounded-l-full rounded-r-full border1 placeholder: outline-none"
              placeholder="Username anda..."
            />

            {/* password field */}
            <p className="text5 font-rob md:self-start mt-6">Password</p>
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
    </>
  );
}