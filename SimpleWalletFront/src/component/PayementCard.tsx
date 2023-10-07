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
                <div className="card-body">
                    <div className='top-container'>
                        <h5 className="card-title" style={{ color: '#fff' }}>{props.nameOf}</h5>
                        <div className="card-price">
                            <p className="card-amount" style={{ color: '#fff' }}>{props.amount}</p>
                            <p className="card-currncy" style={{ color: '#fff' }}>{props.currency}</p>
                        </div>
                    </div>
                    <div className='bottom-container'>
                        <p className="card-category" style={{ color: '#fff' }}>{props.category}</p>
                        <h6 className="card-date" style={{ color: '#fff' }}> Réalisé le {props.date}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
