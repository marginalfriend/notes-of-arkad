export type TableData = {
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