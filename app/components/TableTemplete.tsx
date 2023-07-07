"use client";

import React, { useState } from "react";
import Image from "next/image";
import addIcon from "public/img/common/addIcon.svg";
import fileUploadIcon from "public/img/common/fileUploadIcon.svg";
import Pagination from "@/components/Pagination.tsx";
import { NotiTable } from "@/notification/components/NotiTable.tsx";
import { EMRdataTable } from "@/emrdata/components/EMRdataTable";
import { AccountTable } from "@/account/components/AccountTable";
import { StatusTable } from "@/status/components/StatusTable";
import { useRouter } from "next/navigation";

const TableTemplete = ({ data, tableName }: any) => {
  const router = useRouter();

  const itemsPerPage = 10; // 페이지당 보여줄 아이템 수
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-[960px] relative">
      {tableName === "NotiTable" && <NotiTable currentItems={currentItems} />}
      {tableName === "AccountTable" && (
        <AccountTable currentItems={currentItems} />
      )}
      {tableName === "EMRdataTable" && (
        <EMRdataTable currentItems={currentItems} />
      )}
      {tableName === "StatusTable" && (
        <StatusTable currentItems={currentItems} />
      )}
      <div className="absolute bottom-[10px]">{`[총 ${data.length}개, 페이지 ${currentPage}/${totalPages}]`}</div>
      <div className="w-full flex justify-center mt-[26px]">
        {/* 페이지네이션 */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="absolute right-0 bottom-[0px]">
        {tableName === "NotiTable" && (
          <button
            onClick={() => router.push("/notification/registration")}
            className="w-[82px] h-[36px] bg-[#7988B8] rounded-md text-white text-[14px] flex items-center justify-center gap-[6px]"
          >
            <Image src={addIcon} alt="add-icon" />
            <span>등록</span>
          </button>
        )}
        {tableName === "AccountTable" && (
          <button
            onClick={() => router.push("/account/registration")}
            className="w-[82px] h-[36px] bg-[#7988B8] rounded-md text-white text-[14px] flex items-center justify-center gap-[6px]"
          >
            <Image src={addIcon} alt="add-icon" />
            <span>등록</span>
          </button>
        )}
        {tableName === "EMRdataTable" && (
          <button className="w-[125px] h-[36px] bg-[#7988B8] rounded-md text-white text-[14px] flex items-center justify-center gap-[6px]">
            <Image src={fileUploadIcon} alt="add-icon" />
            <span>엑셀 업로드</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default TableTemplete;
