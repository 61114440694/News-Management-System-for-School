import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/02.png";

export default function appbar(props) {
  const navigate = useNavigate();
  
  const checkevent = 1

  const login = () => {
    navigate("/login");
  };
  return (
    <>
      {checkevent != 0 ? (
        <div class="sm:flex sm:bg-blue-600 sm:p-6 sm:items-center sm:flex-wrap sm:justify-between">
          <div class="flex sm:flex ">
            <a href="/home">
              <img class="h-10 sm:h-14" src={logo} alt="Logo" />
            </a>
            <a
              href="/home"
              class="text-[1rem] mt-1.5 font-bold text-white sm:text-[1.5rem] sm:font-bold sm:text-white"
            >
              Ngan-Ngok
            </a>
          </div>

          <div class="sm:block sm:items-center sm:text-1xl sm:font-extrabold sm:space-x-8 sm:text-white sm:justify-center  hidden">
            <a href="home">หน้าหลัก</a>
            <a href="#">ข่าวประชาสัมพันธ์</a>
            <a href="#">ติดต่อเรา</a>
          </div>

          <div>
            <button
              class=" rounded-xl p-2 pl-6 pr-6 border bg-white text-blue-700 hover:bg-transparent hover:text-white"
              onClick={login}
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
          <nav class="flex items-center w-auto justify-between flex-wrap bg-blue-600 sm:w-auto sm:items-center sm:justify-between sm:flex-wrap sm:p-6 ">
        <div class="flex justify-start sm:flex ">
          <a href="/home">
            <img class="h-10  sm:h-14" src={logo} alt="Logo" />
          </a>
          <a
            href="/home"
            class="text-[1rem] mt-1.5 font-bold text-white sm:text-3xl sm:font-bold sm:text-white"
          >
            Ngan-Ngok
          </a>
        </div>

        <div class="hidden sm:block sm:items-center sm:text-1xl sm:font-extrabold sm:space-x-12 sm:text-white">
          <a href="home">หน้าหลัก</a>
          <a href="#">ข่าวประชาสัมพันธ์</a>
          <a href="#">ติดต่อเรา</a>
        </div>
        <div class="flex justify-end  sm:hidden">
          <a>
            <svg
              class="w-6 h-6 text-white p-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </a>
        </div>

        <div class="flex items-center space-x-4">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class=" hidden sm:block sm:w-6 sm:h-6 sm:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="hidden sm:block sm:w-7 sm:h-6 sm:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>

          <div class="flex justify-center">
            <div>
              <div class="dropdown relative">
                <button
                  aria-haspopup="true"
                  class="hidden sm:block sm:p-2 sm:rounded-full sm:bg-blue-50 "
                  type="button"
                  id="dropdownMenuButton1d"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class=" sm:w-6 sm:h-6 sm:text-gray-200 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
                <ul
                  aria-labelledby="dropdownMenuButton1d"
                  class=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 px-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                >
                  <li>
                    <a
                      href="#"
                      class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      <h1>โปรไฟล์</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      <h1>ตารางเรียน</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      <h1>ข้อความ</h1>
                    </a>
                  </li>
                  <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                  <li>
                    <a
                      href="/"
                      class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      <h1>ออกจากระบบ</h1>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
          </div>
        </>
      )}
      {/* <nav class="flex items-center w-auto justify-between flex-wrap bg-blue-600 sm:w-auto sm:items-center sm:justify-between sm:flex-wrap sm:p-6 ">
        <div class="flex justify-start sm:flex ">
          <a href="/home">
            <img class="h-10  sm:h-14" src={logo} alt="Logo" />
          </a>
          <a
            href="/home"
            class="text-[1rem] mt-1.5 font-bold text-white sm:text-3xl sm:font-bold sm:text-white"
          >
            Ngan-Ngok
          </a>
        </div>

        <div class="hidden sm:block sm:items-center sm:text-1xl sm:font-extrabold sm:space-x-12 sm:text-white">
          <a href="home">หน้าหลัก</a>
          <a href="#">ข่าวประชาสัมพันธ์</a>
          <a href="#">ติดต่อเรา</a>
        </div>
        <div class="flex justify-end  sm:hidden">
          <a>
            <svg
              class="w-6 h-6 text-white p-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </a>
        </div>

        <div class="flex items-center space-x-4">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class=" hidden sm:block sm:w-6 sm:h-6 sm:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="hidden sm:block sm:w-7 sm:h-6 sm:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>

          <div class="flex justify-center">
            <div>
              <div class="dropdown relative">
                <button
                  aria-haspopup="true"
                  class="hidden sm:block sm:p-2 sm:rounded-full sm:bg-blue-50 "
                  type="button"
                  id="dropdownMenuButton1d"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class=" sm:w-6 sm:h-6 sm:text-gray-200 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
                <ul
                  aria-labelledby="dropdownMenuButton1d"
                  class=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 px-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                >
                  <li>
                    <a
                      href="#"
                      class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      <h1>โปรไฟล์</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      <h1>ตารางเรียน</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      <h1>ข้อความ</h1>
                    </a>
                  </li>
                  <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                  <li>
                    <a
                      href="/"
                      class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      <h1>ออกจากระบบ</h1>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
}
