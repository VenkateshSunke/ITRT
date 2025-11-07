import React from 'react';

const SampleButton = ({ label = 'More Info', onClick }) => {
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
    backgroundColor: '#6c757d', /* Secondary Gray */
    color: '#ffffff', /* White text (contrast 4.5:1 on #6c757d) */
    borderColor: '#6c757d',
    outline: 'none',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5a6268')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6c757d')}
    >
      {label}
    </button>
  );
};

export default SampleButton;