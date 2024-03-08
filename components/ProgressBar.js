import React, { useState } from 'react';

const ProgressBar = () => {
    const [percentage, setPercentage] = useState(0);
  
    const handlePercentageChange = (e) => {
      const newPercentage = Math.max(0, Math.min(100, Number(e.target.value)));
      setPercentage(newPercentage);
    };
  
    return (
      <div>
        <h2>Progress bar</h2>
        <div style={{ border: '1px solid #000', padding: '3px', width: '300px' }}>
          <div style={{ width: `${percentage}%`, background: '#aaa', padding: '10px 0', textAlign: 'center', color: '#fff' }}>
            {percentage}%
          </div>
        </div>
        <div>
          <label>
            Input Percentage:
            <input type="number" value={percentage} onChange={handlePercentageChange} />
          </label>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;