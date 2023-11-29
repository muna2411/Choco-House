import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import {  useParams} from "react-router-dom";



const DoCheckOut = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    // const location = useLocation();
    // const { amount } = location.state ;
    const { amount } = useParams();

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
         
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
          
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe}>
            Pay
        </button>
        <p>Amount: {amount}</p>
        <p className="text-red-600">{error}</p>
    </form>
    );
};

export default DoCheckOut;