import React from "react";
import { useHistory } from 'react-router-dom';
import { StyledWelcome, StyledButton } from './styled.jsx';

export const Welcome = () => {
    let history = useHistory();

    const onClick = (goTo) => {    
        let path = (goTo === 1) ? '/player' : '/guest';
        history.push(path);
    }
    
    return (
        <StyledWelcome>
            <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                    <h4 className="card-title">Welcome to Connect Four</h4>
                    <p className="card-text">Please select your side</p>
                </div>
            </div>

            <StyledButton type="button" className="btn btn-success" onClick={() => onClick(1)}>Player</StyledButton>
            <StyledButton type="button" className="btn btn-info" onClick={() => onClick(2)}>Guest</StyledButton>
        </StyledWelcome>

    )
}
