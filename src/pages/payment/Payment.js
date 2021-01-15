import { CardElement } from '@stripe/react-stripe-js';
import { usePaymentContext } from '../../contexts/payment.context';
import usePayment from './usePayment';

const Payment = () => {
  const { paymentState } = usePaymentContext();
  const { loading, handlePayment } = usePayment();

  return (
    <>
      <div className="container">
        <h1 style={{ marginBottom: '2rem' }}>Payment</h1>
        <form onClick={(e) => handlePayment(e)}>
          <CardElement />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: '1rem' }}
            disabled={loading}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
