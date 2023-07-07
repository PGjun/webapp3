import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <Link href={"/notification"}>
        <button className=" h-[40px] w-[150px] bg-[#7988B8] text-white font-bold rounded-lg">
          긴급공지 관리
        </button>
      </Link>
      <Link href={"/account"}>
        <button className=" h-[40px] w-[150px] bg-[#7988B8] text-white font-bold rounded-lg">
          계정 관리
        </button>
      </Link>
      <Link href={"/emrdata"}>
        <button className=" h-[40px] w-[150px] bg-[#7988B8] text-white font-bold rounded-lg">
          데이터 관리
        </button>
      </Link>
      <Link href={"/status"}>
        <button className=" h-[40px] w-[150px] bg-[#7988B8] text-white font-bold rounded-lg">
          처치 현황
        </button>
      </Link>
    </main>
  );
}
