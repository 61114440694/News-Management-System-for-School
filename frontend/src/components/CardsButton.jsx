import React from "react";
import { useNavigate } from "react-router-dom";

export default function card(props) {
  const navigate = useNavigate();

  const gotodetail = () => {
    navigate("/detail");
  };
  return (
    <>
      {props.DATA.map((items, index) => (
        <div key={index} class="justify-center ">
          <div class=" shadow-lg bg-white max-w-sm rounded-lg w-auto h-[22rem]">
            <button
              // onClick={gotodetail}
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
      ))}
    </>
  );
}
