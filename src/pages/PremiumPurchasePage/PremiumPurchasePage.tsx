// PremiumPurchasePage.tsx
import React from 'react';
import PaymentForm from '@/components/PaymentForm/PaymentForm';

const PremiumPurchasePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Upgrade to Premium</h1>
      <p style={styles.description}>
        Get access to exclusive features and content by upgrading to a premium account.
      </p>
      <PaymentForm />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'rgb(2 94 107)', // Dark Blue
    color: '#ffffff', // White text
    height: '100vh',
  },
  header: {
    fontSize: '2.5em',
    margin: '20px 0',
  },
  description: {
    fontSize: '1.2em',
    marginBottom: '40px',
    textAlign: 'center' as 'center',
    maxWidth: '600px',
  },
};

export default PremiumPurchasePage;
