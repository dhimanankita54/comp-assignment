import { Button, Dropdown } from "flowbite-react";
import React, { useState } from "react";
import { BsStar, BsStars } from "react-icons/bs";
import { CgSoftwareDownload } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  HiDotsVertical,
  HiOutlineFilter,
  HiOutlineTrash,
} from "react-icons/hi";
import { LuColumns3, LuRows3 } from "react-icons/lu";
import { PiShareNetworkBold } from "react-icons/pi";
import { TbArrowsSort } from "react-icons/tb";
import EnrichBtn from "../../common/components/EnrichBtn";

const TableHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-6 px-5 flex items-center justify-between gap-5 lg:gap-0">
      {/* -----------left div---------- */}
      <div className="flex items-center justify-center gap-2 lg:gap-5">
        {/* -----------input------- */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FaMagnifyingGlass className="text-gray-800" />
          </div>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 ps-10 border py-2 px-3 border-gray-300 placeholder:text-gray-500 font-inter placeholder:font-inter text-gray-500 text-sm rounded-lg focus:ring-0 focus:border focus:border-gray-300 block w-[150px] lg:w-[364px]"
            placeholder="Search"
          />
        </div>
        {/* ------------- */}

        <div className="items-center gap-5 hidden lg:flex">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <LuRows3 className="text-gray-800" />
            <p className="text-gray-800 font-inter text-xs font-medium">
              1/1 Row
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <LuColumns3 className="text-gray-800" />
            <p className="text-gray-800 font-inter text-xs font-medium">
              3/3 Column
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <HiOutlineFilter className="text-gray-800" />
            <p className="text-gray-800 font-inter text-xs font-medium">
              0 Filter
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <TbArrowsSort className="text-gray-800" />
            <p className="text-gray-800 font-inter text-xs font-medium">Sort</p>
          </div>
        </div>

        <Dropdown
          className="block lg:hidden"
          label=""
          dismissOnClick={true}
          renderTrigger={() => (
            <span>
              <HiDotsVertical className="cursor-pointer block lg:hidden" />
            </span>
          )}
        >
          <Dropdown.Item>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <LuRows3 className="text-gray-800" />
              <p className="text-gray-800 font-inter text-xs font-medium">
                1/1 Row
              </p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <LuColumns3 className="text-gray-800" />
              <p className="text-gray-800 font-inter text-xs font-medium">
                3/3 Column
              </p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <HiOutlineFilter className="text-gray-800" />
              <p className="text-gray-800 font-inter text-xs font-medium">
                0 Filter
              </p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <TbArrowsSort className="text-gray-800" />
              <p className="text-gray-800 font-inter text-xs font-medium">
                Sort
              </p>
            </div>
          </Dropdown.Item>
        </Dropdown>
      </div>
      {/* --------------- */}

      {/* --------right div----------- */}
      <div className="flex items-center justify-center gap-2 lg:gap-5">
        <EnrichBtn />
        <BsStars className="block lg:hidden cursor-pointer" />
        <PiShareNetworkBold className="text-gray-800 cursor-pointer" />
        <CgSoftwareDownload className="text-gray-800 cursor-pointer" />
        <HiOutlineTrash className="text-red-600 cursor-pointer" />
      </div>
      {/* ------------ */}
    </div>
  );
};

export default TableHeader;
