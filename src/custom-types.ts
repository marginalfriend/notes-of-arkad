export type TableData = {
	description: string,
	subject: string,
	amount: number,
	status:Status
}

export enum Status {
	Paid = "Paid",
	Pending = "Pending",
}