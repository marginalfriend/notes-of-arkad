import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { TableData } from "./custom-types"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function validateCashflowForm(formData: FormData) {
	const data = {
		description: formData.get('description'),
		subject: formData.get('subject'),
		amount: formData.get('amount'),
		date: formData.get('date'),
		type: formData.get('type'),
		status: formData.get('status'),
	}

	if (
		!data.description
		|| !data.subject
		|| !data.amount
		|| !data.date
		|| !data.type
		|| !data.status
	) {

		return

	} else {
		
		const result: TableData = {
			description: data.description.toString(),
			subject: data.subject.toString(),
			amount: parseInt(data.amount.toString()),
			date: new Date(data.date.toString()),
			type: data.type.toString(),
			status: data.status.toString(),
		}

		return result
	}
}

export const rupiahConverter = (amount:number) => {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR'
	}).format(amount)
}
