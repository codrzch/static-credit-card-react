import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function CreditCard({ cardInfo }) {
    let {name, cardNumber, expirationDate, bankName} = cardInfo;
    return (
        <div className="credit-card">
            <div className="bank-name">{bankName}</div>
            <div className="card-number">{cardNumber}</div>
            <div className="first-four-digits">{cardNumber.substring(0, 4)}</div>
            <div className="expiration">
                <span className="valid-thru">Valid Thru</span> <span className="date">{expirationDate}</span>
            </div>
            <div className="name">{name}</div>
        </div>
    );
}
CreditCard.propTypes = {
    cardInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        cardNumber: PropTypes.string.isRequired,
        expirationDate: PropTypes.string.isRequired,
        bankName: PropTypes.string.isRequired
    }).isRequired
};

let cardInfo = {
    name: "CARDHOLDER",
    cardNumber: "1234 5678 8765 4321",
    expirationDate: "12/20",
    bankName: "BANK, INC."
};

ReactDOM.render(
    <CreditCard cardInfo={cardInfo} />,
    document.querySelector('#root')
);