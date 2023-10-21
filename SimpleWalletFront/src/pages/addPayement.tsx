import { useState } from "react";
import React from "react";
import '../css/addPayement.css'
import FormData from "../models/PaymentData";
import axios from "axios";

function AddPayment() {

    const [payements, setPayements] = useState<FormData[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dateParts = e.currentTarget.date.value.split("/");
        if (dateParts[1] < 1 || dateParts[1] > 12) {
            console.error('Invalid month value');
            alert("Please enter a valid month");
        } else {
            const dateParts = e.currentTarget.date.value.split("/");
            const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
            const payment = {
                user : "652e8f2d0e15c03b283c8cc1",
                amount : e.currentTarget.amount.value,
                description : e.currentTarget.description.value,
                date : e.currentTarget.date.value,
                category : e.currentTarget.category.value,
                currency : e.currentTarget.currency.value,
                id: "652e8f2d0e15c03b283c8cc1",
                datas: [{
                    y: dateObject,
                    x: e.currentTarget.amount.value,
                }],
            };

            alert("Payment added");
        
            
            if (payment.user == "" || payment.amount == 0 || payment.description == "" || payment.category == "" || payment.currency == "") {
                alert("Please fill all the fields");
                return;
            }
            else {
                payment.user = payment.user.toString();
                payment.description = payment.description.toString();
                payment.category = payment.category.toString();
                payment.currency = payment.currency.toString();
            }

            const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (!dateRegex.test(payment.date.toString())) {
                alert("Please enter a valid date");
                return;
            }
            else {
                payment.date = new Date(payment.date);
            }

            if (isNaN(payment.amount) || payment.amount <= 0) {
                alert("Please enter a valid amount");
                return;
            }
            else {
                payment.amount = parseFloat(payment.amount.toString());
            }
        

            setPayements([...payements, payment]);
            axios.post('http://localhost:3000/SaveGraph', payment)
            .then((response) => {
                console.log("RESPONSE")
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        }
    }

    return (
        <div id="container">
        <h1>Add a Payment</h1>
    
        <form className="grid-form" onSubmit={handleSubmit}>
            <input name="amount" id="amount" className="form_field" placeholder="amount" />
            <input name="description" id="description" className="form_field" type="text" placeholder="description" />
            <input name="category" id="category" className="form_field" placeholder="category" />
            <input name="date" id="date" className="form_field" placeholder="dd/mm/yyyy" />
            <input name="currency" id="currency"className="form_field" placeholder="currency" />
            <button type="submit" className="button_form">Submit</button>
        </form>
    </div>
    

    )
}

export default AddPayment;