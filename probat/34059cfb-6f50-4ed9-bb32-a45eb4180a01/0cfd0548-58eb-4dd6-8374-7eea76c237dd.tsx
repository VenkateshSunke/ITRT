const DefaultExport = ({ label = "Get Started", onClick = () => console.log("Button clicked!") }) => {
  return (
    <button
      style={{
        fontFamily: 'inherit',
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '10px 20px',
        borderRadius: '25px', /* Changed: More rounded corners */
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