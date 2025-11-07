import React from 'react';

const SampleButton = ({ label = 'Proceed with Caution', onClick }) => {
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
    backgroundColor: '#ffc107', /* Warning Yellow */
    color: '#212529', /* Dark Gray text for contrast (contrast 4.7:1 on #ffc107) */
    borderColor: '#ffc107',
    outline: 'none',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e0a800')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffc107')}
    >
      {label}
    </button>
  );
};

export default SampleButton;