import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { Row } from "../../components/Row/index.jsx";
import { ListCoins } from "../../components/ListCoins/index.jsx";
import { reverseObject } from '../../utils';
import { Notification } from '../Notification/index.jsx';
const PATH_API = 'http://localhost:3001';

export const Dashboard = ({game, gameId, player, setPlayer, loading, setGame}) => {
    const gameReversed = reverseObject(game.dashboard);

    const createGame = async () => {
        const options = {  headers: { 'Content-Type': 'application/json' }, method: 'POST'};
        const data = await fetch(`${PATH_API}/game`, options);
        const dataJSON = await data.json();
        return dataJSON;
    }

    const getGame = async () => {
        const data = await fetch(`${PATH_API}/game`)
        const dataJSON = await data.json()
        return dataJSON;
    }

    useEffect( async () => {

        if (!gameId) {
            let game = {};

            if(player === 1)  {
                game = await createGame();
            } else {
                game = await getGame();
            }

            setGame(game);
            setPlayer(player);
        }
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fuild">
                    <a href="/" className="navbar-brand">
                        Connect Four
                    </a>
                </div>
            </nav>
            <main className="bg">
                <div className="container">
                    <div className="row">
                        <h3>Welcome player #{player}</h3>
                        <p className="text-secondary">Game Id {gameId}</p>
                    </div>
                    
                    <div>

                        {
                            (loading) ? <Notification /> : <ListCoins quantity={6} />
                        }

                        {
                            gameReversed.map((row, index) => (
                                <Row rowData={row} key={`row_${index}`} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    )

}

Dashboard.propTypes = {
    player: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    setPlayer: PropTypes.func.isRequired,
    gameId: PropTypes.string,
    setGame: PropTypes.func.isRequired,    
    game: PropTypes.shape({
        dashboard: PropTypes.object
      })
}
