"use client";
import { useRouter } from "next/navigation";

import { SelectDate } from "../components/SelectDate";
import { useState } from "react";
export default function Registration() {
  const router = useRouter();
  const [date, setDate] = useState<any>("");

  return (
    <main className="my-[98px]">
      <div className="text-[20px] font-bold">긴급공지 - 등록</div>
      <div className="w-[960px] h-[1px] bg-[#979797] my-[20px]" />
      <section className="flex gap-[40px]">
        <section className="flex flex-col flex-grow gap-[18px]">
          <input
            className=" h-[50px] pl-[9px] border border-[#9B9B9B] outline-[#7988B8]"
            type="text"
            placeholder="*제목을 입력해주세요"
          />
          <section className="space-y-[4px]">
            <div className="text-[#9B9B9B]">*공지기간을 선택해주세요</div>
            <div className="flex items-center gap-[4px]">
              <div className="border border-[#9B9B9B]  h-[50px] px-[8px] flex items-center">
                <SelectDate name={"start_date"} setDate={setDate} />
              </div>
              <div className="mx-[5px] text-[#9B9B9B]">~</div>
              <div className="border border-[#9B9B9B] h-[50px] px-[8px] flex items-center">
                <SelectDate name={"end_date"} setDate={setDate} />
              </div>
            </div>
          </section>

          <textarea
            className=" h-[270px] pl-[9px] pt-[8px] border border-[#9B9B9B] outline-[#7988B8]"
            placeholder="*내용을 입력해주세요"
          />
        </section>
      </section>
      <div className="w-full flex justify-center gap-[20px] text-[14px] my-[35px]">
        <button className="text-white w-[82px] h-[36px] bg-[#7988B8] rounded-md">
          등록
        </button>
        <button
          onClick={() => router.back()}
          className=" w-[82px] h-[36px] bg-[#D9D9D9] rounded-md"
        >
          목록
        </button>
      </div>
    </main>
  );
}
