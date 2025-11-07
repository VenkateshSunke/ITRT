import React from 'react';

const SampleButton = ({ label = 'Click Me', onClick }) => {
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
    backgroundColor: '#007bff', /* Primary Blue */
    color: '#ffffff', /* White text (contrast 4.5:1 on #007bff) */
    borderColor: '#007bff',
    outline: 'none',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
    >
      {label}
    </button>
  );
};

export default SampleButton;