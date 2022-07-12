import { useState, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/02.png";

import axios from "axios";
const URL = "http://localhost:4000";

export default function Login() {
  useEffect(()=>{
    if(localStorage.getItem("data") && localStorage.getItem("status")){
      navigate(`/home`)
    }
  })
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const updateUser = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const Checkmember = () => {
    const dataMember = {
      email: Email,
      password: Password,
    };
    axios.post(URL + "/member/login", dataMember).then((response) => {
      console.log(response.data.data);
      if (response.data.data.length != 0) {
        localStorage.setItem("data",Email);
        localStorage.setItem("status",response.data.data[0].status);
        navigate(`/home`);
      }else{
        alert("ไม่มีบัญชีผู้ใช้นี้ กรุณากรอกข้อมูลอีกครั้ง")
      }
    });
  };

  const CheckAdmin = () => {
    localStorage.setItem("data", "admin");
    localStorage.setItem("status", "admin");
        navigate(`/home`);
  };

  const checklogin = () => {
    if (Email == "admin" && Password == `asdfghjkl;'`) {
      CheckAdmin();
    } else {
      Checkmember();
    }
  };

  const back = () => {
    navigate(`/`);
    window.location.reload();
  };

  return (
    <div class="h-screen">
      <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            checklogin();
          }
        }}
      >
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-28" src={logo} alt="Workflow" />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login to your account
            </h2>
          </div>
          {/* <form onSubmit={checklogin} class="mt-8 space-y-6"> */}
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={updateUser}
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={updatePassword}
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <div></div>
          </div>

          <div>
            <button
              type="submit"
              onClick={checklogin}
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              เข้าสู่ระบบ
            </button>
          </div>
          <hr />
          <div class="flex justify-center">
            <button
              onClick={back}
              class="w-full bg-sky-500 rounded-lg p-2 text-white hover:bg-sky-700"
            >
              <h1>กลับหน้าหลัก</h1>
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
