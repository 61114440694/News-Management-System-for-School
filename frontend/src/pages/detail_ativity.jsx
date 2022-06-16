import React from "react";
import { useLocation } from "react-router-dom";
import Appbar from "../components/Appbar";

const props = [
  {
    title: "กินผักกันเถอะ !! การกินผักดีต่อสุขภาพนะเด็ก",
    images:
      "https://www.enjoyyourcooking.com/wp-content/uploads/2009/02/russian-salad-olivier.jpg",
    titledetail:
      "กิจกรรมร่วมกิน กิจกรรมร่วมกิน กิจกรรมร่วมกิน กิจกรรมร่วมกิน กิจกรรมร่วมกิน กิจกรรมร่วมกิน กิจกรรมร่วมกิน กิจกรรมร่วมกิน กิจกรรมร่วมกิน",
    data: [
      {
        images:
          "https://th-thumbnailer.cdn-si-edu.com/ZpquVRmBxUN5YjKXOE6CIzjhviE=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ea/a1/eaa14308-a056-4994-9e7f-f31563b888aa/cerkce.jpg",
        name: "pop-up",
        date: "20/05/22",
        comment: "สสัดผักอร่อย",
      },
      {
        images:
          "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ",
        name: "boom",
        date: "20/05/22",
        comment: "อร่อยจริงๆหรอครับ",
      },
      {
        images:
          "https://radiumwatch.com/wp-content/uploads/2020/03/11626137131689.jpg",
        name: "cater",
        date: "20/05/22",
        comment: "อร่อยหรอครับ",
      },
    ],
  },
];

export default function ActivityDetail() {
  const location = useLocation();
  console.log(location);

  return (
    <div class="bg-blue-200">
      <div class="shadow-lg bg-white">
        <div>
          <Appbar />
        </div>
        {props.map((items) => (
          <div class="p-10 pl-[10rem] pr-[10rem]">
            <h1 class="text-5xl font-extrabold">{items.title}</h1>
            <div class="pt-10 w-auto">
              <img class=" w-[100rem] h-[50rem]" src={items.images} alt="#" />
            </div>
            <div class="pt-10 pb-10 p-2">
              <span class="text-2xl font-sans font-medium">
                {items.titledetail}
              </span>
            </div>

            <div class="w-full p-5 border-black border rounded">
              {items.data.map((items) => (
                <div>
                  <div class="flex spce">
                    <div class="p-2">
                      <div class="w-[3rem]">
                        <img class="border rounded-full " src={items.images} />
                      </div>
                    </div>
                    <div>
                      <label class="pl-[1rem] text-[1.2rem]">
                        <b>{items.name}</b>
                      </label>
                      <span class="pl-2 text-[15px]">วันที่ {items.date}</span>
                      <p class="pl-4 text-[1.3rem]">{items.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
