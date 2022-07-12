import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import RDColor from "randomcolor";

import axios from "axios";
const URL = "http://localhost:4000";

// function createType(TypeName, Color) {
//   return { TypeName, Color };
// }

export default function Admin() {
  const navigate = useNavigate();
  const Header = [
    {
      title: "No.",
    },
    {
      title: "Fullname",
    },
    {
      title: "Email",
    },
    {
      title: "Password",
    },
    {
      title: "Status",
    },
    {
      title: "Position",
    },
    {
      title: "Remove",
    },
  ];

  const [DataStudents, setDataStudents] = useState([]);
  const [DataTeachers, setDataTeachers] = useState([]);
  const [DataType, setDataType] = useState([]);
  const [DataPost, setDataPost] = useState([]);
  const [Types, setTypes] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("status : ") != "Yes I'm admin") {
      navigate(`/Error`);
    }

    axios.get(URL + "/member/teachers").then((response) => {
      console.log(response.data.data);
      setDataTeachers(response.data.data);
    });
    axios.get(URL + "/member/students").then((response) => {
      console.log(response.data.data);
      setDataStudents(response.data.data);
    });
    axios.get(URL + "/create_post").then((response) => {
      console.log(response.data.data);
      setDataPost(response.data.data);
    });

    axios.get(URL + "/type_post/get_type").then((response) => {
      console.log(response.data.data);
      setDataType(response.data.data);
    });
    if (localStorage.getItem("page")) {
      setLink(localStorage.getItem("page"));
    }
    if (localStorage.getItem("pages")) {
      setLinks(localStorage.getItem("pages"));
    }
  }, []);

  const convertjson = (data) => {
    const list = [];
    data.map((items) => {
      let password = generatePassword();
      list.push({
        fullname: items[0],
        email: items[1],
        password: password,
        status: items[2],
        position: items[3],
      });
    });
    const dataMember = {
      data: list,
    };
    axios.post(URL + "/member/addmember", dataMember).then((res) => {});
  };

  const generatePassword = () => {
    var lengthcharBig = 1,
      lengthcharSmall = 3,
      lengthcharNumber = 4,
      charBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      charSmall = "abcdefghijklmnopqrstuvwxyz",
      charNumber = "0123456789",
      bigchar = "",
      smallchar = "",
      numberchar = "";

    for (var i = 0, n = charBig.length; i < lengthcharBig; ++i) {
      bigchar += charBig.charAt(Math.floor(Math.random() * n));
    }
    for (var i = 0, n = charSmall.length; i < lengthcharSmall; ++i) {
      smallchar += charSmall.charAt(Math.floor(Math.random() * n));
    }
    for (var i = 0, n = charNumber.length; i < lengthcharNumber; ++i) {
      numberchar += charNumber.charAt(Math.floor(Math.random() * n));
    }

    const randomPassword = bigchar + smallchar + numberchar;
    return randomPassword;
  };

  const onChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      console.log(wsname);
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      data.splice(0, 1);
      convertjson(data);
    };
    reader.readAsBinaryString(file);
    window.location.reload();
  };

  const logout = () => {
    localStorage.removeItem("page");
    localStorage.removeItem("pages");
    localStorage.removeItem("status :");
    navigate(`/home`);
  };

  const SetTypePost = (e) => {
    setTypes(e.target.value);
  };

  const AddTypePost = () => {
    if (!Types) {
      alert("โปรดกรอกข้อมูล");
      setTypes(null);
    }
    if (Types) {
      alert("เพิ่มข้อมูลสำเร็จ");
      const dataType = {
        value: Types,
        label: Types,
      };
      axios.post(URL + "/type_post/add_type", dataType).then((res) => {});
      console.log("ok");
      window.location.reload();
      localStorage.setItem("page", 2);
    }
  };

  const [Link, setLink] = useState(0);
  const [Links, setLinks] = useState(0);
  const Link0 = () => {
    setLink(0);
    localStorage.setItem("page", 0);
  };
  const Link1 = () => {
    setLink(1);
    localStorage.setItem("page", 1);
  };
  const Link2 = () => {
    setLink(2);
    localStorage.setItem("page", 2);
  };
  const Link3 = () => {
    setLink(3);
    localStorage.setItem("page", 3);
  };

  const Link2_0 = () => {
    setLinks(0);
    localStorage.setItem("pages", 0);
  };
  const Link2_1 = () => {
    setLinks(1);
    localStorage.setItem("pages", 1);
  };
  const Link2_2 = () => {
    setLinks(2);
    localStorage.setItem("pages", 2);
  };

  return (
    <>
      {Link == 0 ? (
        <div class="flex justify-center bg-gradient-to-r from-sky-500  to-blue-700 h-screen ">
          <div class="flex flex-col mt-10">
            <div class="bg-white w-[50rem] h-auto p-5 rounded-3xl">
              <div class="flex">
                <h1 class="text-5xl font-bold">ข้อมูลระบบ</h1>
              </div>
              <ul class="list-disc p-10 space-y-2">
                <li>
                  <button class="font-bold hover:underline-offset-2 hover:underline">
                    <a onClick={Link1}>ข้อมูลผู้ใช้</a>
                  </button>
                </li>
                <li>
                  <button class="font-bold hover:underline-offset-2 hover:underline">
                    <a onClick={Link2}>ประเภทของกิจกรรม</a>
                  </button>
                </li>
                <li>
                  <button class="font-bold hover:underline-offset-2 hover:underline">
                    <a onClick={Link3}>ข่าวประชาสัมพันธ์ทั้งหมด</a>
                  </button>
                </li>
              </ul>
            </div>
            <div class="flex justify-center p-5">
              <button
                onClick={logout}
                class="text-white bg-gradient-to-br from-blue-500 p-3 pl-5 pr-5 rounded-lg hover:bg-gradient-to-t hover:from-blue-900"
                type="button"
              >
                กลับสู่หน้าหลัก
              </button>
            </div>
          </div>
        </div>
      ) : Link == 1 ? (
        <div class="flex flex-col bg-gradient-to-r from-sky-500  to-blue-700 h-screen w-full">
          {Links == 0 ? (
            <div class="flex justify-center">
              <div class="flex flex-col justify-center mt-10">
                <div class="flex flex-col justify-center bg-white w-[50rem] h-auto p-5 rounded-3xl">
                  <div>
                    <div class="flex">
                      <h1 class="text-5xl font-bold">เมนูสมาชิกผู้ใช้</h1>
                    </div>
                    <ul class="list-disc p-10 space-y-2">
                      <li>
                        <button class="font-bold hover:underline-offset-2 hover:underline">
                          <a onClick={Link2_1}>ผู้ใช้ที่เป็นนักเรียน</a>
                        </button>
                      </li>
                      <li>
                        <button class="font-bold hover:underline-offset-2 hover:underline">
                          <a onClick={Link2_2}>ผู้ใช้ที่เป็นครู</a>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex justify-center p-5">
                  <button
                    onClick={Link0}
                    class="text-white bg-gradient-to-br from-blue-500 p-3 pl-5 pr-5 rounded-lg hover:bg-gradient-to-t hover:from-blue-900"
                    type="button"
                  >
                    กลับ
                  </button>
                </div>
              </div>
            </div>
          ) : Links == 1 ? (
            <>
              <div class="flex justify-center mt-10">
                <input
                  class="border rounded-lg p-2 shadow-2xl bg-white"
                  type="file"
                  onChange={onChange}
                  accept={".xlsx"}
                />
              </div>

              <div>
                <div class="flex justify-center mt-10">
                  <h1 class="text-2xl">
                    <b class="text-white text-[2rem]">
                      รายชื่อสมาชิกที่เป็นนักเรียน
                    </b>
                  </h1>
                </div>
                <div></div>
                <div class="flex flex-col justify-center mt-10 ml-16 mr-16">
                  <table class="table-auto w-full">
                    <thead class="flex flex-row justify-center">
                      {Header.map((items) => (
                        <div>
                          <tr class="flex justify-start bg-white border  border-black w-48 px-3 py-4">
                            <th>{items.title}</th>
                          </tr>
                        </div>
                      ))}
                    </thead>
                    <tbody class="flex flex-col">
                      {DataStudents.map((items, index) => (
                        <div key={index} class="flex flex-row justify-center">
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            <tr>{index + 1}</tr>
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            <tr>{items.fullname}</tr>
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            <tr>{items.email}</tr>
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            <tr>{items.password}</tr>
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            {items.status}
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            {items.position}
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            <button
                              onClick={() => {
                                axios
                                  .post(URL + "/member/remove_member", {
                                    data: items.id,
                                  })
                                  .then((res) => {});
                                window.location.reload();
                                console.log(Links);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 bg-red-500 text-white hover:bg-red-600 rounded-lg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </td>
                        </div>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div class="flex justify-end p-5 fixed-top ml-[90rem]">
                  <button
                    onClick={Link2_0}
                    class="text-white bg-gradient-to-br from-blue-500 p-3 pl-5 pr-5 rounded-lg hover:bg-gradient-to-t hover:from-blue-900"
                    type="button"
                  >
                    กลับ
                  </button>
                </div>
              </div>
            </>
          ) : Links == 2 ? (
            <>
              <div class="flex justify-center mt-10">
                <input
                  class="border rounded-lg p-2 shadow-2xl bg-white"
                  type="file"
                  onChange={onChange}
                  accept={".xlsx"}
                />
              </div>

              <div>
                <div class="flex justify-center mt-10">
                  <h1 class="text-2xl">
                    <b class="text-white text-[2rem]">
                      รายชื่อสมาชิกที่เป็นครู
                    </b>
                  </h1>
                </div>
                <div></div>
                <div class="flex flex-col justify-center mt-10">
                  <table class="table-auto w-full">
                    <thead class="flex flex-row justify-center">
                      {Header.map((items) => (
                        <div>
                          <tr class="flex justify-start bg-white border  border-black w-48 px-3 py-4">
                            <th>{items.title}</th>
                          </tr>
                        </div>
                      ))}
                    </thead>
                    <tbody class="flex flex-col">
                      {DataTeachers.map((items, index) => (
                        <div key={index} class="flex flex-row justify-center">
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            <tr>{index + 1}</tr>
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            <tr>{items.fullname}</tr>
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            <tr>{items.email}</tr>
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            <tr>{items.password}</tr>
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            {items.status}
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            {items.position}
                          </td>
                          <td class="flex flex-col justify-start bg-white border border-black w-48 px-3 py-4">
                            <button
                              onClick={() => {
                                axios
                                  .post(URL + "/member/remove_member", {
                                    data: items.id,
                                  })
                                  .then((res) => {});
                                window.location.reload();
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 bg-red-500 text-white hover:bg-red-600 rounded-lg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </td>
                        </div>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div class="flex justify-end p-5 fixed-top ml-[90rem]">
                  <button
                    onClick={Link2_0}
                    class="text-white bg-gradient-to-br from-blue-500 p-3 pl-5 pr-5 rounded-lg hover:bg-gradient-to-t hover:from-blue-900"
                    type="button"
                  >
                    กลับ
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div class="flex justify-center">
                <div class="flex flex-col justify-center mt-10">
                  <div class="flex flex-col justify-center bg-white w-[50rem] h-auto p-5 rounded-3xl">
                    <div>
                      <div class="flex">
                        <h1 class="text-5xl font-bold">เมนูสมาชิกผู้ใช้</h1>
                      </div>
                      <ul class="list-disc p-10 space-y-2">
                        <li>
                          <button class="font-bold hover:underline-offset-2 hover:underline">
                            <a onClick={Link2_1}>ผู้ใช้ที่เป็นนักเรียน</a>
                          </button>
                        </li>
                        <li>
                          <button class="font-bold hover:underline-offset-2 hover:underline">
                            <a onClick={Link2_2}>ผู้ใช้ที่เป็นครู</a>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex justify-center p-5">
                    <button
                      onClick={Link0}
                      class="text-white bg-gradient-to-br from-blue-500 p-3 pl-5 pr-5 rounded-lg hover:bg-gradient-to-t hover:from-blue-900"
                      type="button"
                    >
                      กลับ
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ) : Link == 2 ? (
        <>
          <div
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                AddTypePost();
              }
            }}
            class="flex flex-col bg-gradient-to-r from-sky-500  to-blue-700 h-screen w-screen"
          >
            <div class="mt-[10rem]">
              <div class="flex justify-center ">
                <h1 class="text-white font-bold text-[2rem]">
                  เพิ่มประเภทของกิจกรรม
                </h1>
              </div>
              <div class="flex justify-center mt-[2rem]">
                <input
                  onChange={SetTypePost}
                  value={Types}
                  class="w-[50rem] h-[5rem] p-5 text-[2rem] font-extrabold"
                />
              </div>
              <div class="flex justify-center p-5">
                <button
                  onClick={AddTypePost}
                  class="text-white bg-gradient-to-br from-green-400 to-green-800 p-3 pl-5 pr-5 rounded-lg hover:bg-gradient-to-br hover:from-green-900"
                  type="button"
                >
                  เพิ่ม
                </button>
              </div>

              <div class="flex justify-start border ml-[10rem] mr-[10rem] p-5 space-x-2">
                {DataType.map((items, index) => (
                  <>
                    <div key={index}>
                      <div>
                        <button
                          class={"bg-[bg-transparent text-white p-2 border"}
                        >
                          <div class="flex flex-row space-x-1">
                            <div>
                              <h1>{items.value}</h1>
                            </div>
                            <div>
                              <button
                                onClick={() => {
                                  axios
                                    .post(URL + "/type_post/delete_type", {
                                      data: items.id,
                                    })
                                    .then((res) => {});
                                  window.location.reload();
                                }}
                                class="border p-1 hover:bg-white hover:text-black"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3 w-3"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div class="flex justify-end p-5 fixed-top">
              <button
                onClick={Link0}
                class="text-white bg-gradient-to-br from-blue-500 p-3 pl-5 pr-5 rounded-lg hover:bg-gradient-to-t hover:from-blue-900"
                type="button"
              >
                กลับ
              </button>
            </div>
          </div>
        </>
      ) : Link == 3 ? (
        <>
          <div class="flex flex-col bg-gradient-to-r from-sky-500  to-blue-700 h-screen w-screen">
            <div class="flex flex-col mt-10">
              <div class="flex justify-center">
                <h1 class="text-white text-3xl font-medium">
                  <b>ข่าวประชาสัมพันธ์ทั้งหมด</b>
                </h1>
              </div>

              <div class="flex justify-center mt-10 ml-[15rem] mr-[15rem]">
                <table class="w-auto ">
                  <thead class="bg-white flex">
                    <div>
                      <tr class="flex justify-start bg-white border  border-black w-[8rem] px-3 py-5">
                        <th>ลำดับ</th>
                      </tr>
                    </div>
                    <div>
                      <tr class="flex justify-start bg-white border  border-black w-[55rem] px-3 py-5">
                        <th>หัวข้อ</th>
                      </tr>
                    </div>

                    <div>
                      <tr class="flex justify-center bg-white border  border-black w-[7rem] px-3 py-5">
                        <th>แกไขโพสต์</th>
                      </tr>
                    </div>
                    <div>
                      <tr class="flex justify-center bg-white border  border-black w-[7rem] px-3 py-5">
                        <th>ลบโพสต์</th>
                      </tr>
                    </div>
                  </thead>
                  <tbody>
                    {DataPost.map((items, index) => (
                      <div key={index} class="flex flex-row justify-center">
                        <td class="flex flex-col justify-start bg-white border border-black w-[8rem] px-3 py-5">
                          <tr>{index + 1}</tr>
                        </td>
                        <td class="flex flex-col justify-start bg-white border border-black w-[55rem] px-3 py-5">
                          <tr><h1 class="truncate w-[50rem]">{items.header}</h1></tr>
                        </td>

                        <td class="flex flex-col justify-start bg-white border border-black w-[7rem] px-3 py-5">
                          <button
                            class=" m-auto p-2 rounded-lg hover:bg-orange-500 hover:text-white delay-2s ease-out duration-300"
                            onClick={() => {
                              navigate(`/edit`, {state:items.id})
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 "
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fillRule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </td>
                        <td class="flex flex-col justify-start bg-white border border-black w-[7rem] px-3 py-4">
                        <button
                            class="p-2 m-auto  text-black hover:bg-red-500 rounded-lg  hover:text-white delay-2s ease-out duration-300"
                            onClick={() => {
                              axios
                                .post(URL + "/create_post/remove_post", {
                                  data: items.id,
                                })
                                .then((res) => {});
                              window.location.reload();
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 "
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </td>
                      </div>
                    ))}
                  </tbody>
                </table>
              </div>
              <div class="flex justify-end p-5 fixed-top">
                <button
                  onClick={Link0}
                  class="text-white bg-gradient-to-br from-blue-500 p-3 pl-5 pr-5 rounded-lg hover:bg-gradient-to-t hover:from-blue-900"
                  type="button"
                >
                  กลับ
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        0
      )}
    </>
  );
}
