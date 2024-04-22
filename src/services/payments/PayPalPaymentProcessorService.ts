import {PaymentProcessor} from "./PaymentProcessor";

export class PayPalPaymentProcessor implements PaymentProcessor {
    async processPayment(amount: number): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`PayPal payment of $${amount} processed successfully`);
            }, 500);
        });
    }
}