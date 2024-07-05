import { TableData } from "../lib/custom-types";
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
    <div className="col-span-3 border h-screen overflow-x-auto">
      <Table>
        <TableCaption>Your Financial Activity</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d) => {
            return (
              <TableRow key={d.subject}>
                <TableCell>{d.description}</TableCell>
                <TableCell>{d.subject}</TableCell>
                <TableCell>{d.amount}</TableCell>
                <TableCell>{d.status}</TableCell>
                {/* <TableCell>
                  {d.date.toString()}
                </TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
