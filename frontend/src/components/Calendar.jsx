import React, { useState } from "react";
import Calendar from "react-calendar";

export default function Calendars() {
  const value = new Date();
  return (
    <>
      <div class="flex flex-col flex-wrap flex-auto grow m-5 w-[20rem]">
        <div class="bg-blue-900 p-5 w-full">
          <h1 class="font-bold text-[1.2rem] text-white">ปฏิทิน</h1>
        </div>
        <div class="flex flex-wrap flex-auto grow w-[20rem] border p-5">
          <Calendar value={value} />
        </div>
      </div>
    </>
  );
}
