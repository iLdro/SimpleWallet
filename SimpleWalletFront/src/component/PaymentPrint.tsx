import React from 'react';
import '../css/paymentPrint.css';


interface PaymentPrintProps {
    date: Date;
    amount: number;
}


function PaymentPrint(props: PaymentPrintProps) {
    return (
        <div className="card-container">
            <p>Date: {props.date.toString().substring(0,16)}</p>
            <p>Amount: {props.amount}</p>
        </div>
    )
}

export default PaymentPrint;