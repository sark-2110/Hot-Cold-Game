import React, { Component } from 'react';
import Form from './components/Form';
import Progress from './components/Progress';
import Info from './components/Info';
import {getInitialState ,getFeedback } from './utils/Random';

import './App.css';

class App extends Component {
  state = getInitialState();

  resetGame = () => this.setState(getInitialState());

  updateAppState = (guess) => {
    const { actual } = this.state;

    const absDiff = Math.abs(guess - actual);
    const { feedbackMessage, feedbackColor } = getFeedback(absDiff);

    this.setState(prevState => ({
      guess,
      allGuesses: [...prevState.allGuesses, { guess, feedbackColor }],
      attempt: prevState.attempt + 1,
      feedbackMessage,
      block: absDiff === 0,
    }));
  }

  render() {
    const { allGuesses, feedbackMessage, block, attempt } = this.state;

    const guessList = allGuesses.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ));

    return (
      <div className="container-fluid text-center">
        <div className="card mx-auto shadow p-3 mb-5 bg-white rounded" style={{width: "22rem"}}>
          <div className="card-body">
            <h1 className="card-title display-3">Hot or Cold</h1>
            <hr />
            <div className={`feedback ${feedbackMessage[0].toLowerCase()}`}>
              <h2 className="feedback-text">{feedbackMessage}</h2>
            </div>
            <Form block={block} returnGuessToApp={value => this.updateAppState(value)} />
            <Progress feedbackMessage={feedbackMessage} attempt={attempt} guessList={guessList} />
            <button type="button" className="btn btn-danger reset" onClick={this.resetGame}>RESET GAME</button>
            <Info />
          </div>
        </div>
      </div>
    );
  }
}

export default App;