import React from 'react'
import '../css/payementCard.css'

interface PayementCardProps {
    nameOf: string;
    date: string;
    description: string;
    category: string;
    currency: string;
    amount: number;
}

export default function PayementCard(props: PayementCardProps) {
    return (
        <>
            <div className="card">
                    <div className='top-container'>
                        <h2 className="card-title">{props.nameOf}</h2>
                        <div className="card-price">
                            <p className="card-amount" >{props.amount}</p>
                            <p className="card-currncy" >{props.currency}</p>
                        </div>
                    </div>
                    <div className='bottom-container'>
                        <p className="card-category" >{props.category}</p>
                        <h6 className="card-date"> Réalisé le {props.date}</h6>
                    </div>
            </div>
        </>
    )
}
