export type TableData = {
	id?: string;
	description: string,
	subject: string,
	amount: number,
	status:string,
	type: string,
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