import { ArkadTable } from "./components/arkad-table";
import { Status, TableData } from "./custom-types";

export default function App() {
	const dummy:TableData[] = [
		{
			description: "Eat Out",
			subject: "McDonalds",
			amount: 50000,
			status: Status.Paid
		}
	] 
  return (
    <div className="grid grid-cols-5 gap-4">
      <ArkadTable data={dummy} />
    </div>
  );
}
