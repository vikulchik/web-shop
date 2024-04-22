import {StripePaymentProcessor} from "./payments/StripePaymentProcessorService";
import {BraintreePaymentProcessor} from "./payments/BraintreePaymentProcessorService";
import {PaymentProcessor} from "./payments/PaymentProcessor";
import {PayPalPaymentProcessor} from "./payments/PayPalPaymentProcessorService";
import {PaymentMethod} from "./payments/types";

class PaymentProcessorService {
    paymentProcessors: Record<PaymentMethod, PaymentProcessor>;

    constructor() {
        this.paymentProcessors = {
            'Stripe': new StripePaymentProcessor(),
            'Braintree': new BraintreePaymentProcessor(),
            'PayPal': new PayPalPaymentProcessor(),
        };
    }

    async processPayment(paymentMethod: PaymentMethod, amount: number): Promise<string> {
        const processor = this.paymentProcessors[paymentMethod];
        if (!processor) {
            throw new Error('Invalid payment method');
        }
        return processor.processPayment(amount);
    }
}

export default PaymentProcessorService;