import { ArkadTable } from "./components/CashflowTable";
import IncomeForm from "./components/CashflowForm";
import { useAppSelector } from "./lib/redux/hooks";

export default function App() {
  const data = useAppSelector((state) => state.cashflow);
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      <ArkadTable data={data.cashflow} />
      <div className="col-span-2">
        <IncomeForm />
      </div>
    </div>
  );
}
