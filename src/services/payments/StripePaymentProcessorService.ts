import {PaymentProcessor} from "./PaymentProcessor";

export class StripePaymentProcessor implements PaymentProcessor {
    async processPayment(amount: number): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Stripe payment of $${amount} processed successfully`);
            }, 500);
        });
    }
}