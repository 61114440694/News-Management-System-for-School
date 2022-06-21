import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Appbar from "../components/Appbar";

const URL = "http://localhost:4000";

export default function ActivityDetail() {
  const location = useLocation();
  const [Data, setData] = useState([]);
  const dataMember = {
    data: location.state,
  };

  useEffect(() => {
    axios.post(URL + "/create_post/detail", dataMember).then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    });
  }, []);

  return (
    <div class="bg-blue-200">
      <div className="fixed-top">
        <Appbar />
      </div>
      <div class="bg-white">
        {Data.map((items, index) => (
          <>
            <div class="flex flex-col mt-[7rem] ml-[15rem] mr-[15rem]">
              <img
                class=" w-auto h-[40rem]"
                src={items.imageURL}
                alt="image err"
              />
            </div>
            <div class="ml-[15rem] mr-[15rem] p-2">
                <h5 class="text-[3.5rem] font-bold">{items.header}</h5>
            </div>
            <div class="mr-[15rem] ml-[15rem] p-2">
              <h1 class="text-justify text-[1.7rem] font-sans">
                {items.description}
              </h1>
            </div>
            <div class="mr-[15rem] ml-[15rem] p-2">
              <p>โพสต์โดย : id ที่โพสต์</p>
            </div>
            <div class="mr-[15rem] ml-[15rem] p-2">
              <p>วันที่โพสต์ {items.start_time}</p>
            </div>
            {/* <div class="w-full p-5 border-black border rounded">
              {items.data.map((items , index) => (
                <div>
                  <div class="flex spce">
                    <div class="p-2">
                      <div class="w-[3rem]">
                        <img class="border rounded-full " src={items.images} />
                      </div>
                    </div>
                    <div>
                      <label class="pl-[1rem] text-[1.2rem]">
                        <b>{items.name}</b>
                      </label>
                      <span class="pl-2 text-[15px]">วันที่ {items.date}</span>
                      <p class="pl-4 text-[1.3rem]">{items.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </>
        ))}
      </div>
    </div>
  );
}
