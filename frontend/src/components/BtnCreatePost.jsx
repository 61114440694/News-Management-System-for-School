import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const URL = "http://localhost:4000";

export default function CreatePost() {
  const navigate = useNavigate();
  const location = useLocation()
  const CreatePost = () => {
    navigate(`/create`);
  };
  const user = localStorage.getItem("status")
  return (
    <>
      <div class="p-10 flex justify-end fixed-bottom ml-[85rem]">
        {user == "admin" ? (
          <>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalLg"
              onClick={CreatePost}
              class="p-8 bg-gradient-to-t from-sky-400 to-sky-600 hover:bg-gradient-to-t hover:from-sky-500 shadow-md active:bg-white  rounded-[20rem] delay-2s ease-out duration-300"
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
          </>
        ) : user == "ครู" ? (
          <>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalLg"
              onClick={CreatePost}
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
          </>
        ) : (
          <>
            <div class="hidden"></div>
          </>
        )}
      </div>
    </>
  );
}
