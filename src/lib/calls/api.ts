import PocketBase, { type RecordModel } from 'pocketbase';
import env from "$lib/env.json"
class api {

    private pb: PocketBase;

    constructor() {
        this.pb = new PocketBase(env.PB_URL);
        this.doLogin();
    }

    private async doLogin() {
        await this.pb.collection('users').authWithPassword(
            env.PB_USER,
            env.PB_PW,
        );
    }

    public async createPayment(name: string, email: string, instituition: string, dinner: boolean, paymentId: string, tiNumber: string, ticketName: string, paymentMethod: string): Promise<RecordModel> {
        const data = {
            "PaymentId": paymentId,
            "Name": name,
            "Email": email,
            "Instituition": instituition,
            "Dinner": dinner,
            "Paid": false,
            "MembershipNumber": tiNumber,
            "Ticket": ticketName,
            "PaymentMethod": paymentMethod
        };

        return await this.pb.collection('Aquitex_Form').create(data);
    }

    public async setPaymentTrue(paymentId: string): Promise<RecordModel | false> {

        if (paymentId.length > 0) {
            const record = await this.pb.collection('Aquitex_Form').getFirstListItem(`PaymentId="${paymentId}"`);
            if (record) {
                const data = {
                    "Paid": true,
                };
                return await this.pb.collection('Aquitex_Form').update(record.id, data);
            }
        }
        
        return false
    }

}

export const API = new api();