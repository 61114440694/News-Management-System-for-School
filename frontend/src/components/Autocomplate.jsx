import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const URL = "http://localhost:4000";

export default function Autocomplated() {
  const [value, setValue] = useState("");
  const [Data, setData] = useState([]);
  const [sug, setSug] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(URL + "/create_post").then((response) => {
      setData(response.data.data);
    });
  }, []);

  const Change = (e) => {
    const x = e.target.value;
    let matches = [];

    if (x.length > 0) {
      matches = Data.filter((items) => {
        const regex = new RegExp(`${x}`);
        return items.header.match(regex);
      });
    }

    console.log("matches", matches);
    setSug(matches);
    setValue(x);
  };

  return (
    <>
      <div class="flex p-5 flex-col">
        <div class="flex flex-row">
          <div>
            <input
              class="w-[18rem] h-[1.5rem] p-5 pr-10 -pb-2"
              type="text"
              placeholder="ค้นหา"
              onChange={Change}
            />
          </div>
          <div class="-ml-[2rem] mt-[0.7rem]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="relative shadow-xl bg-white mt-0.5   w-[18rem] h-auto">
          <div class="">
            {sug.map((items, index) => (
              <>
                <ul class="hover:bg-gray-200 cursor-pointer" key={index} onClick={() => {
                          const datasystem = [{"id_post" : items.id},{"useridpost" : items.useridpost}]
                          navigate(`/detail`, { state: datasystem});
                          window.location.reload()
                        }} >
                  <button
                    onClick={() => {
                      const datasystem = [{"id_post" : items.id},{"useridpost" : items.useridpost}]
                      navigate(`/detail`, { state: datasystem});
                      window.location.reload()
                    }}
                  >
                    <h1 class="text-left text-ellipsis p-2">{items.header}</h1>
                  </button>
                  <hr />
                </ul>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
