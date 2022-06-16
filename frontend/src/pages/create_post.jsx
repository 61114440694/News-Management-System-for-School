import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import Moment from "moment";
import Select from "react-select";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

const URL = "http://localhost:4000";

const data = [
  {
    value: "ครู",
    label: "ครู",
  },
  {
    value: "นักเรียน",
    label: "นักเรียน",
  },
  // {
  //   value: "true red",
  //   label: "true red",
  // },
  // {
  //   value: "aqua sky",
  //   label: "aqua sky",
  // },
  // {
  //   value: "tigerlily",
  //   label: "tigerlily",
  // },
  // {
  //   value: "blue turquoise",
  //   label: "blue turquoise",
  // },
];

export default function TeacherCreate() {
  const Navigate = useNavigate();

  const [headerValue, setHeaderValue] = useState();
  const [textbodyValue, setTextbodyValue] = useState();
  const [urlValue, seturlValue] = useState();
  const [datestartValue, setDateStartValue] = useState();
  const [dateendValue, setDateEndValue] = useState();
  const [selectedValue, setSelectedValue] = useState([]);

  const [progress, setProgress] = useState();
  const formatDate = Moment().format("YYYY-MM-DD");

  const ChangeHeader = (e) => {
    setHeaderValue(e.target.value);
  };

  const ChangeTextBody = (e) => {
    setTextbodyValue(e.target.value);
  };

  const filechange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    PostToDatabase(file);
  };

  const PostToDatabase = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          seturlValue(url);
        });
      }
    );
  };

  const DateStartChange = (e) => {
    setDateStartValue(e.target.value);
  };
  const DateEndChange = (e) => {
    setDateEndValue(e.target.value);
  };

  const ChangeSelect = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const post = () => {
    if(!urlValue){
alert("no pass")
    }else{
      alert("ทำการโพสต์สำเร็จแล้ว")
      console.log(
        "header: " +
          " " +
          JSON.stringify(headerValue) +
          " " +
          "textbody: " +
          " " +
          JSON.stringify(textbodyValue) +
          " " +
          "images: " +
          " " +
          JSON.stringify(urlValue) +
          " " +
          "datestart: " +
          " " +
          JSON.stringify(datestartValue) +
          " " +
          "dateend: " +
          " " +
          JSON.stringify(dateendValue) +
          " " +
          "type: " +
          JSON.stringify(selectedValue, null, 2)
      );
      const Alldata = {
        header: headerValue,
        description:textbodyValue,
        imageURL: urlValue,
        start_time: datestartValue,
        end_time: dateendValue,
        seepost: selectedValue,
      }; 
      axios.post(URL+'/create_post',Alldata) 
      Navigate("/home"); 
    }
    
 
    // Upload Database Mongodb 
    // const data = {
    //   name: 'test02',
    //   email: 'test02@gmail.com',
    //   age:'1000'
    // }

    // axios.post(URL+'/home',data)
  };

  const back = () => {
    Navigate("/home");
  };
  return (
    <div>
      <div>
        <div>
          <Appbar></Appbar>
        </div>
        <div class="pt-[5rem] pb-[5rem] pl-[20rem] pr-[20rem] bg-blue-200 h-full">
          <div class="h-auto bg-white p-10 shadow-xl ">
            <div class="text-5xl">
              <b>ฟอร์มลงประกาศ</b>
            </div>
            <div class="p-10">
              <form onSubmit={post}>
              <div class="flex flex-col justify-center">
                <div class="flex justify-center">
                  <div class="mb-3 xl:w-[30rem]">
                    <label
                      for="exampleText0"
                      class="form-label inline-block mb-2 text-gray-700"
                    >
                      หัวข้อ
                    </label>
                    <input
                      onChange={ChangeHeader}
                      type="text"
                      class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleText0"
                      required
                    />
                  </div>
                </div>

                <div class="flex justify-center">
                  <div class="mb-3 xl:w-[30rem]">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label inline-block mb-2 text-gray-700"
                    >
                      เนื้อหา
                    </label>
                    <textarea
                      onChange={ChangeTextBody}
                      class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </div>

                <div class="flex justify-center">
                  <div class="mb-3 xl:w-[30rem]">
                    <label
                      for="formFile"
                      class="form-label inline-block mb-2 text-gray-700"
                    >
                      ไฟล์ภาพที่ต้องการอัพโหลด
                    </label>
                    <div class="flex flex-row space-x-5">
                      <div>
                        <input
                          onChange={filechange}
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="file"
                          id="formFile"
                          accept=".png, .jpg, .jpeg"
                          required
                        />
                      </div>

                      <div>
                        <h1 class="pt-1">upload : {progress} % </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex justify-center">
                  <div class="mb-3 xl:w-[30rem]">
                    <label
                      for="formFile"
                      class="form-label inline-block mb-2 text-gray-700"
                    >
                      วันที่โพสต์
                    </label>
                    <div class="flex mb-3 xl:w-[30rem]">
                      <input
                        onChange={DateStartChange}
                        type="date"
                        required
                        min={formatDate}
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                      <input
                        onChange={DateEndChange}
                        type="date"
                        required
                        min={datestartValue}
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex justify-center">
                  <div class="mb-3 xl:w-[30rem]">
                    <label
                      for="formFile"
                      class="form-label inline-block mb-2 text-gray-700"
                    >
                      คนที่มองเห็นโพสต์ได้
                    </label>

                    <div class="flex justify-center">
                      <div class="mb-3 xl:w-[30rem]">
                        <Select
                          className="dropdown"
                          placeholder="Select Option"
                          value={data.filter((obj) =>
                            selectedValue.includes(obj.value)
                          )} // set selected values
                          options={data} // set list of the data
                          onChange={ChangeSelect} // assign onChange function
                          isMulti
                          isClearable
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-center p-5 pt-[2rem]">
                <button
                  onClick={post}
                  type="submit"
                  class=" border-transparent text-md font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                >
                  <b>โพสต์</b>
                </button>
              </div>
              </form>

              <div class="flex justify-center">
                <button
                  onClick={back}
                  class=" border-transparent text-md font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                >
                  <b>ถอยกลับ</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
