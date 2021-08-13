import React from "react";
import PropTypes from "prop-types";
import { Circle } from "../Circle/index.jsx";
import { StyledPiece } from './styled.jsx';

export const Piece = ({piece}) => {

    return (
        <StyledPiece>
            <Circle color={piece} />
        </StyledPiece>
    )
}


Piece.propTypes = {
    piece: PropTypes.number
}