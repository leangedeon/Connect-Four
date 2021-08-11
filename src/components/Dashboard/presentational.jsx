import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { Row } from "../../components/Row/index.jsx";
import { ListCoins } from "../../components/ListCoins/index.jsx";
import { reverseObject } from '../../utils';

export const Dashboard = ({game, player, setPlayer}) => {
    const gameReversed = reverseObject(game.dashboard);

    useEffect(() => {
        setPlayer(player)
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
                    <h3>Welcome</h3>
                </div>
                <div>
                    <ListCoins quantity={6} />
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
    setPlayer: PropTypes.func.isRequired,
    game: PropTypes.shape({
        dashboard: PropTypes.object
      })
}
