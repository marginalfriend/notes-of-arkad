import { ArkadTable } from "./components/arkad-table";
import IncomeForm from "./components/income-form";
import { Status, TableData } from "./custom-types";

export default function App() {
	const dummy:TableData[] = [
		{
			description: "Eat Out",
			subject: "McDonalds",
			amount: 50000,
			status: Status.Paid,
			date: new Date()
		},
		{
			description: "Eat Out",
			subject: "McDonalds",
			amount: 50000,
			status: Status.Paid,
			date: new Date()
		},
		{
			description: "Eat Out",
			subject: "McDonalds",
			amount: 50000,
			status: Status.Paid,
			date: new Date()
		}
	] 
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      <ArkadTable data={dummy} />
			<div className="col-span-2">
				<IncomeForm />
			</div>
    </div>
  );
}
