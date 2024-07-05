import { CashflowTable } from "../components/CashflowTable";
import CashflowForm from "../components/CashflowForm";
import { useAppSelector } from "../lib/hooks/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const data = useAppSelector((state) => state.cashflow);
	const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") navigate("/login")
  }, [navigate]);

  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      <CashflowTable data={data.cashflow} />
      <div className="col-span-2">
        <CashflowForm />
      </div>
    </div>
  );
}
