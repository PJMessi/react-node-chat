import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { createPaymentIntent } from "../../actions/payment.action";
import { useAuthContext } from "../../contexts/auth.context";
import { usePaymentContext } from '../../contexts/payment.context';

const usePayment = () => {
    const { authState } = useAuthContext();
    const stripe = useStripe();
    const elements = useElements();
    const { paymentDispatch } = usePaymentContext();
    const [loading, setLoading] = useState(false)

    const handlePayment = async (e) => {
        e.preventDefault();

        setLoading(true);
    
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }
    
        const clientSecret = await createPaymentIntent(paymentDispatch);
    
        const result = await stripe.confirmCardPayment(`${clientSecret}`, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: authState.user.name,
            },
          },
        });
    
        if (result.error) {
          // Show error to your customer (e.g., insufficient funds)
          console.log(result.error.message);
        } else {
          // The payment has been processed!
          if (result.paymentIntent.status === 'succeeded') {
              console.log('success')
            // Show a success message to your customer
            // There's a risk of the customer closing the window before callback
            // execution. Set up a webhook or plugin to listen for the
            // payment_intent.succeeded event that handles any business critical
            // post-payment actions.
          }
        }

        setLoading(false);
    }

    return { loading, handlePayment }
}

export default usePayment;