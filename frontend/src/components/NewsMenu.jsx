import React from "react";
import logo from "../img/01.png";
export default function NewsMenu() {
  return (
    <div>
      <div class="p-10">
        <h1 class="text-[2rem]">
          <b>งานประชาสัมพันธ์</b>
        </h1>
      </div>

      <div>
        <div class="flex p-10 space-x-5 border shadow-gray-600 bg-white">
          <img class="bg-green-600 w-[20rem]" src={logo} alt="#" />
          <div class="space-y-2">
            <h1 class="text-2xl ">
              <u>DD</u>
            </h1>
            <div>
              <p class="text-2sm">DD</p>
            </div>
            <div class="flex space-x-2">
              <div>
                <p>
                  โดย <span>อาจารย์</span>
                </p>
              </div>
              <div>
                <p>เมื่อวันที่</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
