import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from './styled.jsx';

export const Coin = ({position, setMove, game}) => {
    return (
        <StyledButton onClick={() => setMove(position, game.player)}>
            <button type="button" className="btn btn-secondary disabled">Put Coin</button>
        </StyledButton>
    )
}

Coin.propTypes = {
    position: PropTypes.number.isRequired,
    setMove: PropTypes.func,
    game: PropTypes.shape({
        player: PropTypes.number
      })
}
