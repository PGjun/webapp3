import { useRouter } from "next/navigation";

export const StatusTable = ({ currentItems }: any) => {
  const router = useRouter();
  return (
    <>
      <div className="font-bold text-[20px] mb-[20px]">정맥주사 처치 현황</div>
      <table className="w-full">
        <thead>
          <tr className="h-[30px] text-[12px] border-y border-[#979797] text-center">
            <td>번호</td>
            <td>환자명</td>
            <td>위치</td>
            <td>입원사유</td>
            <td>담당의사</td>
            <td>처방일자</td>
            <td>처치 간호사</td>
            <td>처치일자</td>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item: any) => (
            <tr
              key={item.id}
              className="h-[48px] text-[14px] text-center border-b border-[#D8D8D8] cursor-pointer hover:bg-[#F5F8FF]"
              onClick={() => router.push(`/status/detail?id=${item.id}`)}
            >
              <td className="text-[12px] text-[#979797]">{item.column1}</td>
              <td>{item.column2}</td>
              <td>{item.column3}</td>
              <td>{item.column4}</td>
              <td>{item.column5}</td>
              <td>{item.column6}</td>
              <td>{item.column7}</td>
              <td>{item.column8}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
