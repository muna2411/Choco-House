import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import DoCheckOut from "./DoCheckOut";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const DoPayment = () => {
    return (
        <div>
           
            <div>
                <Elements stripe={stripePromise}>
                    <DoCheckOut></DoCheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default DoPayment;