import React from "react";
import TabMenu from "../components/TabMenu";
import Appbar from "../components/Appbar";
import Footers from "../components/Footer";
import PostMeDetail from "../components/PostMeDetail";


export default function post_me() {
  return (
    <>
      <div class=" bg-gradient-to-b from-purple-600 to-blue-600 min-h-screen">
        <div>
          <div class="pl-[12rem] pr-[12rem] pb-[5rem]">
            <div class="shadow-2xl ">
              <Appbar />
              <TabMenu />
              <div class="flex flex-row bg-white p-5">
                <div class="w-full">
                    <PostMeDetail />
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
