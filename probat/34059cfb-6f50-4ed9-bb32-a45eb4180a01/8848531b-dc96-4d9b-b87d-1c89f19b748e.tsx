const DefaultExport = ({ label = "Delete", onClick = () => console.log("Button clicked!") }) => {
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
        backgroundColor: '#c82333', /* Danger Red */
        color: '#ffffff',
        transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#bd2130')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default DefaultExport;