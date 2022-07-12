import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const URL = "http://localhost:4000";

export default function NewDetail() {
  const location = useLocation();

  const dataPost = {
    data: location.state[0].id_post,
  };
  const useridpost = {
    data: location.state[1].useridpost,
  };

  const [Data, setData] = useState([]);
  const [UsernamePost, setUsernamePost] = useState([]);

  useEffect(() => {
    axios.post(URL + "/create_post/detail", dataPost).then((response) => {
      setData(response.data.data);
    });

    axios.post(URL + "/member/userpost", useridpost).then((response) => {
      setUsernamePost(response.data.data);
    });
  }, []);

  return (
    <>
      <div class="w-full">
        <div>
          <div class="bg-blue-900 p-5 w-full">
            <h1 class="font-bold text-[1.2rem] text-white">เนื้อหา</h1>
          </div>
        </div>
        {Data.map((items, index) => (
          <>
            <>
              <div key={index}>
                <div class="flex flex-col">
                  <img
                    class=" w-auto h-auto"
                    src={items.imageURL}
                    alt="image err"
                  />
                </div>
                <div class="p-2">
                  <h5 class="text-[1.5rem] font-bold  ">{items.header}</h5>
                </div>
                <div class=" pl-2 pb-2 pr-2">
                  <h1 class="text-justify text-[1rem] font-medium">
                    {items.description}
                  </h1>
                </div>
                <div class="p-2 border ">
                  <p>
                    โพสต์โดย :{" "}
                    {UsernamePost.length === 0 ? (
                      <>
                        <span>admin</span>
                      </>
                    ) : (
                      <>
                        {UsernamePost.map((items, index) => (
                          <span key={index}>{items.fullname}</span>
                        ))}
                      </>
                    )}
                  </p>
                </div>
                <div class="p-2 border">
                  <p>วันที่โพสต์ : {items.start_time}</p>
                </div>

                <div class="p-2 border">
                  {items.seepost.length > 1 ? (
                    <>
                      <p>
                        ประเภท :  {items.seepost.join(" , ")}
                      </p>
                    </>
                  ) : (
                    <>
                      <p>ประเภท : {items.seepost}</p>
                    </>
                  )}
                </div>
              </div>
            </>
          </>
        ))}
      </div>
    </>
  );
}
