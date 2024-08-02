// ExportToExcelButton.js
import React from "react";
import { utils, writeFile } from "xlsx";

const ExportToExcel = ({ data, filename, sheetname }) => {
  const exportToExcel = () => {
    const workbook = utils.book_new();
    const worksheet = utils.json_to_sheet(data);

    utils.book_append_sheet(workbook, worksheet, sheetname);
    writeFile(workbook, filename);
  };

  return (
    <button
      onClick={exportToExcel}
      className="px-4 py-2 mb-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
    >
      Export to Excel
    </button>
  );
};

export default ExportToExcel;
