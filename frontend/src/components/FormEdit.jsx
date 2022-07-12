import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import Select from "react-select";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

const URL = "http://localhost:4000";

export default function EditForm() {
  const location = useLocation();

  const navigate = useNavigate();

  const [headerValue, setHeaderValue] = useState();
  const [textbodyValue, setTextbodyValue] = useState();
  const [urlValue, seturlValue] = useState();
  const [datestartValue, setDateStartValue] = useState();
  const [selectedValue, setSelectedValue] = useState([]);
  const [idpost , setidpost] = useState("")

  const [progress, setProgress] = useState(null);
  const formatDate = moment().format("YYYY-MM-DD");

  const [DataType, setDataType] = useState([]);

  useEffect(() => {
    // if("")
    axios.get(URL + "/type_post/get_type").then((response) => {
      setDataType(response.data.data);
    });
    axios
      .post(URL + "/create_post/detail", { data: location.state })
      .then((response) => {
        const DataForEdit = response.data.data;

        setHeaderValue(DataForEdit[0].header);
        setTextbodyValue(DataForEdit[0].description);
        seturlValue(DataForEdit[0].imageURL);
        setDateStartValue(DataForEdit[0].start_time);
        setSelectedValue(DataForEdit[0].seepost);
        setidpost(DataForEdit[0].id)
      });
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
      alert("แก้ไขโพสต์สำเร็จ");
      const Alldata = {
        header: headerValue,
        description: textbodyValue,
        imageURL: urlValue,
        start_time: datestartValue,
        seepost: selectedValue,
        idpost: idpost,
      };
      axios.post(URL + "/create_post/update_post", {data:Alldata});      
      if(localStorage.getItem("status") == 'admin'){
        navigate('/serve-ad_min@');
      }if(localStorage.getItem("status") == 'ครู'){
        navigate(`/post_me`)
      }
      
  };

  const back = () => {
    navigate(-1);
  };
  return (
    <>
      <div>
        <div>
          <div class="bg-blue-900 p-5 w-full">
            <h1 class="font-bold text-[1.2rem] text-white">แก้ไขโพสต์</h1>
          </div>
          <div class="border">
            <div class="pl-5 pr-5">
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
                      <>
                        <input
                          onChange={ChangeHeader}
                          type="text"
                          class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleText0"
                          required
                          value={headerValue}
                        />
                      </>
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
                      <textarea
                        onChange={ChangeTextBody}
                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        required
                        value={textbodyValue}
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
                        ประเภทข่าว*
                      </label>

                      <div class="flex justify-center">
                        <div class="mb-3 xl:w-[30rem]">
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
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-center p-5 -mt-3 -mb-3">
                    <button
                
                      onClick={post}
                      type="submit"
                      class=" border-transparent text-md font-medium  text-white bg-orange-400 hover:bg-orange-600  w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                    >
                      <b>แก้ไขโพสต์</b>
                    </button>
                  </div>
                </form>

                <div class="flex justify-center p-5">
                  <button
                    onClick={back}
                    type="submit"
                    class=" border-transparent text-md font-medium  text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5 "
                  >
                    <b>ถอยกลับ</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
