import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/02.png";

export default function appbar() {
  const navigate = useNavigate();
  let user = localStorage.getItem("status");
  const checkevent = 0;

  const login = () => {
    navigate("/login");
  };

  const logout = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("status : ");
    localStorage.removeItem("status");
    navigate(`/`);
    window.location.reload();
  };

  const admin_console = () => {
    localStorage.setItem("status : ", "Yes I'm admin");
    navigate(`/serve-ad_min@`);
  };

  const go_to_my_post = () => {
    navigate(`/post_me`);
  };
  return (
    <>
      {checkevent == 0 ? (
        <>
          <div>
            <div class="sm:flex sm:bg-blue-600 sm:p-6 sm:items-center sm:flex-wrap sm:justify-between">
              <div class="flex sm:flex ">
                <a href="/home">
                  <img class="h-10 sm:h-14" src={logo} alt="Logo" />
                </a>
                <a
                  href="/home"
                  class="text-[1rem] mt-1.5 font-bold text-white sm:text-[1.5rem] sm:font-bold sm:text-white"
                >
                  ระบบจัดการข่าวสารในโรงเรียน
                </a>
              </div>
              <div>
                {user === null ? (
                  <button
                    class=" rounded-xl p-2 pl-6 pr-6 border bg-white text-blue-700 hover:bg-transparent hover:text-white ease-out duration-300"
                    onClick={login}
                  >
                    เข้าสู่ระบบ
                  </button>
                ) : user === "admin" ? (
                  <>
                    <div class="w-14 h-14 bg-blue-700 border rounded-full flex justify-center p-2">
                      <button
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        class="text-[1rem] font-medium text-white "
                      >
                        <h1>{user[0] + user[1]}</h1>
                      </button>
                      <div
                        class="dropdown-menu absolute right-[20rem] hidden bg-white rounded-lg shadow-2xl mt-5"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <ul>
                          <div class="min-w-max min-h-max">
                            <div class="flex flex-col">
                              

                              <div class="p-5">
                                <button
                                  onClick={admin_console}
                                  class="text-left text-sm font-normal block w-full whitespace-nowrap text-gray-700"
                                >
                                  <h1>เมนูผู้ดูแลระบบ</h1>
                                </button>
                              </div>                              
                              <hr />
                              <div class="p-5">
                                <button
                                  onClick={logout}
                                  class="text-left text-sm font-normal block w-full whitespace-nowrap text-gray-700 "
                                >
                                  <h1>ออกจากระบบ</h1>
                                </button>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : user === "ครู" ? (
                  <>
                    <div class="w-14 h-14 bg-white rounded-full flex justify-center p-2">
                      <button
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        class="text-[1rem] font-medium"
                      >
                        {localStorage.getItem("data")[0] +
                          localStorage.getItem("data")[1]}
                      </button>
                      <div
                        class="dropdown-menu absolute right-[20rem] hidden bg-white rounded-lg shadow-2xl mt-5"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <ul>
                          <div class="min-w-max min-h-max">
                            <div class="flex flex-col">
                              <div class="p-5">
                                <button
                                  onClick={go_to_my_post}
                                  class="text-left text-sm font-normal block w-full whitespace-nowrap text-gray-700"
                                >
                                  <h1>โพสต์ของฉัน</h1>
                                </button>
                              </div>
                              <hr />
                              <div class="p-5">
                                <button
                                  onClick={logout}
                                  class="text-left text-sm font-normal block w-full whitespace-nowrap text-gray-700 "
                                >
                                  <h1>ออกจากระบบ</h1>
                                </button>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <div class="w-14 h-14 bg-white rounded-full flex justify-center p-2">
                    <button
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      class="text-[1rem] font-medium"
                    >
                      {localStorage.getItem("data")[0] +
                        localStorage.getItem("data")[1]}
                    </button>
                    <div
                      class="dropdown-menu absolute right-[20rem] hidden bg-white rounded-lg shadow-2xl mt-5"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <ul>
                        <div class="min-w-max min-h-max">
                          <div class="flex flex-col">
                            <div class="p-5">
                              <button
                                onClick={logout}
                                class="text-left text-sm font-normal block w-full whitespace-nowrap text-gray-700"
                              >
                                <h1>ออกจากระบบ</h1>
                              </button>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : checkevent == 1 ? (
        <></>
      ) : (
        0
      )}
    </>
  );
}
