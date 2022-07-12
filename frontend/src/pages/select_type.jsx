import React from "react";
import TabMenu from "../components/TabMenu";
import Appbar from "../components/Appbar";
import Calendars from "../components/Calendar";
import BtnCreatePost from "../components/BtnCreatePost";
import Footers from "../components/Footer";
import AllType from "../components/AllType";
import SelectTypeNews from "../components/SelectTypeNews";

export default function select_type() {
  return (
    <>
      <div class=" bg-gradient-to-b from-purple-600 to-blue-600">
        <div>
          <div class="pl-[12rem] pr-[12rem] pb-[5rem]">
            <div class="shadow-2xl ">
              <Appbar />
              <TabMenu />
              <BtnCreatePost />
              <div class="flex flex-row bg-white p-5">
                <div class="basis-10/12">
                  <SelectTypeNews/>
                </div>
                <div class="basis-1 w-auto">
                  <AllType />
                  <div class="basis-1 w-auto">
                    <Calendars />
                  </div>
                </div>
              </div>
              <div>
                <Footers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
