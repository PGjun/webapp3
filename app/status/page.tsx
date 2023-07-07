import TableTemplete from "@/components/TableTemplete.tsx";
import { statusData } from "@/dummyData.tsx";

export default function Status() {
  // api호출
  return (
    <main className="my-[98px]">
      <TableTemplete data={statusData} tableName={"StatusTable"} />
    </main>
  );
}
