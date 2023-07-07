"use client";
import { useRouter } from "next/navigation";

export default function Registration() {
  const router = useRouter();
  return (
    <main className="my-[98px]">
      <div className="text-[20px] font-bold">계정 관리 - 등록</div>
      <div className="w-[960px] h-[1px] bg-[#979797] my-[20px]" />
      <section className="flex gap-[40px]">
        <section className="space-y-[23px]">
          <div>
            <span className="text-[#E25252]">*</span>권한유형
          </div>
          <div>
            <span className="text-[#E25252]">*</span>이름
          </div>
          <div>
            <span className="text-[#E25252]">*</span>아이디
          </div>
          <div>부서</div>
          <div>전화번호</div>
          <div>이메일</div>
          <div>비고</div>
        </section>
        <section className="flex flex-col flex-grow gap-[4px]">
          <div className="mb-[13px] text-[14px] flex gap-[24px]">
            <div className="flex items-center gap-[5px]">
              <input
                className="cursor-pointer"
                type="radio"
                id="option1"
                name="options"
              />
              <label htmlFor="option1">시스템 관리자</label>
            </div>
            <div className="flex items-center gap-[5px]">
              <input
                className="cursor-pointer"
                type="radio"
                id="option2"
                name="options"
              />
              <label htmlFor="option2">운영자</label>
            </div>
            <div className="flex items-center gap-[5px]">
              <input
                className="cursor-pointer"
                type="radio"
                id="option3"
                name="options"
              />
              <label htmlFor="option3">간호사</label>
            </div>
          </div>
          <input
            className="w-[300px] h-[42px] pl-[9px] border border-[#9B9B9B] outline-[#7988B8]"
            type="text"
            placeholder="이름을 입력해주세요(필수)"
          />
          <div className="space-x-[4px]">
            <input
              className="w-[300px] h-[42px] pl-[9px] border border-[#9B9B9B] outline-[#7988B8]"
              type="text"
              placeholder="아이디를 입력해주세요(필수)"
            />
            <button className="text-[14px] w-[68px] h-[36px] bg-[#F7F7F7] border border-[#979797] rounded-md">
              중복체크
            </button>
          </div>
          <input
            className=" h-[42px] pl-[9px] border border-[#9B9B9B] outline-[#7988B8]"
            type="text"
            placeholder="부서를 입력해주세요"
          />
          <input
            className=" h-[42px] pl-[9px] border border-[#9B9B9B] outline-[#7988B8]"
            type="text"
            placeholder="전화번호를 입력해주세요"
          />
          <input
            className=" h-[42px] pl-[9px] border border-[#9B9B9B] outline-[#7988B8]"
            type="text"
            placeholder="이메일을 입력해주세요"
          />
          <textarea
            className=" h-[270px] pl-[9px] pt-[8px] border border-[#9B9B9B] outline-[#7988B8]"
            placeholder="입력해주세요"
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
