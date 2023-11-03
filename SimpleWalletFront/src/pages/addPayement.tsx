import { useState } from "react";
import React from "react";
import Layout from "./layout";
import '../css/addPayement.css'
import FormData from "../models/PaymentData";
import axios from "axios";
import PayementCard from "../component/PayementCard";

function AddPayment() {

    const [payments, setPayments] = useState<FormData[]>([]);
    const [category, setCategory] = useState("");

    const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {
        console.log("localsotrage");
        console.log(localStorage.getItem("userId"));
        const userId = localStorage.getItem("userId");
        e.preventDefault();
        const dateParts = e.currentTarget.date.value.split("/");
        if (dateParts[1] < 1 || dateParts[1] > 12) {
            console.error('Invalid month value');
            alert("Please enter a valid month");
        } else {
            const dateParts = e.currentTarget.date.value.split("/");
            const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
            
            const payment = {
                nameOf : e.currentTarget.nameOf.value,
                user: userId,
                amount: e.currentTarget.amount.value,
                description: e.currentTarget.description.value,
                date: dateObject,
                category: category, 
                currency: e.currentTarget.currency.value,
                id: userId,
                datas: [
                  {
                    y: dateObject,
                    x: e.currentTarget.amount.value,
                    category: category,
                  },
                ],
              };
              

            
        
            
            if (payment.nameOf == "" || payment.user == "" || payment.amount == 0 || payment.description == "" || payment.category == "" || payment.currency == "") {
                alert("Please fill all the fields");
                return;
            }
            else {
                payment.nameOf = payment.nameOf.toString();
                payment.user = payment.user.toString();
                payment.description = payment.description.toString();
                payment.category = payment.category.toString();
                payment.currency = payment.currency.toString();
            }

            const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
            const formattedDate = dateObject.toLocaleDateString('en-GB'); // Converts to dd/mm/yyyy format
            if (!dateRegex.test(formattedDate)) {
                alert("Please enter a valid date");
                return;
            } else {
                payment.date = dateObject; // Keep the Date object for API request if needed
            }


            if (isNaN(payment.amount) || payment.amount <= 0) {
                alert("Please enter a valid amount");
                return;
            }
            else {
                payment.amount = parseFloat(payment.amount.toString());
            }
        

            setPayments([...payments, payment]);
            axios.post('http://localhost:3000/graphs/SaveGraph', payment)
            .then((response) => {
                console.log("RESPONSE")
                console.log(response);
            }, (error) => {
                console.log(error);
            });
           
        }
    }
    const handleEraseCards = () => {
        // Set payments state to an empty array to erase all cards
        setPayments([]);
    };
    return (
        <div>
            <Layout/>  
            {/* <div className="container"> */}

                <h1>Add a Payment</h1>
            
                <form className="grid-form" onSubmit={handleSubmit}>
                    <input name="nameOf" id="nameOf" className="form_field" placeholder="name" />
                    <input name="amount" id="amount" className="form_field amount_field" placeholder="amount" />
                    <input name="description" id="description" className="form_field" type="text" placeholder="description" />
                    <select
                        name="category"
                        id="category"
                        className="form_field"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                        <option value="">Select category</option>
                        <option value="Cash payment">Cash payment</option>
                        <option value="Card payment">Card payment</option>
                    </select>
                    <input name="date" id="date" className="form_field" placeholder="dd/mm/yyyy" />
                    <input name="currency" id="currency"className="form_field" placeholder="currency" />
                    <button type="submit" className="button_form">Submit</button>
                </form>
            
                <div className="carousel-container">
                    {payments.map((payment, index) => (
                        <div key={index} className="payment-card">
                        <PayementCard
                            key={index}
                            nameOf={payment.nameOf}
                            date={payment.date.toLocaleDateString()}
                            description={payment.description}
                            category={payment.category}
                            currency={payment.currency}
                            amount={payment.amount}
                        />
                        </div>
                    ))}
                </div>
                <button id="deleteCardCheck" onClick={handleEraseCards}>Erase cards ? </button>
            {/* </div> */}
        </div>
    

    )
}

export default AddPayment;