import React, { useState } from 'react';

const GSTServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50vh',
    padding: '2rem 0',
  };

  const buttonStyle = (isHovered) => ({
    background: 'linear-gradient(to bottom, #1e3a8a, #2a4a9a)',
    color: 'white',
    padding: '1.5rem',
    borderRadius: isHovered ? '6rem' : '1rem',
    transition: 'all 0.3s',
    width: '80%',
    fontSize: '1.5rem',
    border: 'none',
    boxShadow: isHovered
      ? '0 0 15px 5px rgba(42, 90, 169, 0.7), 0 2px 4px rgba(0,0,0,0.2)'
      : '0 2px 4px rgba(0,0,0,0.2)',
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    width: '90%',
    maxWidth: '140rem',
    margin: '0 auto',
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1e3a8a' }}>
        GST Services
      </h1>
      <div style={gridStyle}>
        {[
          'GST Registration',
          'GST Return Filing',
          'GST LUT Filing',
          'GST Registration Cancellation',
          'GST Annual Return',
          'GST Invoicing',
          'GST EInvoicing',
          'EWay Bill',
          'Input Tax Credit'
        ].map((service, index) => (
          <button
            key={index}
            style={buttonStyle(hoveredIndex === index)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleMouseLeave}
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GSTServices;