const DefaultExport = ({ label = "Confirm", onClick = () => console.log("Button clicked!") }) => {
  return (
    <button
      style={{
        fontFamily: 'inherit',
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: '#28a745', /* Success Green */
        color: '#ffffff',
        transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default DefaultExport;