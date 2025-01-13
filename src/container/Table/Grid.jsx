import React, { useEffect, useRef, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import image from "../../assets/images/image.svg";
import image2 from "../../assets/images/image54.svg";
import { FaPlus } from "react-icons/fa";
import "./index.css";
import { FiAlertTriangle } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { TbLoader } from "react-icons/tb";
import googleLogo from "../../assets/images/google.svg";
import bitscale from "../../assets/images/bitscale.svg";
import figma from "../../assets/images/figma.svg";
import logo from "../../assets/images/Logomark.svg";
import bmw from "../../assets/images/Content.svg";

const Grid = () => {
  const [extraColumns, setExtraColumns] = useState([]); // To track dynamically added columns
  const tableContainerRef = useRef(null);
  const [rows, setRows] = useState([
    {
      input: "Oct 12, 2024 at 14:08 PM",
      icon: "",
      action: "Bitscale Evaluation - Account relevancy check.csv",
      enrichCompany: "Bitscale Evaluation - Account relevancy check.csv",
      editable: false,
      logo: bitscale,
      type: "info",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      icon: <FiAlertTriangle className="text-red-500" />,
      action: "cell data size exceeds limit",
      enrichCompany: "BMW Evaluation - Relevancy check.csv",
      editable: false,
      logo: bmw,
      type: "error",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      icon: <LuExternalLink className="text-blue-600" />,
      action: "https://www.linkedIn.com/bitScale.ai/sample",
      enrichCompany: "Google Evaluation - Lilevancy check.csv",
      editable: false,
      logo: googleLogo,
      type: "link",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      icon: <TbLoader className="text-gray-500" />,
      action: "Loading data, Please wait",
      enrichCompany: "Apple Evaluation - Olvancy check.csv",
      editable: false,
      logo: logo,
      type: "error",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      icon: <TbLoader className="text-gray-500" />,
      action: "Loading data, Please wait",
      enrichCompany: "Figma Evaluation - Evancy check.csv",
      editable: false,
      logo: figma,
      type: "error",
    },
  ]);

  const addRow = () => {
    const newRow = {
      input: "",
      icon: "",
      action: "",
      enrichCompany: "",
      editable: true,
      ...extraColumns.reduce((acc, col) => {
        acc[col] = "";
        return acc;
      }, {}),
    };
    setRows([...rows, newRow]);
  };

  const addColumn = () => {
    const newColumnName = `New Column ${extraColumns.length + 1}`;
    setExtraColumns([...extraColumns, newColumnName]);

    // Update rows to include the new column with default empty values
    setRows(rows.map((row) => ({ ...row, [newColumnName]: "" })));
  };

  const [placeholderRows, setPlaceholderRows] = useState(0);

  useEffect(() => {
    const calculatePlaceholderRows = () => {
      if (!tableContainerRef.current) return 0;

      const containerHeight = tableContainerRef.current.offsetHeight; // Total container height
      const rowHeight = 42; // Approximate height of one row in pixels (adjust if needed)
      const renderedRowsHeight = rows.length * rowHeight;

      const remainingHeight = containerHeight - renderedRowsHeight;
      return Math.max(Math.floor(remainingHeight / rowHeight), 0); // Number of placeholders
    };

    const updatePlaceholderRows = () => {
      setPlaceholderRows(calculatePlaceholderRows());
    };

    // Run calculation on mount and whenever rows or container change
    updatePlaceholderRows();

    // Recalculate on window resize
    window.addEventListener("resize", updatePlaceholderRows);

    return () => {
      window.removeEventListener("resize", updatePlaceholderRows);
    };
  }, [rows]);

  return (
    <div className="bg-[#F6F6F6] h-full">
      <div ref={tableContainerRef} className="overflow-x-auto h-[77vh]">
        <table className="min-w-full border-collapse border border-gray-100">
          {/* Table Header */}
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-100 px-3 py-1.5 font-medium font-inter text-sm text-left"></th>
              <th className="border border-gray-100 px-3 py-1.5 font-medium font-inter text-sm text-left"></th>
              <th className="border border-gray-100 bg-[#FEF2C7] px-3 py-1.5 font-medium font-inter text-sm text-left">
                <div className="flex items-center gap-1">
                  <p className="bg-black text-white w-fit px-1">A</p>
                  <span>Input Column</span>
                </div>
              </th>
              <th className="border border-gray-100 px-3 py-1.5 font-medium font-inter text-sm text-left">
                <div className="flex items-center gap-1">
                  <img src={image} className="w-4 h-4" alt="icon" />
                  <span>Action Column</span>
                </div>
              </th>
              <th className="border border-gray-100 px-3 py-1.5 font-medium font-inter text-sm text-left">
                <div className="flex items-center gap-1">
                  <img src={image2} className="w-4 h-4" alt="icon" />
                  <span>Enrich Company</span>
                </div>
              </th>
              {extraColumns.map((col, index) => (
                <th
                  key={index}
                  className="border border-gray-100 px-3 py-1.5 font-medium font-inter text-sm text-left"
                >
                  {col}
                </th>
              ))}
              <th className="border border-gray-100 px-3 py-1.5 font-medium font-inter text-sm text-left">
                <button
                  onClick={addColumn}
                  className="text-gray-800 font-inter text-sm flex gap-1 items-center justify-center"
                >
                  <FaPlus />
                  Add Column
                </button>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 bg-white font-inter">
                <td className="border border-gray-100 px-1 py-1.5 w-10 min-w-10 text-sm">
                  {index + 1}
                </td>
                <td className="border border-gray-100 px-0 py-1.5 w-10 min-w-10 h-full">
                  <div className="flex items-center justify-center">
                    <IoPlayCircleOutline size={24} className="text-blue-600" />
                  </div>
                </td>
                <td
                  className="border border-gray-100 px-3 py-1.5 truncate-cell"
                  title={row.input}
                >
                  <input
                    type="text"
                    value={row.input}
                    className="w-full bg-transparent border-0 p-0 focus:ring-0 focus:outline-none text-gray-700 text-sm truncate-cell"
                    readOnly={!row.editable}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].input = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td
                  title={row.action}
                  className="border border-gray-100 px-3 py-1.5 truncate-cell text-left text-gray-700 text-sm"
                >
                  <div className="flex gap-1 items-center">
                    {row.icon}
                    {row.type === "info" || row.type === "error" ? (
                      <input
                        type="text"
                        value={row.action}
                        className={`w-full bg-transparent border-0 p-0 focus:ring-0 focus:outline-none text-gray-700 text-sm truncate-cell font-medium ${
                          row.type === "error" && "italic font-normal"
                        }`}
                        readOnly={!row.editable} // Editable based on 'editable' field
                        onChange={(e) => {
                          const newRows = [...rows];
                          newRows[index].action = e.target.value;
                          setRows(newRows);
                        }}
                      />
                    ) : (
                      <a
                        className="text-blue-800 truncate-cell underline underline-offset-2 font-inter text-sm font-medium"
                        href={row.action}
                      >
                        {row.action}
                      </a>
                    )}
                  </div>
                </td>
                <td
                  title={row.enrichCompany}
                  className="border border-gray-100 px-3 py-1.5 truncate-cell text-left text-gray-700 text-sm"
                >
                  <div className="flex items-center gap-1">
                    {row.logo && (
                      <img src={row.logo} className="w-4 h-4" alt="icon" />
                    )}
                    <input
                      type="text"
                      value={row.enrichCompany}
                      className="w-full bg-transparent border-0 p-0 focus:ring-0 focus:outline-none text-gray-700 text-sm truncate-cell"
                      readOnly={!row.editable} // Editable based on 'editable' field
                      onChange={(e) => {
                        const newRows = [...rows];
                        newRows[index].enrichCompany = e.target.value;
                        setRows(newRows);
                      }}
                    />
                  </div>
                </td>

                {extraColumns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    title={row[col]}
                    className="border border-gray-100 px-3 py-1.5 text-left text-gray-700 text-sm truncate-cell"
                  >
                    <input
                      type="text"
                      value={row[col]}
                      className="w-full bg-transparent border-0 p-0 focus:ring-0 focus:outline-none text-gray-700 text-sm truncate-cell"
                      onChange={(e) => {
                        const newRows = [...rows];
                        newRows[index][col] = e.target.value;
                        setRows(newRows);
                      }}
                    />
                  </td>
                ))}
                <td className="border border-gray-100 px-3 py-1.5 text-center"></td>
              </tr>
            ))}
            <tr className="bg-[#F6F6F6]">
              <td className="border border-gray-100 px-1 py-1.5"></td>
              <td className="border border-gray-100 px-1 py-1.5"></td>
              <td className="border border-gray-100 px-3 py-1.5">
                <button
                  onClick={addRow}
                  className="text-gray-800 font-inter text-sm flex gap-1 items-center justify-center"
                >
                  <FaPlus />
                  Add Row
                </button>
              </td>
              <td className="border border-gray-100 px-1 py-1.5"></td>
              <td colSpan={extraColumns.length + 2}></td>
            </tr>

            {Array.from({ length: placeholderRows }).map((_, index) => (
              <tr
                key={`placeholder-${index}`}
                className="bg-[#F6F6F6] h-9 w-full"
              >
                <td className="border border-gray-100 px-1 py-1.5 w-10 min-w-10 text-sm"></td>
                <td className="border border-gray-100 px-1 py-1.5 w-10 min-w-10 h-full"></td>
                <td className="border border-gray-100 px-3 py-1.5"></td>
                <td className="border border-gray-100 px-3 py-1.5"></td>
                <td className="border border-gray-100 px-3 py-1.5"></td>
                <td className="border border-gray-100 px-3 py-1.5"></td>
                {extraColumns.map((_, colIndex) => (
                  <td
                    key={`placeholder-col-${colIndex}`}
                    className="border border-gray-100 px-3 py-1.5"
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grid;
