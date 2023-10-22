import { useState } from "react";
import React from "react";
import Layout from "./layout";
import '../css/addPayement.css'
import FormData from "../models/PaymentData";
import PayementCard from "../component/PayementCard";

function AddPayment() {

    const [payments, setPayments] = useState<FormData[]>([]);

    const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payment = {
            nameOf : e.currentTarget.nameOf.value,
            amount : e.currentTarget.amount.value,
            description : e.currentTarget.description.value,
            date : e.currentTarget.date.value,
            category : e.currentTarget.category.value,
            currency : e.currentTarget.currency.value
        };
        if (payment.nameOf == "" || payment.amount == 0 || payment.description == "" || payment.category == "" || payment.currency == "") {
            alert("Please fill all the fields");
            return;
        }
        else {
            payment.nameOf = payment.nameOf.toString();
            payment.description = payment.description.toString();
            payment.category = payment.category.toString();
            payment.currency = payment.currency.toString();
        }

        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateRegex.test(payment.date.toString())) {
            alert("Please enter a valid date");
            return;
        }

        if (isNaN(payment.amount) || payment.amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }
        else {
            payment.amount = parseFloat(payment.amount.toString());
        }

        setPayments([...payments, payment]);

    }

    return (
        <div id="container">

        <h1>Add a Payment</h1>
    
        <form className="grid-form" onSubmit={handleSubmit}>
            <input name="nameOf" id="nameOf" className="form_field" placeholder="name" />
            <input name="amount" id="amount" className="form_field" placeholder="amount" />
            <input name="description" id="description" className="form_field" type="text" placeholder="description" />
            <input name="category" id="category" className="form_field" placeholder="category" />
            <input name="date" id="date" className="form_field" placeholder="dd/mm/yyyy" />
            <input name="currency" id="currency"className="form_field" placeholder="currency" />
            <button type="submit" className="button_form">Submit</button>
        </form>

        <div className="carousel-container">
        {payments.map((payment, index) => (
            <PayementCard
                key={index}
                nameOf={payment.nameOf}
                date={payment.date}
                description={payment.description}
                category={payment.category}
                currency={payment.currency}
                amount={payment.amount}
            />
        ))}
        </div>

    </div>
    

    )
}

export default AddPayment;