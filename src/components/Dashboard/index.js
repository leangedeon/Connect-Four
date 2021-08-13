import { connect } from 'react-redux';
import { Dashboard } from './presentational.jsx';
import {
  setPlayer,
  setGame,
} from '../../actions';

const mapStateToProps = (state) => ({
  game: state.game,
  gameId: state.gameId,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setPlayer: (player) => dispatch(setPlayer(player)),
  setGame: (game) => dispatch(setGame(game)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
