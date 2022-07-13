import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:4000";

export default function PostMeDetail() {
  const [Postme, setPostme] = useState([]);

  const navigate = useNavigate();
  const usercheck = localStorage.getItem("data");

  useEffect(() => {
    if (localStorage.getItem("status") == "admin" || "ครู") {
    }
    if (localStorage.getItem("status") == "นักเรียน") {
      navigate(`/Error`);
    }
    if (!localStorage.getItem("status")) {
    }
    axios
      .post(URL + "/create_post/edit", { data: usercheck })
      .then((response) => {
        console.log(response.data.data);
        setPostme(response.data.data);
      });
  }, []);

  return (
    <>
      <div>
        <div>
          <div class="bg-blue-900 p-5 w-full">
            <h1 class="font-bold text-[1.2rem] text-white">โพสต์ของฉัน</h1>
          </div>
          <div class="border">
            <div class="pl-5 pr-5">
              {Postme.length > 0 ? (
                <>
                  {Postme.map((items, index) => (
                    <>
                      <table key={index} class="w-full p-6">
                        <tr>
                          <td class=" p-3">
                            <p class="font-medium text-xl truncate w-[30rem]">
                              {items.header}
                            </p>
                          </td>
                          <td class="flex p-3 space-x-2 justify-end">
                            <button
                              onClick={() => {
                                navigate(`/edit`, { state: items.id });
                              }}
                              class=" p-3 rounded-lg font-medium  hover:bg-orange-400 hover:transition hover:text-white delay-50 duration-50 "
                            >
                              แก้ไข
                            </button>
                            <button
                            onClick={() => {
                              axios
                                .post(URL + "/create_post/remove_post", {
                                  data: items.id,
                                })
                                .then((res) => {});
                              window.location.reload();
                            }}
                            class="bg-red-500 p-3 rounded-lg font-medium hover:bg-red-600  hover:transition hover:text-white delay-50 duration-50">
                              ลบ
                            </button>
                          </td>
                        </tr>
                      </table>
                    </>
                  ))}
                </>
              ) : (
                <>
                  <div class="p-5 flex"><h1 class="font-medium text-xl">คุณยังไม่ได้โพสต์ข่าว</h1></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
