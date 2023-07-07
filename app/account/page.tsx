import TableTemplete from "@/components/TableTemplete.tsx";
import { accountData } from "@/dummyData.tsx";

export default function Account() {
  // api호출
  return (
    <main className="my-[98px]">
      <TableTemplete data={accountData} tableName={"AccountTable"} />
    </main>
  );
}
