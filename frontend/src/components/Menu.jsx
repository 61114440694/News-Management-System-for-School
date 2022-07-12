import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:4000";

export default function Menu() {
  const navigate = useNavigate() 

  const [DataType, setDataType] = useState([]);

  useEffect(() => {
    axios.get(URL + "/type_post/get_type").then((response) => {
      setDataType(response.data.data);
    });
  }, []);

  return (
    <>
      <div>
        <div class="flex flex-row space-x-10 p-8 text-white">
          <div class="flex flex-row space-x-8 text-[1rem] font-medium">
            <div class="flex w-[6rem] justify-start">
              <button class="text-[1rem] font-medium ">
                <a href="/home">หน้าหลัก</a>
              </button>
            </div>
            <div>
              <div>
                <div class="dropdown relative">
                  <button
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    class="text-[1rem] font-medium"
                  >
                    <div class="flex flex-row justify-start w-[6rem] space-x-1">
                      <h1>หมวดหมู่</h1>
                      <div class="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <ul
                    class="dropdown-menu w-auto h-auto bg-white rounded-lg shadow-lg hidden"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div class="min-w-max min-h-max">
                      <div class="flex flex-col">
                        {DataType.map((items, index) => (
                          <>
                            <div key={index}>
                              <button onClick={()=>{
                                 navigate(`/home/${items.value}` , {state:items.value})
                                 window.location.reload()
                                }} class="text-[1rem] text-black font-medium p-4">
                                <a class="hover:underline">{items.value}</a>
                              </button>
                            </div>
                            <hr />
                          </>
                        ))}
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div class="flex justify-start w-[6rem]">
              <button class="text-[1rem] font-medium">ติดต่อเรา</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
