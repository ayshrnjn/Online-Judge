import React, { useState } from 'react';

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment Data:', formData);
    // Implement your payment processing logic here
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles.form}>
      <input
        type="text"
        name="name"
        placeholder="Name on Card"
        value={formData.name}
        onChange={handleChange}
        style={formStyles.input}
        required
      />
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={formData.cardNumber}
        onChange={handleChange}
        style={formStyles.input}
        required
      />
      <input
        type="text"
        name="expirationDate"
        placeholder="Expiration Date (MM/YY)"
        value={formData.expirationDate}
        onChange={handleChange}
        style={formStyles.input}
        required
      />
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={formData.cvv}
        onChange={handleChange}
        style={formStyles.input}
        required
      />
      <button type="submit" style={formStyles.button}>
        Purchase Premium
      </button>
    </form>
  );
};

const formStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc',
    color: 'black'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    color: '#ffffff',
    backgroundColor: 'rgb(255, 161, 22)',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  } as React.CSSProperties,
  buttonHover: {
    backgroundColor: 'rgb(193, 122, 15)',
  },
};

export default PaymentForm;
