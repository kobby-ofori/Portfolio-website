import React, { useState } from 'react';

const ExtendableText = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p style={{color: '#6c757d'}}>
        {isExpanded ? text : text.slice(0, limit)}
        {text.length > limit && (
          <span onClick={toggleText} style={{ color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
            {isExpanded ? ' Read less' : '... Read more'}
          </span>
        )}
      </p>
    </div>
  );
};

export default ExtendableText;
