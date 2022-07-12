import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const URL = "http://localhost:4000";

export default function Comments() {
  const member = localStorage.getItem("data");
  const [Comment, setComment] = useState("");
  const [DataComments, setDataComments] = useState([]);
  const [DataUser, setDataUser] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const formatDate = moment().format("YYYY-MM-DD");
  const id_post = location.state[0].id_post;

  useEffect(() => {
    axios.post(URL + "/member/userpost", { data: member }).then((response) => {
      setDataUser(response.data.data);
    });
    axios
      .post(URL + "/comments/getcomments", { data: id_post })
      .then((response) => {
        setDataComments(response.data.data);
      });
  }, []);

  const login = () => {
    navigate(`/login`);
  };

  const Commentor = () => {
    window.location.reload()
    if (Comment !== "") {
      if (localStorage.getItem("data") === "admin") {
        const data = {
          id_post: id_post,
          fullname: "admin",
          comment: Comment,
          date_time: formatDate,
          position: "ผู้ดูแลระบบ",
        };
        axios.post(URL + "/comments/commentspost", data).then((res) => {});
      } else {
        const namecomment = DataUser[0].fullname;
        const positions = DataUser[0].position;
        const data = {
          id_post: id_post,
          fullname: namecomment,
          comment: Comment,
          date_time: formatDate,
          position: positions,
        };
        axios.post(URL + "/comments/commentspost", data).then((res) => {});
      }
    }
  };
  return (
    <>
      <div>
        <div class="bg-blue-900 p-5 w-full">
          <h1 class="font-bold text-[1.2rem] text-white">Comments</h1>
        </div>
      </div>

      <div>
        <div class="flex flex-col p-2 space-y-5">
          {member === null ? (
            <div class="hidden"></div>
          ) : (
            <>
              {DataComments.length === 0 ? (
                <>
                  <h1 class="p-2">ยังไม่มีการแสดงความคิดเห็น</h1>
                </>
              ) : (
                <>
                  {DataComments.map((items, index) => (
                    <div key={index} class="flex flex-col">
                      <div class="flex flex-row space-x-2 ">
                        <div class="flex justify-center bg-white rounded-full w-[3.5rem] h-[3.5rem] border-[0.2rem] border-black p-3">
                          <h1>{items.fullname[0] + items.fullname[1]}</h1>
                        </div>
                        <div class="flex flex-col -space-y-0.5">
                          <div class="flex flex-col -space-y-0.5">
                            <div class="flex flex-row space-x-2">
                              <h1 class="font-extrabold text-[1rem]">
                                {items.fullname}
                              </h1>
                              <div class="mt-1.5">
                                <h1 class="font-normal text-[0.7rem]">
                                  โพสต์เมื่อ {items.date_time}
                                </h1>
                              </div>
                              <div class="mt-1.5">
                                <h1 class="font-normal text-[0.7rem]">
                                #{items.position}
                                </h1>
                              </div>
                            </div>
                            <div class="w-[35rem]">
                              <p class="break-all">{items.comment}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr class="mt-5" />
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
        {member == null ? (
          <>
            <div>
              <button
                onClick={login}
                class="flex justify-center p-2 w-full bg-blue-500 text-white hover:bg-blue-600"
              >
                <h1>เข้าสู่ระบบเพื่อแสดงความคิดเห็น</h1>
              </button>
            </div>
          </>
        ) : (
          <>
            <div class="p-2">
              <div class="flex">
                <input
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    Commentor()
                  }
                }}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  class="border w-full p-3 rounded-3xl"
                  type="text"
                />
                <div className="-ml-[4.3rem] mt-[0.3rem]">
                  <button
                    onClick={Commentor}
                    class="p-2 bg-blue-400 rounded-3xl w-[4rem] hover:bg-blue-500 hover:text-white"
                  >
                    ส่ง
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
