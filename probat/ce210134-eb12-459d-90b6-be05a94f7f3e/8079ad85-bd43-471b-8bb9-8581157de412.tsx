import React from 'react';

const SampleButton = ({ label = 'Delete', onClick }) => {
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
    backgroundColor: '#dc3545', /* Danger Red */
    color: '#ffffff', /* White text (contrast 4.5:1 on #dc3545) */
    borderColor: '#dc3545',
    outline: 'none',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc3545')}
    >
      {label}
    </button>
  );
};

export default SampleButton;