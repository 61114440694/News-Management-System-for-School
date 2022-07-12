import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:4000";

export default function AllType() {
  const [dataType, setDataType] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(URL + "/type_post/get_type").then((response) => {
      setDataType(response.data.data);
    });
  }, []);
  return (
    <>
      <div class="flex flex-wrap flex-auto grow m-5 w-auto border">
        <div class="bg-blue-900 p-5 w-full">
          <h1 class="font-bold text-[1.2rem] text-white">หมวดหมู่</h1>
        </div>
        <div class="flex flex-col justify-center w-full ">
          {dataType.map((items, index) => (
            <>
              <div key={index} class="flex text-left p-2 ease-out duration-300" >
                  <a onClick={()=>{
                    navigate(`/home/${items.value}` , {state:items.value})
                    window.location.reload()
                  }} class="p-2 hover:underline cursor-pointer">{items.value}</a>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
