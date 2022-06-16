import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import moment from "moment";
// import CardButton from "../components/CardsButton";

const URL = "http://localhost:4000";

export default function home() {
  useEffect(() => {
    axios.get(URL + "/create_post").then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    });

    // const data = {
    //   name: 'test02',
    //   email: 'test02@gmail.com',
    //   age:'1000'
    // }

    // axios.post(URL+'/home',data)

  }, []);
  
  const navigate = useNavigate();
  const getDaysDiff = (start_date, end_date, date_format = "YYYY-MM-DD") => {
    const getDateAsArray = (date) => {
      return moment(date.split(/\D+/), date_format);
    };
    return (
      getDateAsArray(end_date).diff(getDateAsArray(start_date), "days") + 1
    );
  };

  const [data, setData] = useState([]);
  

  const CreatePost = () => {
    navigate("/create");
  };

  const GotoDetail = () =>{
    
    // navigate(``)
  }

  return (
    <div>
      <div>
        <Appbar />
      </div>
      <div class="flex flex-col justify-center pt-[1rem] pb-[2rem] pl-[10rem] pr-[10rem] bg-blue-200 min-h-screen min-w-screen">
        <div class="text-[2.5rem] text-blue-gray-700">
          <h1>ใกล้ครบกำหนดการ</h1> 
        </div>
        <div class="grid grid-cols-3 gap-8 pt-5">
          {/* {data.length != 0 ? (<></>):(<>ยังไม่มีข้อมูลที่หมด</>)} */}
        </div>

        <div class="text-[2.5rem] text-blue-gray-700">
          <h1>ประชาสัมพันธ์</h1>
        </div>
        <div class="grid grid-cols-3 gap-8 pt-5">
          {/* <CardButton DATA={data} /> */}

          {data.length != 0 ? (
            data.map((items, index) => (
              <div key={index} class="justify-center ">
                <div class=" shadow-lg bg-white max-w-sm rounded-lg w-auto h-auto">
                  <button
                    onClick={GotoDetail}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      class="rounded-t-lg h-[15rem] w-[30rem]"
                      src={items.imageURL}
                      alt="DATA"
                    />
                  </button>
                  <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 whitespace-nowrap overflow-ellipsis overflow-hidden">
                      {items.header}
                    </h5>
                    <p class="text-gray-700 text-sm whitespace-nowrap overflow-ellipsis overflow-hidden">
                      {items.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>ไม่มีข้อมูล</div>
          )}
        </div>
      </div>
      <div class="p-10 flex justify-end fixed-bottom">
        <button
          onClick={CreatePost}
          class="p-8 bg-sky-500 shadow-md  rounded-[20rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
