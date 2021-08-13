import { connect } from 'react-redux';
import { Coin } from './presentational.jsx';
import {
    setLoading,
    setGame,
} from '../../actions';

const mapStateToProps = (state) => ({
    loading: state.loading,
    gameId: state.gameId,
    player: state.player,
});

const mapDispatchToProps = (dispatch) => ({
    setLoading: (loading) => dispatch(setLoading(loading)),
    setGame: (game) => dispatch(setGame(game)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coin);
