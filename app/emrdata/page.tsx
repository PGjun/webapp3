import TableTemplete from "@/components/TableTemplete.tsx";
import { emrData } from "@/dummyData.tsx";

export default function EMRdata() {
  // api호출
  return (
    <main className="my-[98px]">
      <TableTemplete data={emrData} tableName={"EMRdataTable"} />
    </main>
  );
}
