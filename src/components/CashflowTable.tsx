import { TableData } from "../lib/custom-types";
import { rupiahConverter } from "../lib/utils";
import {
  TableBody,
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";

export function CashflowTable({ data }: { data: TableData[] }) {
  return (
    <div className="col-span-3 border shadow h-screen overflow-x-auto">
      <Table>
        <TableCaption>Your Financial Activity</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black">Description</TableHead>
            <TableHead className="text-black">Subject</TableHead>
            <TableHead className="text-black">Amount</TableHead>
            <TableHead className="text-black">Status</TableHead>
            <TableHead className="text-black">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d) => {
            return (
              <TableRow key={d.subject}>
                <TableCell>{d.description}</TableCell>
                <TableCell>{d.subject}</TableCell>
                <TableCell>{rupiahConverter(d.amount)}</TableCell>
                <TableCell>{d.status}</TableCell>
                <TableCell>
                  {d.date.toLocaleDateString('en-US', {dateStyle: "medium"})}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
