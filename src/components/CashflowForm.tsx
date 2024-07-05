import { useId } from "react";
import { Status, TransactionType } from "../lib/custom-types";
import { useAppDispatch } from "../lib/redux/hooks";
import { addCashflow } from "../lib/redux/cashflowSlice";
import { AppDispatch } from "../lib/redux/store";
import { init } from "@paralleldrive/cuid2";
import { validateCashflowForm } from "../lib/utils";

const CashflowForm = () => {
  const dispatch: AppDispatch = useAppDispatch();

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = validateCashflowForm(formData);

    if (!data) return;

    const id = init();
    data.id = id();

    dispatch(addCashflow(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full border p-2 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label>Description</label>
          <input
            name="description"
            type="text"
            className="w-full border px-2 py-1"
            placeholder="Short desc"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Subject</label>
          <input
            name="subject"
            type="text"
            className="w-full border px-2 py-1"
            placeholder="Who involved?"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Amount</label>
          <input
            name="amount"
            type="number"
            className="w-full border px-2 py-1"
            placeholder="How much?"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Date</label>
          <input
            name="date"
            type="date"
            className="w-full border px-2 py-1"
            placeholder="When?"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <label>Type</label>
            <select name="type" id="type" className="border px-2 py-1">
              <option value={TransactionType.Expense}>
                {TransactionType.Expense}
              </option>
              <option value={TransactionType.Income}>
                {TransactionType.Income}
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label>Status</label>
            <select name="status" id="type" className="border px-2 py-1">
              <option value={Status.Paid}>{Status.Paid}</option>
              <option value={Status.Pending}>{Status.Pending}</option>
            </select>
          </div>
        </div>

        <input type="hidden" name="id" value={useId()} />

        <button
          type="submit"
          className="w-full bg-slate-300 hover:bg-slate-400 py-1 mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CashflowForm;
