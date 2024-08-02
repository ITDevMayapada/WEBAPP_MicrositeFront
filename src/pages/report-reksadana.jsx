import React, { useEffect, useState } from "react";
import Modal from "../components/Elements/Modal/Modal";
import ExportToExcel from "../components/Elements/ExportToExcel/ExportToExcel";
import Pagination from "../components/Elements/Pagination/Pagination";

const ReportReksadana = () => {
  const initialdata = [
    {
      id: 1,
      name: "Vincent Sandrya",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang sudirman",
      isNTB: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 2,
      name: "Vincent Sandrya",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang sudirman",
      isNTB: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 3,
      name: "Vincent Sandrya",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang sudirman",
      isNTB: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 4,
      name: "Vincent Sandrya",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang sudirman",
      isNTB: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 5,
      name: "Vincent Sandrya",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang sudirman",
      isNTB: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 6,
      name: "Vincent Sandrya",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang sudirman",
      isNTB: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 7,
      name: "Vincent Sandrya",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang sudirman",
      isNTB: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 8,
      name: "Vincent Sandrya",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang sudirman",
      isNTB: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 9,
      name: "Vincent Sandrya",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang sudirman",
      isNTB: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 10,
      name: "Vincent Sandrya",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang sudirman",
      isNTB: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 11,
      name: "Vincent Sandrya 11",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang pontianak",
      isNTB: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
    {
      id: 12,
      name: "Vincent Sandrya 12",
      noHP: "08141414141",
      email: "27N8h@example.com",
      branch: "cabang medan",
      isNTB: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
    },
  ];

  //   0. define variable
  const [reksadanas, setReksadana] = useState(initialdata);
  const [filteredReksa, setFilteredReksa] = useState(initialdata);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filterText, setFilterText] = useState("");

  //   1. GET list reksadana if API is already

  //   const token = localStorage.getItem("token");

  // useEffect(() => {
  //   axios.get('https://api.example.com/data'{
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   })
  //     .then(response => {
  //       setData(response.data);
  //       setFilteredData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // 2. Handle filter logic
  useEffect(() => {
    const filtered = reksadanas.filter(
      (item) =>
        item.name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.noHP.toLowerCase().includes(filterText.toLowerCase()) ||
        item.email.toLowerCase().includes(filterText.toLowerCase()) ||
        item.branch.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredReksa(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [filterText, reksadanas]);

  // 3. Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageItems = filteredReksa.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Report Reksa Dana
        </h2>

        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          List Leads Application Reksa Dana
        </h4>
        <div className="flex flex-wrap mb-2">
          <div className="mr-2">
            <input
              type="text"
              placeholder="Search..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="block mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            />
          </div>
          <div className="mr-2">
            <ExportToExcel
              data={filteredReksa}
              filename="report-reksadana.xlsx"
              sheetname="leads reksadana"
            />
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-center text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">No HP</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Cabang</th>
                  <th className="px-4 py-3">NTB</th>
                  <th className="px-4 py-3">Created Date</th>
                  <th className="px-4 py-3">Created By</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {currentPageItems.map((reksadana) => (
                  <tr
                    className="text-gray-700 dark:text-gray-400"
                    key={reksadana.id}
                  >
                    <td className="px-4 py-3 text-sm">{reksadana.name}</td>
                    <td className="px-4 py-3 text-sm">{reksadana.noHP}</td>
                    <td className="px-4 py-3 text-sm">{reksadana.email}</td>
                    <td className="px-4 py-3 text-sm">{reksadana.branch}</td>
                    <td className="px-4 py-3 text-xs">
                      {reksadana.isNTB ? (
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Yes
                        </span>
                      ) : (
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                          No
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {reksadana.createdDate}
                    </td>
                    <td className="px-4 py-3 text-sm">{reksadana.createdBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredReksa.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </main>
  );
};

export default ReportReksadana;
