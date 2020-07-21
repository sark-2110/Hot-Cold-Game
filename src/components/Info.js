import React from 'react';

class Info extends React.Component {
    render() {
        return (
        <div className="text-left">
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" style={{width:"100%"}}>GAME RULES</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">GAME RULES</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            This is a Number Guessing Game with the following rules:
                            <ol>
                                <li>The machine picks a random number between 1 to 100 and keeps it hidden.</li>
                                <li>You need to guess until you can find the hidden secret number.</li>
                                <li>You will get feedback on how close or far your guess is in the form of the following keywords ("cold", "warm", "hot", "extremely hot").</li>
                            </ol>
                            Everything clear?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-dismiss="modal" style={{width:"100%"}}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Info;