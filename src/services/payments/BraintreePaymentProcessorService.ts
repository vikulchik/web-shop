import {PaymentProcessor} from "./PaymentProcessor";

export class BraintreePaymentProcessor implements PaymentProcessor {
    async processPayment(amount: number): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Braintree payment of $${amount} processed successfully`);
            }, 500);
        });
    }
}
