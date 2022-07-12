import React from "react";
import Autocomplate from "./Autocomplate";
import Menu from "./Menu";

export default function TabMenu() {
  return (
    <>
      <div class="flex justify-between bg-blue-800 w-auto h-[5.5rem]">
        <div class="flex justify-start">
          <Menu />
        </div>
        <div class="flex justify-start">
          <Autocomplate/>
        </div>
      </div>
    </>
  );
}
