import {ChangeEvent, FC, useState} from "react";
import PaymentProcessorService from "../../../services/PaymentProcessorService";
import {PaymentMethod} from "../../../services/payments/types";

const paymentProcessorService = new PaymentProcessorService();

const CheckoutForm: FC = () => {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>();
    const [paymentResult, setPaymentResult] = useState('');

    const handlePayment = async () => {
        if (!paymentMethod) {
            return; //Show validation error
        }
        try {
            const amount = 100; // Example amount
            const result = await paymentProcessorService.processPayment(paymentMethod, amount);
            setPaymentResult(result);
        } catch (error) {
            setPaymentResult('Payment processing failed');
        }
    };

    return (
        <div>
            <select value={paymentMethod as string} onChange={(e: ChangeEvent<HTMLSelectElement>) => setPaymentMethod(e.target?.value as PaymentMethod)}>
                <option value="">Select payment method</option>
                <option value="Stripe">Stripe</option>
                <option value="Braintree">Braintree</option>
                <option value="PayPal">PayPal</option>
            </select>
            <button onClick={handlePayment}>Process Payment</button>
            {paymentResult && <p>{paymentResult}</p>}
        </div>
    );
};

export default CheckoutForm;