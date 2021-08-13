import React from "react";
import { StyledButton } from './styled.jsx';

export const Notification = () => (
    <StyledButton>
        <div className="d-grid gap-2">
            <button className="btn btn-lg btn-secondary" type="button">
                Please wait for your turn...
            </button>
        </div>
    </StyledButton>
)
