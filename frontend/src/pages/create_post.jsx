import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import Footers from "../components/Footer";
import FormCreatePost from "../components/FormCreatePost";
import TabMenu from "../components/TabMenu";

const URL = "http://localhost:4000";

export default function TeacherCreate() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("status")){
      navigate(`/Error`)
    }
    else{
      if(localStorage.getItem("status") == "นักเรียน"){
        navigate(`/Error`)
      }
      if(localStorage.getItem("status") == "ครู"){
      }
      if(localStorage.getItem("status") == "admin"){
      }
    }
  },[])
  // const Navigate = useNavigate();

  // const [headerValue, setHeaderValue] = useState();
  // const [textbodyValue, setTextbodyValue] = useState();
  // const [urlValue, seturlValue] = useState();
  // const [datestartValue, setDateStartValue] = useState();
  // const [dateendValue, setDateEndValue] = useState();
  // const [selectedValue, setSelectedValue] = useState([]);

  // const [progress, setProgress] = useState();
  // const formatDate = Moment().format("YYYY-MM-DD");

  // const ChangeHeader = (e) => {
  //   setHeaderValue(e.target.value);
  // };

  // const ChangeTextBody = (e) => {
  //   setTextbodyValue(e.target.value);
  // };

  // const filechange = (e) => {
  //   e.preventDefault();
  //   const file = e.target.files[0];
  //   PostToDatabase(file);
  // };

  // const PostToDatabase = (file) => {
  //   if (!file) return;
  //   const storageRef = ref(storage, `/files/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const prog = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(prog);
  //     },
  //     (err) => console.log(err),
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //         seturlValue(url);
  //       });
  //     }
  //   );
  // };

  // const DateStartChange = (e) => {
  //   setDateStartValue(e.target.value);
  // };
  // const DateEndChange = (e) => {
  //   setDateEndValue(e.target.value);
  // };

  // const ChangeSelect = (e) => {
  //   setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  // };

  // const post = () => {
  //   if (!urlValue) {
  //     alert("no pass");
  //   } else {
  //     alert("ทำการโพสต์สำเร็จแล้ว");
  //     console.log(
  //       "header: " +
  //         " " +
  //         JSON.stringify(headerValue) +
  //         " " +
  //         "textbody: " +
  //         " " +
  //         JSON.stringify(textbodyValue) +
  //         " " +
  //         "images: " +
  //         " " +
  //         JSON.stringify(urlValue) +
  //         " " +
  //         "datestart: " +
  //         " " +
  //         JSON.stringify(datestartValue) +
  //         " " +
  //         "dateend: " +
  //         " " +
  //         JSON.stringify(dateendValue) +
  //         " " +
  //         "type: " +
  //         JSON.stringify(selectedValue, null, 2)
  //     );
  //     const Alldata = {
  //       header: headerValue,
  //       description: textbodyValue,
  //       imageURL: urlValue,
  //       start_time: datestartValue,
  //       end_time: dateendValue,
  //       seepost: selectedValue,
  //     };
  //     axios.post(URL + "/create_post", Alldata);
  //     Navigate("/home");
  //   }

  //   // Upload Database Mongodb
  //   // const data = {
  //   //   name: 'test02',
  //   //   email: 'test02@gmail.com',
  //   //   age:'1000'
  //   // }

  //   // axios.post(URL+'/home',data)
  // };

  return (
    <>
      <div class="bg-gradient-to-b from-purple-600 to-blue-600 ">
        <div>
          <div class="pl-[12rem] pr-[12rem] pb-[5rem]">
            <div class="shadow-2xl ">
              <Appbar />
              <TabMenu />
              <div class=" bg-white p-5">
                <div class=" border">
                  <FormCreatePost />
                </div>
                {/* <div class="basis-1">
                  <AllType />
                  <div class="basis-1 mb-[5rem]">
                    <Calendar />
                  </div>
                </div> */}
              </div>
              <div>
                <Footers />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div>
          <Appbar />
        </div>
        <div class="pt-[5rem] pb-[5rem] pl-[20rem] pr-[20rem] bg-blue-200 h-full">
          <div class="h-auto bg-white p-10 shadow-xl ">
            <div class="text-5xl">
              <b>สร้างโพสต์</b>
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
                    class=" border-transparent text-md font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                  >
                    <b>โพสต์</b>
                  </button>
                </div>
              </form>

              <div class="flex justify-center">
                <button
                  onClick={back}
                  class=" border-transparent text-md font-medium  text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 w-[10rem] h-[3rem] border-2 shadow-xl rounded-lg  p-1.5"
                >
                  <b>ถอยกลับ</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

// import React from 'react'

// export default function create_post() {
//   return (
//     <div>
//       <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
//         <div class="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
//             <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
//                 <div class="flex items-center space-x-1 sm:pr-4">
//                     <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
//                         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
//                     </button>
//                     <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
//                         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
//                     </button>
//                     <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
//                         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
//                     </button>
//                     <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
//                         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                     </button>
//                     <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
//                         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
//                     </button>
//                 </div>
//                 <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
//                     <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
//                         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//                     </button>
//                     <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
//                         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
//                     </button>
//                     <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
//                         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
//                     </button>
//                     <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
//                         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                     </button>
//                 </div>
//             </div>
//             <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
//                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
//             </button>
//             <div id="tooltip-fullscreen" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
//                 Show full screen
//                 <div class="tooltip-arrow" data-popper-arrow></div>
//             </div>
//         </div>
//         <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
//             <label for="editor" class="sr-only">Publish post</label>
//             <textarea id="editor" rows="8" class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
//         </div>
//     </div>
//     <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
//         Publish post
//     </button>

//     </div>
//   )
// }
