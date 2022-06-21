import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

import axios from "axios";
const URL = "http://localhost:4000";

function createData(number, fullname, email, password, status) {
  return { number, fullname, email, password, status };
}

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation();

  // const [member, setMember] = useState([]);
  const Header = [
    {
      title: "No.",
    },
    {
      title: "Fullname",
    },
    {
      title: "Email",
    },
    {
      title: "Password",
    },
    {
      title: "Status",
    },
  ];

  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL + "/member/member").then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    });
  }, []);

  const convertjson = (data) => {
    const list = []
    data.map((items) => {
      let password = generatePassword();
      list.push( {
        fullname: items[0],
        email: items[1],
        password: password,
        status: true,
      })
      
      // setBody((a) => [
      //   ...a,
      //   createData(items[0], items[1], items[2], password, true),
      // ]);
    });
    const dataMember = {
      data : list
    }
    axios.post(URL + "/member/addmember", dataMember).then((res)=>{
      axios.get(URL + "/member/member").then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      });
    });
  };

  const generatePassword = () => {
    var lengthcharBig = 1,
      lengthcharSmall = 3,
      lengthcharNumber = 4,
      charBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      charSmall = "abcdefghijklmnopqrstuvwxyz",
      charNumber = "0123456789",
      bigchar = "",
      smallchar = "",
      numberchar = "";

    for (var i = 0, n = charBig.length; i < lengthcharBig; ++i) {
      bigchar += charBig.charAt(Math.floor(Math.random() * n));
    }
    for (var i = 0, n = charSmall.length; i < lengthcharSmall; ++i) {
      smallchar += charSmall.charAt(Math.floor(Math.random() * n));
    }
    for (var i = 0, n = charNumber.length; i < lengthcharNumber; ++i) {
      numberchar += charNumber.charAt(Math.floor(Math.random() * n));
    }

    const randomPassword = bigchar + smallchar + numberchar;
    return randomPassword;
  };

  const onChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      // const head = data[0];
      // const heads = head.map((items) => ({ title: items, field: items }));
      // setHeader(heads);
      data.splice(0, 1);
      convertjson(data);
    };
    reader.readAsBinaryString(file);
  };

  const logout = () => {
    navigate(`/login`)
  }

  // const AddDatabase = () => {};

  return (
    <>
      <div className="flex flex-col bg-gradient-to-r from-sky-500  to-blue-700 h-screen w-screen">
        <div className="flex justify-center mt-5">
          _____________________________________________________________________
        </div>

        <div className="flex justify-center mt-10">
          <input
            className="border rounded-lg p-2 shadow-2xl bg-white"
            type="file"
            onChange={onChange}
            accept={".xlsx"}
          />
        </div>

        <div>
          <div className="flex justify-center mt-10">
            <h1 className="text-2xl">
              <b className="text-white text-[2rem]">รายชื่อสมาชิก</b>
            </h1>
          </div>
          <div></div>
          <div className="flex flex-col justify-center mt-10">
            <table className="table-auto w-full">
              <thead className="flex flex-row justify-center">
                {Header.map((items) => (
                  <div>
                    <tr className="flex justify-start bg-white border  border-black w-56 px-3 py-4">
                      <th>{items.title}</th>
                    </tr>
                  </div>
                ))}
              </thead>
              <tbody className="flex flex-col">
                {Data.map((items, index) => (
                  <div key={index} className="flex flex-row justify-center">
                    <td className="flex flex-col justify-start bg-white border border-black w-56 px-3 py-4">
                      <tr>{index+1}</tr>
                    </td>
                    <td className="flex flex-col justify-start bg-white border border-black w-56 px-3 py-4">
                      <tr>{items.fullname}</tr>
                    </td>
                    <td className="flex flex-col justify-start bg-white border border-black w-56 px-3 py-4">
                      <tr>{items.email}</tr>
                    </td>
                    <td className="flex flex-col justify-start bg-white border border-black w-56 px-3 py-4">
                      <tr>{items.password}</tr>
                    </td>
                    <td className="flex flex-col justify-start bg-white border border-black w-56 px-3 py-4">
                      {items.status ? <tr>true</tr> : <tr>false</tr>}
                    </td>
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex justify-center mt-10">
        <button onClick={logout} class="text-white bg-gradient-to-br from-blue-500 p-3 pl-5 pr-5 rounded-lg hover:bg-gradient-to-t hover:from-blue-900" type="button">
          ออกจากระบบ
        </button>
      </div>
      </div>

      
    </>
  );
}
