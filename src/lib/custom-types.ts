export type TableData = {
	id: string;
	description: string,
	subject: string,
	amount: number,
	status:Status,
	date: Date,
}

export enum Status {
	Paid = "Paid",
	Pending = "Pending",
}

export enum TransactionType {
	Income = "Income",
	Expense = "Expense",
}