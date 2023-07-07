import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen text-[14px] font-bold">
      <div className="flex flex-col items-center justify-between bg-white w-[330px] h-[150px] rounded-xl shadow-lg">
        <div className="flex items-end text-[12px] gap-[30px] h-[50px] border mt-[20px]">
          <div>액티비티 & 체험</div>
          <div>호텔</div>
          <div>교통</div>
          <div>렌터카</div>
        </div>

        <Link href={"/notification"}>
          <button className="h-[40px] w-[300px] bg-slate-100  rounded-xl mb-[15px]">
            모든 카테고리
          </button>
        </Link>
      </div>
    </main>
  );
}
