import React from "react";
import FormCreatePost from "./FormCreatePost";

export default function CreatePost(props) {
  return (
    <>
      <div class="p-10 flex justify-end fixed-bottom">
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalLg"
          // onClick={CreatePost}
          class="p-8 bg-gradient-to-t from-sky-400 to-sky-600 hover:bg-gradient-to-t hover:from-sky-500 shadow-md active:bg-white  rounded-[20rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalLg"
        tabindex="-1"
        aria-labelledby="exampleModalLgLabel"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-[2rem] font-bold leading-normal text-gray-800"
                id="exampleModalLgLabel"
              >
            สร้างโพสต์
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-4 mt-5">
              <FormCreatePost />
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}
