const DefaultExport = ({ label = "Large Action", onClick = () => console.log("Button clicked!") }) => {
  return (
    <button
      style={{
        fontFamily: 'inherit',
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '14px 28px', /* Changed: Larger padding */
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: '#0056b3',
        color: '#ffffff',
        transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#004085')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default DefaultExport;