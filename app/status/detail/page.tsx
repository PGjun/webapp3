"use client";
import { useRouter } from "next/navigation";

export default function StatusDetail() {
  const router = useRouter();
  return (
    <main className="mt-[98px]">
      <div className="text-[20px] font-bold">정맥주사 처치 현황</div>
      <div className="w-[960px] h-[1px] bg-[#979797] my-[20px]" />
      <div className="w-[960px] text-[14px]">
        <section className="flex justify-between">
          <section>
            <div className="w-[468px]">
              <div className=" text-[#7988B8] font-bold  bg-[#F5F8FF] pl-[13px] h-[40px] rounded-lg flex items-center">
                환자기본정보
              </div>
              <table className="w-[453px] ml-[15px]">
                <thead>
                  <tr className="border-b ">
                    <td className="text-[#71787E] w-[150px] h-[50px]">
                      ID/성명/성별/나이
                    </td>
                    <td>Abcdefg/홍길동/남/33</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b ">
                    <td className="text-[#71787E] h-[38px]">입원일</td>
                    <td>2021.11.16</td>
                  </tr>
                  <tr className="border-b ">
                    <td className="text-[#71787E] h-[38px]">입원사유</td>
                    <td>입원사유</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-[468px] mt-[34px]">
              <div className=" text-[#7988B8] font-bold  bg-[#F5F8FF] pl-[13px] h-[40px] rounded-lg flex items-center">
                주사처방전
              </div>
              <table className="w-[453px] ml-[15px]">
                <thead>
                  <tr className="border-b ">
                    <td className="text-[#71787E] w-[150px] h-[50px]">
                      처방일
                    </td>
                    <td>2023.07.07</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b ">
                    <td className="text-[#71787E] h-[38px]">수액명</td>
                    <td>Abcdef</td>
                  </tr>
                  <tr className="border-b ">
                    <td className="text-[#71787E] h-[38px]">
                      용량/단위/주입속도
                    </td>
                    <td>150cc, 주입속도</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <div className="w-[468px]">
              <div className=" text-[#7988B8] font-bold  bg-[#F5F8FF] pl-[13px] h-[40px] rounded-lg flex items-center">
                정맥주사 삽입 기록
              </div>
              <div className="w-[453px] ml-[15px]">
                <div className="border-b flex items-center h-[50px]">
                  <div className="text-[#71787E] w-[90px]">일시</div>
                  <div>2023.07.07</div>
                </div>
                <div className="border-b flex items-center h-[38px]">
                  <div className="text-[#71787E] w-[90px]">부위</div>
                  <div>Rt, Arm</div>
                </div>
                <div className="border-b flex items-center h-[38px]">
                  <div className="text-[#71787E] w-[90px]">바늘크기</div>
                  <div>24G</div>
                </div>
                <div className="border-b flex items-center h-[38px]">
                  <div className="text-[#71787E] w-[90px]">처치재료</div>
                  <div>성인용tegaderm, catheter site dressing</div>
                </div>
                <div className="border-b flex items-center h-[38px]">
                  <div className="text-[#71787E] w-[90px]">기타업무</div>
                  <div>일반채혈, 삽입부위 dressing</div>
                </div>
                <div className="border-b flex h-[120px]">
                  <div className="text-[#71787E] w-[62px] h-full flex items-center">
                    혈관상태
                  </div>
                  <div className="border-x h-full w-[70px] text-[#71787E]">
                    <div className="h-[40px] flex items-center pl-[5px]">
                      DVA
                    </div>
                    <div className="h-[40px] flex items-center pl-[5px]">
                      시도횟수
                    </div>
                    <div className="h-[40px] flex items-center pl-[5px]">
                      삽입방법
                    </div>
                  </div>
                  <div className="h-full flex-grow">
                    <div className="border-b h-[40px] flex items-center pl-[5px]">
                      Y
                    </div>
                    <div className="border-b h-[40px] flex items-center pl-[5px]">
                      1(회)
                    </div>
                    <div className=" h-[40px] flex items-center pl-[5px]">
                      USG PIV
                    </div>
                  </div>
                </div>
                <div className="border-b flex items-center h-[38px]">
                  <div className="text-[#71787E] w-[90px]">DVA분류</div>
                  <div>기질적 요인</div>
                </div>
                <div className="border-b flex">
                  <div className="text-[#71787E] w-[90px] h-[120px] pt-[10px]">
                    추가기록
                  </div>
                  <div className="pt-[10px] w-[350px] h-[120px] overflow-auto">
                    추가기록 내용
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="w-full flex justify-center my-[51px]">
          <button
            onClick={() => router.back()}
            className="w-[82px] h-[36px] bg-[#D9D9D9] rounded-md"
          >
            목록
          </button>
        </div>
      </div>
    </main>
  );
}
