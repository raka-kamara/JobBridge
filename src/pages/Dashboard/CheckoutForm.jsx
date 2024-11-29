import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault;

    if(!stripe || !elements){
      return
    }
    const card = elements.getElement(CardElement)

    if(card === null){
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options=
        {{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        />
        <button
          className="btn btn-sm btn-primary my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600"></p>
        {transactionId && (
          <p className=" text-green-600">
            Your transaction ID: {transactionId}
          </p>
        )}

    </form>
  );
};

export default CheckoutForm;