const DefaultExport = ({ label = "Skip", onClick = () => console.log("Button clicked!") }) => {
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
        color: '#212529', /* Dark Text */
        border: '2px solid transparent',
        transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f0f0f0';
        e.currentTarget.style.color = '#212529';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#212529';
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default DefaultExport;