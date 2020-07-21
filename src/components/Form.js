import React from 'react';

const Form = ({ block, returnGuessToApp }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (!block) {
      const guess = e.target.elements.guess.value;

      e.target.elements.guess.value = ''; // Clear input field after submit

      returnGuessToApp(guess);
    }
  };

  return (
    <form style={{ marginTop: '20px' }} onSubmit={onSubmit}>
      <div className="form-group">
        <input type="number" style={{ paddingBottom: '10px' }} className="form-control" name="guess" placeholder="Enter your guess..." min="0" max="100" required/>
      </div>
      <button type="submit" className="btn btn-success" style={{width:"100%"}}>GUESS NUMBER</button>
    </form>
  );
};

export default Form;