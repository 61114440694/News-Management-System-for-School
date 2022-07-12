import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:4000";

export default function News_New() {
  const [Data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(URL + "/create_post").then((response) => {
      setData(response.data.data);
    });
  }, []);
  return (
    <div class="flex flex-col w-auto h-auto m-5 space-y-1 border">
      <div class="flex justify-between bg-blue-900">
        <div class="flex justify-start">
          <h1 class="p-5 font-bold text-[1.2rem] text-white">
            งานประชาสัมพันธ์
          </h1>
        </div>
      </div>

      <div class="p-2">
        {Data.length != 0 ? (
          Data.map((items, index) => (
            <div key={index} class="flex justify-start p-2">
              <div class="flex-1 ">
                <span class="flex flex-row">
                  <div class="flex flex-row space-x-1">
                    {/* <div>*</div> */}
                    <div class="flex flex-row space-x-2">
                      <button
                        class="hover:underline-offset-3 hover:underline "
                        onClick={() => {
                          const datasystem = [
                            { id_post: items.id },
                            { useridpost: items.useridpost },
                          ];
                          navigate(`/detail`, { state: datasystem });
                        }}
                      >
                        <p class="font-medium text-[1rem] text-left">
                          {items.header}
                        </p>
                      </button>
                    </div>
                  </div>
                </span>
                <div class="pt-5">
                  <hr />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>ไม่มีข้อมูล</div>
        )}
        <>
          {/* <PaginatedItems itemsPerPage={10} DataNews={itemss} /> */}

          {/* <div class="flex justify-center">
            <nav aria-label="Page navigation example">
              <ul class="flex list-style-none">
                <li class="page-item disabled">
                  <a
                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-500 pointer-events-none focus:shadow-none"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li class="page-item active">
                  <a
                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                    href="#"
                  >
                    2 <span class="visually-hidden">(current)</span>
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href="#"
                  >
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href="#"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
        </>
      </div>
    </div>
  );
}
