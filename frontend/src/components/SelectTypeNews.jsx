import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const URL = "http://localhost:4000";

export default function SelectTypeNews() {
  const location = useLocation();
  const selecttype = location.state;
  const navigate = useNavigate();

  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(URL + "/create_post/select_type", { select: selecttype })
      .then((response) => {
        setData(response.data.data);
      });
  }, []);
  return (
    <>
      <div class="flex flex-col w-auto h-auto m-5 space-y-1 border">
        <div class="flex justify-between bg-blue-900">
          <div class="flex justify-start">
            <h1 class="p-5 font-bold text-[1.2rem] text-white">{selecttype}</h1>
          </div>
        </div>

        <div class="p-2">
          {/* {
            Data.length == 1 ? (<>d</>):0
          } */}

          {Data.length >= 1 ? (
            Data.map((items, index) => (
              <div key={index} class="flex justify-start p-2">
                <div class="flex-1 ">
                  <span class="flex flex-row">
                    <div class="flex flex-row space-x-1">
                      {/* <div>*</div> */}
                      <div class="flex flex-row space-x-2">
                        <button
                          class="hover:underline-offset-3 hover:underline  "
                          onClick={() => {
                            const datasystem = [
                              { id_post: items.id },
                              { useridpost: items.useridpost },
                            ];
                            navigate(`/detail`, { state: datasystem });
                            window.location.reload();
                          }}
                        >
                          <p class="font-medium text-[1rem] text-left">
                            {items.header}
                          </p>
                        </button>
                      </div>
                      {/* <div class="flex space-x-2">
                    <h1 class="text-[0.5rem]">{items.start_time}</h1>
                  </div> */}
                    </div>
                  </span>
                  <div class="pt-5">
                    <hr />
                    <div class="pt-3">
                      {/* <>
                        <div class="flex justify-center">
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
                                  2{" "}
                                  <span class="visually-hidden">(current)</span>
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
                        </div>
                      </> */}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div class="p-2">หมวดนี้ยังไม่มีการประกาศ</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
