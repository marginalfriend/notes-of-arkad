import { CashflowTable } from "./components/CashflowTable";
import CashflowForm from "./components/CashflowForm";
import { useAppSelector } from "./lib/redux/hooks";

export default function App() {
  const data = useAppSelector((state) => state.cashflow);
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      <CashflowTable data={data.cashflow} />
      <div className="col-span-2">
        <CashflowForm />
      </div>
    </div>
  );
}
