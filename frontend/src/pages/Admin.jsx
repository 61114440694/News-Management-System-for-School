import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

export default function Admin() {
  useEffect(() => {}, []);

  const navigate = useNavigate();
  const location = useLocation();

  // const [member, setMember] = useState([]);
  const [Header, setHeader] = useState([]);
  const [Body, setBody] = useState([]);

  const convertjson = (head, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        rowData[head[index]] = element;
      });
      rows.push(rowData);
    });
    console.log(data.length)
    // console.log(rows)
    // setBody(rows);
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
      const head = data[0];
      const heads = head.map((items) => ({ title: items, field: items }));
      setHeader(heads);
      data.splice(0, 1);
      convertjson(head, data);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <>
      <div className="flex flex-col bg-blue-500 h-screen">
        <div className="flex justify-center mt-10">
          <h1 className="text-2xl">
            <b>รายชื่อสมาชิก</b>
          </h1>
        </div>
        <div></div>
        <div className="flex flex-col justify-center mt-10">
          <table className="table-auto w-full ">
            <thead className="flex flex-row justify-center ml-[41rem] mr-[41rem] ">
              {Header.map((items) => (
                <div>
                  <tr className="flex justify-start bg-white border  border-black w-56 px-3 py-4">
                    <th>{items.title}</th>
                  </tr>
               </div>
              ))}
            </thead>
            <tbody className="flex flex-col ml-[41rem] mr-[41rem]">
              {Body.map((items) => (
                <div className="flex flex-row justify-start">
                  <td className="flex flex-col justify-start bg-white border border-black w-56 px-3 py-4">
                    <tr>{items.Number}</tr>
                  </td>
                  <td className="flex flex-col justify-start bg-white border border-black w-56 px-3 py-4">
                    <tr>{items.Fullname}</tr>
                  </td>
                  <td className="flex flex-col justify-start bg-white border border-black w-56 px-3 py-4">
                    <tr>{items.Email}</tr>
                  </td>
                </div>
              ))}
            </tbody>
          </table>
        </div>

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
      </div>
    </>
  );
}
