import PocketBase, { type RecordModel } from 'pocketbase';
import env from '$lib/env.json';
class api {
	private pb: PocketBase;

	constructor() {
		this.pb = new PocketBase(env.PB_URL);
		this.doLogin();
	}

	private async doLogin() {
		await this.pb.collection('users').authWithPassword(env.PB_USER, env.PB_PW);
	}

	public async createPayment(
		name: string,
		email: string,
		instituition: string,
		dinner: boolean,
		paymentId: string,
		tiNumber: string,
		ticketName: string,
		paymentMethod: string,
		selectedDay: string,
		studentCardFile: File | null
	): Promise<RecordModel> {
		const formData = new FormData();

		formData.append('PaymentId', paymentId);
		formData.append('Name', name);
		formData.append('Email', email);
		formData.append('Instituition', instituition);
		formData.append('Dinner', dinner ? 'true' : 'false');
		formData.append('Paid', 'false');
		formData.append('MembershipNumber', tiNumber);
		formData.append('Ticket', ticketName);
		formData.append('PaymentMethod', paymentMethod);
		formData.append('Selected_Day', selectedDay ?? '');

		if (studentCardFile) {
			formData.append('Student_Card', studentCardFile);
		}

		return await this.pb.collection('Aquitex_Form').create(formData);
	}

	public async setPaymentTrue(
		paymentId: string,
		paypalPaymentId: string,
		isPaymentByCard: boolean,
		isPaymentByBank: boolean
	): Promise<RecordModel | false> {
		if (paymentId.length > 0) {
			const record = await this.pb
				.collection('Aquitex_Form')
				.getFirstListItem(`PaymentId="${paymentId}"`);

			if (record) {
				let paymentMethodValue: string;
				if (isPaymentByBank) {
					paymentMethodValue = 'Transferência Bancária';
				} else if (isPaymentByCard === true) {
					paymentMethodValue = 'Cartão';
				} else {
					paymentMethodValue = 'PayPal';
				}

				const data = {
					Paid: !isPaymentByBank,
					PayPal_Payment_Id: isPaymentByBank ? '' : paypalPaymentId,
					PaymentMethod: paymentMethodValue
				};
				return await this.pb.collection('Aquitex_Form').update(record.id, data);
			}
		}

		return false;
	}

	public async applyCoupon({
		couponCode,
		activeName
	}: {
		couponCode: string;
		activeName: string;
	}): Promise<{
		status: boolean;
		value: number;
	}> {
		let result;

		try {
			result = await this.pb
				.collection('Aquitex_Coupons')
				.getFirstListItem(`code="${couponCode}" && ticket="${activeName}"`);
		} catch (error) {
			return { status: false, value: 0 };
		}

		return { status: true, value: result.new_price };
	}
}

export const API = new api();
