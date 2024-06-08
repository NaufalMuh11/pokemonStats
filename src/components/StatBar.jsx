import React from 'react';

function StatBar({ label, value, max, icon }) {
  return (
    <div className="flex items-center space-x-2">
      <img src={icon} alt={label} className="h-6 w-6" />
      <div>
        <p className='font-bold'>{label}: {value}</p>
        <progress className="progress progress-warning w-56 h-4 border border-black" value={value} max={max}></progress>
      </div>
    </div>
  );
}

export default StatBar;
