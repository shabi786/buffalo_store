import React from "react";
import { useSelector } from "react-redux";
import useItemTotal from "../hooks/useItemTotal";
import { loadRazorpay } from "razorpay";

const Payment = ({ text }) => {
    const [loading, setLoading] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);
    const getitemsTotal = useItemTotal();

    const handlePayment = async () => {
        setLoading(true);

        const response = await window.razorpay?.createPayment({
            amount: getitemsTotal() * 100, // Amount in paisa
            currency: "INR",
            receipt: `order_${Date.now()}`,
            payment_capture: 1, // Auto capture payment
        });

        if (response) {
            if (response.error) {
                console.error(response.error);
                // Handle error scenario
            } else {
                console.log("Payment successful:", response);
                // Handle success scenario
            }
        }

        setLoading(false);
    }

    return (
        <div className="my-20 mx-6">
            <h2 className="text-2xl font-bold mb-4">Payment</h2>
            <div className="w-2/3">
                {/* Display the cart items and total */}
                {/* You can use similar UI from your Cart component */}
            </div>
            <button
                className="bg-blue-500 text-white p-2 rounded-md"
                onClick={handlePayment}
                disabled={loading}
            >
                {loading ? "Processing..." : "Proceed to Pay"}
            </button>
        </div>
    );
}

export default Payment;