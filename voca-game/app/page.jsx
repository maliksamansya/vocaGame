"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false); // Step 1
  function handleChange(event) {
    setIsChecked(!isChecked); // Step 3: Toggle the checkbox state
    if (!isChecked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(registerUser(formData));
    router.push("/login");
  }
  return (
    <>
      {/* Global Container Register Page */}
      <div className="">
        <p>branch1 update lagi</p>
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
            <form action="" onSubmit={handleSubmit} className="w-full">
              {/* username field */}
              <p className="text13 self-start font-rob md:self-start mt-6">
                Username
              </p>
              {/* <><</></></> */}
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="cursor-pointer py-3 px-5 w-full rounded-l-full rounded-r-full bg-[#131167] border2 text-white placeholder:outline-none dark:bg-[#d38122]"
                placeholder="Ketik username anda disini..."
              />

              {/* Nomor Handphone */}
              <p className="text13 self-start font-rob md:self-start mt-6">
                Nomor Handphone
              </p>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
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
              <button
                type="submit"
                className="w-full px-5 py-3 rounded-l-full rounded-r-full bgBTN dark:bg-opacity-30 shadow-md mt-6 border-1 border-black border-opacity-0 text6 hover:border-opacity-100 hover:bg-white"
              >
                Daftar Sekarang
              </button>
            </form>

            {/* Login */}
            <div className="flex flex-col space-y-3 items-center justify-center mt-6 md:flex-row md:space-x-1 md:space-y-0">
              <p className="text13">Sudah punya akun?</p>
              <Link href="/login" className="text13">
                Login Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
