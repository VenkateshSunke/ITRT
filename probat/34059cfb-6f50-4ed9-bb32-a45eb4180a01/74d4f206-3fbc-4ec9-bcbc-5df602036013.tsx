const DefaultExport = ({ label = "View Details", onClick = () => console.log("Button clicked!") }) => {
  return (
    <button
      style={{
        fontFamily: 'inherit',
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        color: '#0056b3', /* Primary Blue */
        border: '2px solid #0056b3',
        transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#0056b3';
        e.currentTarget.style.color = '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#0056b3';
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default DefaultExport;