import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  
  const handleChange = (event) => {
    setText(event.target.value);
  }
  
  const countWords = () => {
    if (text.trim() === '') {
      return 0;
    }
    
    return text.trim().split(/\s+/).length;
  }
  
  return (
    <div>
        <h1 className="heading">Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Type your paragraph here..."
        value={text}
        onChange={handleChange}
        style={{ width: '50%', height: '200px' }}
      />
      <p className="wc">Word Count: {countWords()}</p>
    </div>
  );
}

export default WordCounter;
