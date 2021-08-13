import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from './styled.jsx';
const PATH_API = process.env.PATH_API;

export const Coin = ({position, gameId, setLoading, setGame, player}) => {

    const persistMovement = async (gameId, position, player) => {
        const options = {  headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify({'player': player})};
        const data = await fetch(`${PATH_API}/game/${gameId}/move/${position}`, options);
        const dataJSON = await data.json();
        return dataJSON;
    }

    const getGame = async (gameId) => {
        const data = await fetch(`${PATH_API}/game/${gameId}`)
        const dataJSON = await data.json()

        return dataJSON;
    }

    const checkTurn = async (gameId, player) => {
        const data = await getGame(gameId);

        if (data.next !== player) {
            return checkTurn(gameId, player);
        }
    }

    const makeMovement = async (gameId, position, player) => {
        setLoading(true);

        const updatedGame = await persistMovement(gameId, position, player);

        setGame(updatedGame);

        await checkTurn(gameId, player);
        setLoading(false);

        const updatedGameAfterPlay = await getGame(gameId);

        setGame(updatedGameAfterPlay);
    }

    return (
        <StyledButton onClick={() => makeMovement(gameId, position, player)}>
            <button type="button" className="btn btn-primary">Put Coin</button>
        </StyledButton>
    )
}

Coin.propTypes = {
    position: PropTypes.number.isRequired,
    gameId: PropTypes.string,
    setGame: PropTypes.func,
    setLoading: PropTypes.func,
    player: PropTypes.number
}
