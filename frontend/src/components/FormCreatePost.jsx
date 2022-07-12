import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Moment from "moment";
import Select from "react-select";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

const URL = "http://localhost:4000";

export default function FormCreatePost() {
  const navigate = useNavigate();

  const [headerValue, setHeaderValue] = useState();
  const [textbodyValue, setTextbodyValue] = useState();
  const [urlValue, seturlValue] = useState();
  const [datestartValue, setDateStartValue] = useState();
  const [selectedValue, setSelectedValue] = useState([]);
  const [idpost, setIdPost] = useState();

  const [progress, setProgress] = useState(null);
  const formatDate = Moment().format("YYYY-MM-DD");

  const [DataType, setDataType] = useState([]);

  useEffect(() => {
    axios.get(URL + "/type_post/get_type").then((response) => {
      setDataType(response.data.data);
    });
    setIdPost(localStorage.getItem("data"));
  }, []);

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
          setDateStartValue(formatDate);
        });
      }
    );
  };

  const ChangeSelect = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const post = () => {
    console.log(idpost);
    if (
      headerValue &&
      textbodyValue &&
      urlValue &&
      datestartValue &&
      selectedValue
    ) {
      alert("ทำการโพสต์สำเร็จแล้ว");

      const Alldata = {
        header: headerValue,
        description: textbodyValue,
        imageURL: urlValue,
        start_time: datestartValue,
        seepost: selectedValue,
        useridpost: idpost,
      };
      axios.post(URL + "/create_post", Alldata);
      navigate("/home");
    }
  };

  const back = () => {
    navigate("/home");
  };

  return (
    <>
      <div class="bg-blue-900 p-5 w-full flex justify-center">
        <h1 class="font-bold text-[1.8rem] text-white">สร้างโพสต์</h1>
      </div>
      <div class="flex flex-col justify-center">
        <div class="m-10">
          <form>
            <div class="flex justify-center ">
              <div class="mb-3 xl:w-[30rem]">
                <label
                  for="exampleText0"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  หัวข้อ*
                </label>
                {progress === null ? (
                  <>
                    <input
                      onChange={ChangeHeader}
                      type="text"
                      class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleText0"
                      required
                    />
                  </>
                ) : progress < 99 ? (
                  <>
                    <input
                      disabled
                      onChange={ChangeHeader}
                      type="text"
                      class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-500 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleText0"
                      required
                    />
                  </>
                ) : (
                  <>
                    <input
                      onChange={ChangeHeader}
                      type="text"
                      class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleText0"
                      required
                    />
                  </>
                )}
              </div>
            </div>

            <div class="flex justify-center">
              <div class="mb-3 xl:w-[30rem]">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  เนื้อหา*
                </label>

                {progress === null ? (
                  <>
                    <textarea
                      onChange={ChangeTextBody}
                      class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      required
                    ></textarea>
                  </>
                ) : progress < 99 ? (
                  <>
                    <textarea
                      onChange={ChangeTextBody}
                      class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-500 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      required
                      disabled
                    ></textarea>
                  </>
                ) : (
                  <>
                    <textarea
                      onChange={ChangeTextBody}
                      class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      required
                    ></textarea>
                  </>
                )}
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
                    {progress === null ? (
                      <>
                        <input
                          onChange={filechange}
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="file"
                          id="formFile"
                          accept=".png, .jpg, .jpeg"
                        />
                      </>
                    ) : progress < 99 ? (
                      <>
                        <input
                          onChange={filechange}
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-500 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="file"
                          id="formFile"
                          accept=".png, .jpg, .jpeg"
                          disabled
                        />
                      </>
                    ) : (
                      <>
                        <input
                          onChange={filechange}
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="file"
                          id="formFile"
                          accept=".png, .jpg, .jpeg"
                        />
                      </>
                    )}
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
                  ประเภทข่าว*
                </label>

                <div class="flex justify-center">
                  <div class="mb-3 xl:w-[30rem]">
                    {progress === 100 ? (
                      <>
                        <Select
                          class="dropdown"
                          placeholder="Select Option"
                          value={DataType.filter((obj) =>
                            selectedValue.includes(obj.value)
                          )} 
                          options={DataType} 
                          onChange={ChangeSelect} 
                          isMulti
                          isClearable
                          required
                        />
                      </>
                    ) : progress < 99 ? (
                      <>
                        <Select
                          class="dropdown"
                          placeholder="Select Option"
                          value={DataType.filter((obj) =>
                            selectedValue.includes(obj.value)
                          )} // set selected values
                          options={DataType} // set list of the data
                          onChange={ChangeSelect} // assign onChange function
                          isMulti
                          isClearable
                          isDisabled
                        />
                      </>
                    ) : (
                      <>
                        <Select
                          class="dropdown"
                          placeholder="Select Option"
                          value={DataType.filter((obj) =>
                            selectedValue.includes(obj.value)
                          )} // set selected values
                          options={DataType} // set list of the data
                          onChange={ChangeSelect} // assign onChange function
                          isMulti
                          isClearable
                          required
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center p-5 -mt-3 -mb-3">
              {selectedValue.length == 0 ? (
                <>
                  <button
                    disabled={true}
                    onClick={post}
                    type="submit"
                    class=" border-transparent text-md font-medium  text-gray-200 bg-gray-400  w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                  >
                    <b>โพสต์</b>
                  </button>
                </>
              ) : progress == null ? (
                <>
                  <button
                    // disabled={true}
                    onClick={post}
                    type="submit"
                    class=" border-transparent text-md font-medium  text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                  >
                    <b>โพสต์</b>
                  </button>
                </>
              ) : selectedValue.length > 1 ? (
                <>
                  <button
                    onClick={post}
                    type="submit"
                    class=" border-transparent text-md font-medium  text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                  >
                    <b>โพสต์</b>
                  </button>
                </>
              ) : progress == 100 ? (
                <>
                  <button
                    onClick={post}
                    type="submit"
                    class=" border-transparent text-md font-medium  text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                  >
                    <b>โพสต์</b>
                  </button>
                </>
              ) : progress < 99 ? (
                <>
                  <button
                    onClick={post}
                    type="submit"
                    disabled={true}
                    class=" border-transparent text-md font-medium  text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                  >
                    <b>โพสต์</b>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={post}
                    type="submit"
                    class=" border-transparent text-md font-medium  text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                  >
                    <b>โพสต์</b>
                  </button>
                </>
              )}
            </div>
          </form>

          <div class="flex justify-center p-5">
            {progress == null ? (
              <>
                <button
                  onClick={back}
                  type="submit"
                  class=" border-transparent text-md font-medium  text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                >
                  <b>ถอยกลับ</b>
                </button>
              </>
            ) : progress == 100 ? (
              <>
                <button
                  onClick={back}
                  type="submit"
                  class=" border-transparent text-md font-medium  text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                >
                  <b>ถอยกลับ</b>
                </button>
              </>
            ) : (
              <>
                <button
                  disabled={true}
                  onClick={back}
                  type="submit"
                  class=" border-transparent text-md font-medium  text-gray-200 bg-gray-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                >
                  <b>ถอยกลับ</b>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
