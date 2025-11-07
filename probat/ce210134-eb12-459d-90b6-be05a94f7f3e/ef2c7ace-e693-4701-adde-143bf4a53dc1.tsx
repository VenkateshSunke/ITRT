import React from 'react';

const SampleButton = ({ label = 'Get Started', onClick }) => {
  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: '1px solid transparent',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
    backgroundColor: '#212529', /* Dark background */
    color: '#ffffff', /* White text (contrast 15.6:1 on #212529) */
    borderColor: '#212529',
    outline: 'none',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#343a40')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#212529')}
    >
      {label}
    </button>
  );
};

export default SampleButton;