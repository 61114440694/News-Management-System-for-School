import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import moment from "moment";

import NewsNew from "../components/NewsNew";
import BtnCreatePost from "../components/BtnCreatePost";
import AllType from "../components/AllType";
import Calendars from "../components/Calendar";
import Footers from "../components/Footer";
import TabMenu from "../components/TabMenu";

export default function home() {
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
                  <NewsNew />
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
