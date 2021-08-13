import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from './styled.jsx';

export const Status = ({gameState}) => {
    
    let className = 'btn btn-primary';
    if (gameState === 'IN_PROGRESS') {
        className = 'btn btn-info';
    } else if (gameState === 'DONE') {
        className = 'btn btn-success';
    }

    return (
        <StyledButton>
            <div className="d-grid gap-2">
                <button className={className} type="button">
                    {`State: ${gameState}`}
                </button>
            </div>
        </StyledButton>
    )
}

Status.propTypes = {
    gameState: PropTypes.string.isRequired,
}
