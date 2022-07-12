import React from "react";
import Calendar from "../components/Calendar";
import AllType from "../components/AllType";
import Appbar from "../components/Appbar";
import Footers from "../components/Footer";
import NewsDetail from "../components/NewsDetail";
import TabMenu from "../components/TabMenu";
import BtnCreatePost from "../components/BtnCreatePost";
import Comments from "../components/Comments";

export default function ActivityDetail() {
  return (
    <>
      <div class="bg-gradient-to-b from-purple-600 to-blue-600 ">
        <div>
          <div class="pl-[12rem] pr-[12rem] pb-[5rem]">
            <div class="shadow-2xl ">
              <Appbar />
              <TabMenu />
              <BtnCreatePost />
              <div class="flex flex-row bg-white p-5">
                <div>
                  <div class="flex flex-col basis-12/12 border mt-5">
                    <NewsDetail />
                  </div>
                  <div>
                    <div class="flex flex-col basis-12/12 border mt-5">
                      <Comments />
                    </div>
                  </div>
                </div>

                <div class="basis-1">
                  <AllType />
                  <div class="basis-1 mb-[5rem]">
                    <Calendar />
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
