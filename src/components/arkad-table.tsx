import { TableData } from "../custom-types";
import {
  TableBody,
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";

export function ArkadTable({ data }: { data: TableData[] }) {
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
          {data.map((data) => {
            return (
              <TableRow>
                <TableCell>{data.description}</TableCell>
                <TableCell>{data.subject}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>{data.date.toLocaleDateString('en-US', {dateStyle: 'medium'})}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
