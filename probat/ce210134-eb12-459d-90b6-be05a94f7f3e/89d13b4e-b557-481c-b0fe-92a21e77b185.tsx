import React from 'react';

const SampleButton = ({ label = 'Confirm', onClick }) => {
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
    backgroundColor: '#28a745', /* Success Green */
    color: '#ffffff', /* White text (contrast 4.5:1 on #28a745) */
    borderColor: '#28a745',
    outline: 'none',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
    >
      {label}
    </button>
  );
};

export default SampleButton;